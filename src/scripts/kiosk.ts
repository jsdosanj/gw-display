import QRCode from 'qrcode';
import displayContent from '../data/display-content';
import {
  advanceQuiz,
  createInitialState,
  getQuizScore,
  isQuizComplete,
  navigate,
  resetForInactivity,
  restartQuiz,
  selectPyara,
  selectTakht,
  setLanguage,
  submitQuizAnswer,
  wakeKiosk,
} from '../lib/kiosk-state';
import type {
  DisplayContent,
  HomeFeature,
  Language,
  LocalizedText,
  PanjPyaraProfile,
  QuizQuestion,
  TakhtProfile,
  View,
} from '../types/display';

const content: DisplayContent = displayContent;

function requireElement(id: string): HTMLElement {
  const element = document.getElementById(id);

  if (!element) {
    throw new Error(`Missing required kiosk element: ${id}`);
  }

  return element;
}

const attractScreen = requireElement('attract-screen');
const mainShell = requireElement('main-shell');
const header = requireElement('app-header');
const viewContent = requireElement('view-content');
const bottomNav = requireElement('bottom-nav');

let state = createInitialState(content);
let inactivityTimer = 0;
let langMenuOpen = false;
let openFaqIndex: number | null = null;
let hasCelebratedPerfect = false;
let resourceCarouselIndex = 0;
let resourceCarouselTimer = 0;
const qrDataUrls: Record<string, string> = {};

async function initQrCodes(): Promise<void> {
  for (const site of content.resources.sites) {
    try {
      qrDataUrls[site.id] = await QRCode.toDataURL(site.url, {
        width: 120,
        margin: 1,
        color: { dark: '#f7d989', light: '#050b14' },
      });
    } catch {
      qrDataUrls[site.id] = '';
    }
  }

  if (state.awake && (state.view === 'resources' || state.view === 'leaflets')) {
    renderView();
  }
}

void initQrCodes().then(() => {
  if (state.awake && (state.view === 'resources' || state.view === 'leaflets')) {
    renderView();
  }
});

const icons: Record<View, string> = {
  home: '🏛️',
  pyare: '⚔️',
  takhts: '🕌',
  quiz: '✨',
  learn: '📖',
  about: 'ℹ️',
  resources: '🌐',
  leaflets: '📄',
};

function text(value: LocalizedText, language = state.language): string {
  return value[language] ?? value.en;
}

function classForLanguage(language = state.language): string {
  return language === 'pa' ? 'gurmukhi' : '';
}

function applyDocumentDirection(language: Language): void {
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
}

function renderAttract(): void {
  attractScreen.innerHTML = `
    <div class="relative flex h-screen items-center justify-center overflow-hidden px-6 py-12" style="background-image:url('/assets/images/IMG_3198.jpeg');background-size:cover;background-position:center;">
      <div class="absolute inset-0 bg-night-950/80"></div>
      <div class="attract-halo absolute h-[32rem] w-[32rem] rounded-full bg-gold-400/18 blur-3xl"></div>
      <div class="float-slow absolute left-[12%] top-[18%] h-32 w-32 rounded-full bg-sky-400/12 blur-3xl"></div>
      <div class="float-delay absolute bottom-[18%] right-[10%] h-44 w-44 rounded-full bg-gold-300/10 blur-3xl"></div>
      <div class="soft-grid absolute inset-0 opacity-25"></div>
      <div class="glass-panel relative z-10 flex w-full max-w-5xl flex-col gap-8 overflow-hidden px-8 py-10 md:px-14 md:py-14">
        <div class="flex items-center justify-between gap-6">
          <div>
            <p class="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-gold-300">${text(content.ui.attractEyebrow)}</p>
            <h1 class="title-gradient text-4xl font-semibold md:text-6xl ${classForLanguage()}">${text(content.ui.attractTitle)}</h1>
          </div>
          <div class="hidden h-24 w-24 items-center justify-center rounded-full border border-gold-300/40 bg-gold-400/10 text-5xl text-gold-300 md:flex">☬</div>
        </div>
        <div class="grid gap-8 md:grid-cols-[1.4fr_0.9fr]">
          <div>
            <p class="max-w-3xl text-lg leading-8 text-cloud-200 md:text-2xl ${classForLanguage()}">${text(content.ui.attractSubtitle)}</p>
            <div class="mt-8 flex flex-wrap items-center gap-4 text-sm text-cloud-400">
              <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2">${text(content.sections.pyare.title)}</span>
              <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2">${text(content.sections.takhts.title)}</span>
              <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2">${text(content.sections.quiz.title)}</span>
            </div>
          </div>
          <div class="glass-panel flex flex-col justify-between gap-5 p-6">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.28em] text-gold-300">${text(content.ui.labels.collaborationWith)}</p>
              <p class="mt-4 text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(content.home.collaborationBanner)}</p>
            </div>
            <button type="button" data-action="start" class="rounded-full bg-gold-400 px-6 py-4 text-base font-semibold text-night-950 shadow-lg shadow-gold-400/20 transition active:scale-[0.98]">${text(content.ui.attractButton)}</button>
          </div>
        </div>
        <p class="text-sm uppercase tracking-[0.28em] text-cloud-400 ${classForLanguage()}">${text(content.ui.attractInstruction)}</p>
      </div>
    </div>
  `;
}

function renderLanguageMenu(): string {
  return `
    <div class="relative" id="lang-dropdown-wrapper">
      <button
        type="button"
        data-action="toggle-lang-menu"
        class="lang-badge"
        aria-haspopup="menu"
        aria-expanded="${langMenuOpen}"
        aria-controls="lang-menu"
        aria-label="${text(content.ui.languageLabel)}"
      >
        ${content.ui.languages[state.language]} ▾
      </button>
      <div class="lang-menu" id="lang-menu" role="menu" ${langMenuOpen ? '' : 'hidden'}>
          ${Object.entries(content.ui.languages)
          .map(
            ([code, label]) => `
              <button type="button" data-set-language="${code}" class="lang-option ${code === state.language ? 'active' : ''}">
                ${label}
              </button>
            `,
          )
          .join('')}
      </div>
    </div>
  `;
}

function renderHeader(): void {
  const copy = content.sections[state.view];

  header.innerHTML = `
    <div class="glass-header flex min-h-20 items-center justify-between px-4 py-2 md:min-h-24 md:px-8 md:py-0">
      <div class="flex min-w-0 items-center gap-4">
        <button type="button" data-nav="home" class="flex h-14 w-14 items-center justify-center rounded-full border border-gold-300/30 bg-white/5 text-2xl text-gold-300 transition active:scale-[0.98]">☬</button>
        <div class="min-w-0">
          <p class="truncate text-xs font-semibold uppercase tracking-[0.22em] text-cloud-400">${text(content.ui.experienceLabel)}</p>
          <h2 class="truncate text-xl font-semibold text-white md:text-2xl ${classForLanguage()}">${text(copy.title)}</h2>
          <p class="truncate text-xs text-cloud-400 md:text-sm ${classForLanguage()}">${text(copy.subtitle)}</p>
        </div>
      </div>
      <div class="flex items-center gap-3">
        ${renderLanguageMenu()}
        <button type="button" data-action="reset" class="hidden rounded-full border border-white/10 px-4 py-3 text-sm font-semibold text-cloud-200 transition active:scale-[0.98] md:block ${classForLanguage()}">${text(content.ui.reset)}</button>
      </div>
    </div>
  `;
}

function renderNav(): void {
  const views: View[] = ['home', 'pyare', 'takhts', 'quiz', 'learn', 'about', 'resources', 'leaflets'];

  bottomNav.innerHTML = `
    <div class="glass-header flex min-h-20 gap-2 overflow-x-auto px-2 pt-2 md:grid md:min-h-24 md:grid-cols-7 md:gap-2 md:overflow-visible md:px-5 md:py-2">
      ${views
        .map(
          (view) => `
            <button
              type="button"
              data-nav="${view}"
              class="nav-pill min-w-[4.75rem] md:min-w-0"
              data-active="${state.view === view}"
              aria-current="${state.view === view ? 'page' : 'false'}"
            >
              <span class="text-xl">${icons[view]}</span>
              <span class="text-[0.65rem] font-semibold uppercase tracking-[0.14em] md:text-xs md:tracking-[0.18em] ${classForLanguage()}">${text(content.ui.nav[view])}</span>
            </button>
          `,
        )
        .join('')}
    </div>
  `;
}

function renderFeatureCard(feature: HomeFeature): string {
  return `
    <button type="button" data-home-target="${feature.id}" class="glass-panel h-full p-6 text-left transition duration-200 hover:border-gold-300/30 active:scale-[0.99]">
      <div class="mb-5 flex items-center justify-between gap-4">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.24em] text-gold-300 ${classForLanguage()}">${text(feature.eyebrow)}</p>
          <h3 class="mt-3 text-2xl font-semibold text-white ${classForLanguage()}">${text(feature.title)}</h3>
        </div>
        <span class="text-4xl">${feature.icon}</span>
      </div>
      <p class="text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(feature.description)}</p>
      <p class="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(feature.cta)}</p>
    </button>
  `;
}

function renderArtworkPanel(imagePath: string, title: string, eyebrow: string, imageAlt: string): string {
  const imageStyle = imagePath ? `style="--art-image:url('${imagePath}');"` : '';
  const imageRole = imagePath ? `role="img" aria-label="${imageAlt}"` : '';

  return `
    <div class="art-panel mb-6" data-has-image="${String(Boolean(imagePath))}" ${imageStyle} ${imageRole}>
      <div class="art-panel__glow"></div>
      <div class="relative z-10">
        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">${eyebrow}</p>
        <h4 class="mt-3 text-2xl font-semibold text-white ${classForLanguage()}">${title}</h4>
      </div>
    </div>
  `;
}

function renderSubcontinentBackdrop(): string {
  // Accurate South Asia SVG outline. Coordinate system:
  //   x = (longitude - 60°E) × 20   →  spans 60°E–98°E in a 760-wide viewBox
  //   y = (37°N - latitude) × 17.5  →  spans 37°N–5°N in a 560-tall viewBox
  // Coastal trace goes clockwise from NW Pakistan corner.
  return `
    <svg class="geo-map__svg" viewBox="0 0 760 560" role="img" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="map-glow" cx="40%" cy="35%" r="55%">
          <stop offset="0%" stop-color="rgba(228,187,94,0.22)" />
          <stop offset="100%" stop-color="rgba(9,19,34,0)" />
        </radialGradient>
      </defs>
      <!-- Background wash -->
      <rect width="760" height="560" fill="url(#map-glow)" />
      <!-- Main subcontinent outline (Pakistan + India + Bangladesh) -->
      <path
        class="geo-map__coastline"
        d="M 0,0
           L 100,0 L 200,0 L 260,17 L 308,52 L 355,88
           L 395,122 L 455,140 L 535,167 L 615,167
           L 695,175 L 720,228
           L 680,255 L 648,257 L 618,268 L 568,268
           L 518,300 L 474,338
           L 413,420 L 393,445
           L 380,490 L 362,510 L 350,512
           L 320,476 L 296,422
           L 268,370 L 250,316
           L 252,295 L 252,272 L 244,257 L 228,249 L 205,252
           L 188,258 L 178,270 L 184,284
           L 206,276 L 216,252 L 204,232 L 180,224
           L 148,218 L 140,212
           L 88,210 L 40,213 L 18,196 L 0,175
           Z"
      />
      <!-- Punjab / Northwest terrain (where most Takhts cluster) -->
      <path class="geo-map__terrain" d="M 260,88 L 380,70 L 400,160 L 345,185 L 285,165 Z" />
      <!-- Gangetic plain terrain -->
      <path class="geo-map__terrain" d="M 370,130 L 545,155 L 580,268 L 510,305 L 380,285 L 330,198 Z" />
      <!-- Deccan plateau -->
      <path class="geo-map__terrain" d="M 326,270 L 446,256 L 476,338 L 418,394 L 352,382 L 316,330 Z" />
      <!-- India-Pakistan border indicator -->
      <line x1="145" y1="212" x2="268" y2="96" stroke="rgba(228,187,94,0.25)" stroke-width="1.5" stroke-dasharray="6 4"/>
    </svg>
  `;
}

function renderPyareMap(selected: PanjPyaraProfile): string {
  return `
    <div class="glass-panel geo-map-panel relative overflow-hidden map-expanded">
      <div class="soft-grid absolute inset-0 opacity-15"></div>
      ${renderSubcontinentBackdrop()}
      ${content.panjPyare
        .map(
          (pyara, index) => `
            <button
              type="button"
              class="pin-button"
              data-pyara="${pyara.id}"
              data-active="${pyara.id === selected.id}"
              style="left:${pyara.mapPoint.x}; top:${pyara.mapPoint.y};"
              aria-label="${text(pyara.name)}"
            >
              ${index + 1}
            </button>
            <div
              class="pin-label"
              data-active="${pyara.id === selected.id}"
              style="left:${pyara.mapPoint.x}; top:${pyara.mapPoint.y};"
            >
              <span class="${classForLanguage()}">${text(pyara.name).replace(/Bhai /g, '').replace(/ Ji$/, '')}</span>
            </div>
          `,
        )
        .join('')}
      <div class="map-info-badge">
        <p class="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.originMap)}</p>
        <p class="mt-0.5 text-sm font-semibold text-white ${classForLanguage()}">${text(selected.name)}</p>
        <p class="text-xs text-cloud-400 ${classForLanguage()}">${text(selected.from)}</p>
      </div>
    </div>
  `;
}

function renderTimelineSection(): string {
  return `
    <section class="glass-panel p-7 md:p-10">
      <h3 class="text-2xl font-semibold text-white ${classForLanguage()}">${text(content.ui.labels.timelineTitle)}</h3>
      <div class="mt-6">
        ${content.timeline
          .map(
            (event) => `
              <div class="timeline-node">
                <span class="timeline-year">${event.year}</span>
                <div class="pt-1">
                  <h4 class="text-base font-semibold text-white ${classForLanguage()}">${text(event.title)}</h4>
                  <p class="mt-2 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(event.description)}</p>
                </div>
              </div>
            `,
          )
          .join('')}
      </div>
    </section>
  `;
}

function renderFaqSection(): string {
  return `
    <section class="glass-panel p-7 md:p-10">
      <h3 class="text-2xl font-semibold text-white ${classForLanguage()}">${text(content.ui.labels.faqTitle)}</h3>
      <div class="mt-6 grid gap-3">
        ${content.faq
          .map(
            (item, index) => `
              <div class="faq-item" data-open="${openFaqIndex === index}">
                <button type="button" data-faq-toggle="${index}" class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
                  <span class="text-base font-semibold text-white ${classForLanguage()}">${text(item.question)}</span>
                  <span class="text-gold-300">${openFaqIndex === index ? '−' : '+'}</span>
                </button>
                ${
                  openFaqIndex === index
                    ? `<p class="px-5 pb-5 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(item.answer)}</p>`
                    : ''
                }
              </div>
            `,
          )
          .join('')}
      </div>
    </section>
  `;
}

function renderOnboarding(): string {
  return `
    <div class="grid min-h-[62vh] place-items-center">
      <div class="grid max-w-4xl gap-10 text-center slide-up">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.28em] text-gold-300">${text(content.ui.experienceLabel)}</p>
          <h2 class="title-gradient mt-4 text-4xl font-semibold md:text-5xl ${classForLanguage()}">${text(content.onboarding.welcomeTitle)}</h2>
          <p class="mt-4 text-lg text-cloud-200 ${classForLanguage()}">${text(content.onboarding.welcomeSubtitle)}</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold text-white ${classForLanguage()}">${text(content.onboarding.modeTitle)}</h3>
          <div class="mt-6 grid gap-5 sm:grid-cols-3">
            ${content.onboarding.modes
              .map(
                (mode) => `
                  <button type="button" data-onboarding-mode="${mode.id}" class="onboarding-card">
                    <div class="mb-4 text-5xl">${mode.icon}</div>
                    <h4 class="text-lg font-semibold text-white ${classForLanguage()}">${text(mode.title)}</h4>
                    <p class="mt-3 text-sm leading-6 text-cloud-300 ${classForLanguage()}">${text(mode.description)}</p>
                  </button>
                `,
              )
              .join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderHome(): string {
  if (!state.hasChosenMode) {
    return renderOnboarding();
  }

  return `
    <div class="grid gap-6">
      <div class="lang-badge slide-up w-full justify-center rounded-[22px] bg-gold-400/12 px-6 py-4 text-center text-sm md:text-base ${classForLanguage()}">
        ${text(content.home.collaborationBanner)}
      </div>

      <section class="glass-panel overflow-hidden p-7 md:p-10">
        <div class="soft-grid absolute inset-0 opacity-20"></div>
        <div class="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.28em] text-gold-300">${text(content.sections.home.title)}</p>
            <h3 class="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl ${classForLanguage()}">${text(content.home.heroTitle)}</h3>
            <p class="mt-6 max-w-3xl text-lg leading-8 text-cloud-200 ${classForLanguage()}">${text(content.home.heroDescription)}</p>
          </div>
          <img src="/assets/images/IMG_8284.jpeg" alt="Ten Sikh Gurus — traditional painting" class="hidden md:block w-56 rounded-[20px] object-cover opacity-80" style="aspect-ratio:4/3;" />
        </div>
      </section>

      <section class="glass-panel p-7 md:p-10">
        <h3 class="text-2xl font-semibold text-white ${classForLanguage()}">${text(content.home.differentiationTitle)}</h3>
        <p class="mt-3 max-w-3xl text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(content.home.differentiationDescription)}</p>
        <div class="mt-6 grid gap-6 md:grid-cols-2">
          ${content.home.differentiationCards
            .map(
              (card) => `
                <button type="button" data-home-target="${card.id}" class="art-panel text-left transition duration-200 hover:border-gold-300/40 active:scale-[0.99]" data-has-image="true" style="--art-image:url('${card.imagePath}');">
                  <div class="art-panel__glow"></div>
                  <div class="relative z-10">
                    <h4 class="text-2xl font-semibold text-white ${classForLanguage()}">${text(card.title)}</h4>
                    <p class="mt-3 max-w-md text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(card.description)}</p>
                  </div>
                </button>
              `,
            )
            .join('')}
        </div>
      </section>

      ${renderTimelineSection()}

      <section class="grid gap-6 lg:grid-cols-3">
        ${content.home.featureCards.map(renderFeatureCard).join('')}
      </section>
    </div>
  `;
}

function renderInfoBox(labelObj: LocalizedText, value: string): string {
  return `
    <article class="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
      <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(labelObj)}</p>
      <p class="mt-3 text-lg font-medium text-white ${classForLanguage()}">${value}</p>
    </article>
  `;
}

function renderPyare(): string {
  const selected = content.panjPyare.find((item) => item.id === state.selectedPyaraId) ?? content.panjPyare[0];

  const beforeKhalsaHtml = `
    <div class="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 mt-6">
      <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.beforeKhalsa)}</p>
      <div class="mt-3 grid gap-3 sm:grid-cols-3">
        ${renderInfoBox(content.ui.labels.previousOccupation, text(selected.occupation))}
        ${renderInfoBox(content.ui.labels.fromRegion, text(selected.from))}
        ${renderInfoBox(content.ui.labels.representing, text(selected.caste))}
      </div>
    </div>
  `;

  const storyHtml = `
    <div class="story-panel mt-6">
      <p class="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300 ${classForLanguage()}">${text(content.ui.labels.story)}</p>
      <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(selected.story ?? selected.details)}</p>
    </div>
  `;

  const afterKhalsaHtml = selected.accomplishments || selected.roles
    ? `<div class="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 mt-6">
         <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.afterKhalsa)}</p>
         ${selected.accomplishments ? `<p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}"><strong class="${classForLanguage()}">${text(content.ui.labels.accomplishments)}:</strong> ${text(selected.accomplishments)}</p>` : ''}
         ${selected.roles ? `<p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}"><strong class="${classForLanguage()}">${text(content.ui.labels.roles)}:</strong> ${text(selected.roles)}</p>` : ''}
       </div>`
    : '';

  const funFactHtml = selected.funFact
    ? `<div class="fact-card mt-6">
         <div class="fact-card__icon">✦</div>
         <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.funFact)}</p>
         <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(selected.funFact)}</p>
       </div>`
    : '';

  const shaheediHtml = selected.shaheedi
    ? `<div class="rounded-[24px] border border-rose-300/15 bg-rose-400/5 p-5 mt-6">
         <p class="text-xs font-semibold uppercase tracking-[0.22em] text-rose-300 ${classForLanguage()}">${text(content.ui.labels.shaheedi)}</p>
         <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(selected.shaheedi)}</p>
       </div>`
    : '';

  const lessonsHtml = selected.lessons
    ? `<div class="story-panel mt-6">
         <p class="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300 ${classForLanguage()}">${text(content.ui.labels.lessons)}</p>
         <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(selected.lessons)}</p>
       </div>`
    : '';

  const languageQualitiesHtml = selected.language || selected.qualities
    ? `<div class="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 mt-6">
         ${selected.qualities ? `<p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.qualities)}</p><p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(selected.qualities)}</p>` : ''}
         ${selected.language ? `<p class="${selected.qualities ? 'mt-5' : ''} text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.language)}</p><p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(selected.language)}</p>` : ''}
       </div>`
    : '';

  return `
    <div class="grid gap-6">
      <p class="max-w-4xl text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(content.ui.labels.pyareIntro)}</p>

      ${renderPyareMap(selected)}

      <div class="silhouette-strip">
        ${content.panjPyare
          .map(
            (item, index) => `
              <button type="button" data-pyara="${item.id}" class="silhouette-avatar" data-active="${item.id === selected.id}" aria-label="${text(item.name)}">
                <img src="${item.silhouettePath}" alt="${text(item.name)}" class="silhouette-avatar__img" />
                <span class="silhouette-avatar__number">${index + 1}</span>
                <span class="silhouette-avatar__name ${classForLanguage()}">${text(item.name).replace(/Bhai /g, '').replace(/ Ji$/, '')}</span>
              </button>
            `,
          )
          .join('')}
      </div>

      <section class="glass-panel overflow-hidden p-8 md:p-10 slide-up">
        ${renderArtworkPanel(selected.imagePath, text(selected.name), text(content.sections.pyare.title), `Commemorative portrait artwork of ${text(selected.name, 'en')}, one of the Panj Pyare`)}
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.24em] text-gold-300 ${classForLanguage()}">${text(selected.representing)}</p>
            <h3 class="mt-2 text-4xl font-semibold text-white ${classForLanguage()}">${text(selected.name)} <span class="pronun-tip" title="${text(selected.name, 'en')}">🔊</span></h3>
            <p class="mt-2 text-base text-cloud-400 ${classForLanguage()}">${text(content.ui.labels.birthName)}: ${text(selected.birthName)} &middot; ${selected.years}</p>
          </div>
          <span class="ai-badge">⚠ ${text(content.review.label)}</span>
        </div>

        ${beforeKhalsaHtml}
        ${storyHtml}
        ${afterKhalsaHtml}
        ${funFactHtml}
        ${shaheediHtml}
        ${lessonsHtml}
        ${languageQualitiesHtml}

        <div class="storyline-panel mt-8">
          <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.storylineJourney)}</p>
          <div class="mt-4 grid gap-2">
            ${content.panjPyare
              .map(
                (item, index) => `
                  <button type="button" data-pyara="${item.id}" class="storyline-step" data-active="${item.id === selected.id}">
                    <span class="storyline-step__index">${index + 1}</span>
                    <span class="${classForLanguage()}">${text(item.name)} — ${text(item.from)}</span>
                  </button>
                `,
              )
              .join('')}
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderTakhtMap(selected: TakhtProfile): string {
  return `
    <div class="glass-panel geo-map-panel relative overflow-hidden map-expanded">
      <div class="soft-grid absolute inset-0 opacity-15"></div>
      ${renderSubcontinentBackdrop()}
      ${content.takhts
        .map(
          (takht, index) => `
            <button
              type="button"
              class="pin-button"
              data-takht="${takht.id}"
              data-active="${takht.id === selected.id}"
              style="left:${takht.mapPoint.x}; top:${takht.mapPoint.y};"
              aria-label="${text(takht.name)}"
            >
              ${takht.id === selected.id ? '☬' : index + 1}
            </button>
            <div
              class="pin-label"
              data-active="${takht.id === selected.id}"
              style="left:${takht.mapPoint.x}; top:${takht.mapPoint.y};"
            >
              <span class="${classForLanguage()}">${text(takht.name).replace(/Takht Sri |Sri |Takht /g, '').replace(/ Sahib$/, '')}</span>
            </div>
          `,
        )
        .join('')}
      <div class="map-info-badge">
        <p class="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.sacredGeography)}</p>
        <p class="mt-0.5 text-sm font-semibold text-white ${classForLanguage()}">${text(selected.name)}</p>
        <p class="text-xs text-cloud-400 ${classForLanguage()}">${text(selected.location)}</p>
      </div>
    </div>
  `;
}

function renderTakhts(): string {
  const selected = content.takhts.find((item) => item.id === state.selectedTakhtId) ?? content.takhts[0];

  const locationHtml = `
    <div class="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 mt-6">
      <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.establishedBy)}</p>
      <p class="mt-3 text-base font-medium text-white ${classForLanguage()}">${text(selected.establishedBy)}</p>
    </div>
    <div class="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 mt-4">
      <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.significance)}</p>
      <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(selected.significance)}</p>
    </div>
  `;

  const storyHtml = selected.story
    ? `<div class="story-panel mt-6">
         <p class="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300 ${classForLanguage()}">${text(content.ui.labels.story)}</p>
         <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(selected.story)}</p>
       </div>`
    : '';

  const funFactHtml = selected.funFact
    ? `<div class="fact-card mt-6">
         <div class="fact-card__icon">✦</div>
         <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.funFact)}</p>
         <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(selected.funFact)}</p>
       </div>`
    : '';

  const jathedaarHtml = selected.jathedaar
    ? `<div class="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 mt-6">
         <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.jathedaar)}</p>
         <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(selected.jathedaar)}</p>
       </div>`
    : '';

  const visitorsHtml = selected.visitorsInfo
    ? `<div class="rounded-[24px] border border-emerald-300/15 bg-emerald-400/5 p-5 mt-4">
         <p class="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300 ${classForLanguage()}">${text(content.ui.labels.visitorsInfo)}</p>
         <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(selected.visitorsInfo)}</p>
       </div>`
    : '';

  const gurusVisitedHtml = selected.gurusVisited
    ? `<div class="story-panel mt-6">
         <p class="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300 ${classForLanguage()}">${text(content.ui.labels.gurusVisited)}</p>
         <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(selected.gurusVisited)}</p>
       </div>`
    : '';

  const areaImpactHtml = selected.areaHistory || selected.localImpact
    ? `<div class="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 mt-6">
         ${selected.areaHistory ? `<p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.areaHistory)}</p><p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(selected.areaHistory)}</p>` : ''}
         ${selected.localImpact ? `<p class="${selected.areaHistory ? 'mt-5' : ''} text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.localImpact)}</p><p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(selected.localImpact)}</p>` : ''}
       </div>`
    : '';

  return `
    <div class="grid gap-6">
      <p class="max-w-4xl text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(content.ui.labels.takhtsIntro)}</p>

      ${renderTakhtMap(selected)}

      <div class="silhouette-strip">
        ${content.takhts
          .map(
            (takht, index) => `
              <button type="button" data-takht="${takht.id}" class="silhouette-avatar" data-active="${takht.id === selected.id}" aria-label="${text(takht.name)}">
                <img src="${takht.silhouettePath ?? '/assets/images/gurdwara-silhouette.svg'}" alt="${text(takht.name)}" class="silhouette-avatar__img" />
                <span class="silhouette-avatar__number">${index + 1}</span>
                <span class="silhouette-avatar__name ${classForLanguage()}">${text(takht.name).replace(/Takht Sri |Sri |Takht /g, '').replace(/ Sahib$/, '')}</span>
              </button>
            `,
          )
          .join('')}
      </div>

      <section class="glass-panel overflow-hidden p-8 md:p-10 slide-up">
        ${renderArtworkPanel(selected.imagePath, text(selected.name), text(content.sections.takhts.title), `Photograph of ${text(selected.name, 'en')} in ${text(selected.location, 'en')}`)}
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.24em] text-gold-300 ${classForLanguage()}">${text(selected.location)}</p>
            <h3 class="mt-2 text-3xl font-semibold text-white ${classForLanguage()}">${text(selected.name)} <span class="pronun-tip" title="${text(selected.name, 'en')}">🔊</span></h3>
            <p class="mt-2 text-base text-cloud-400 ${classForLanguage()}">${text(selected.location)}${selected.yearDeclared ? ' &middot; ' + selected.yearDeclared : ''}</p>
          </div>
          <span class="ai-badge">⚠ ${text(content.review.label)}</span>
        </div>

        ${locationHtml}
        ${storyHtml}
        ${funFactHtml}
        ${jathedaarHtml}
        ${visitorsHtml}
        ${gurusVisitedHtml}
        ${areaImpactHtml}

        <div class="storyline-panel mt-8">
          <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.storylineJourney)}</p>
          <div class="mt-4 grid gap-2">
            ${content.takhts
              .map(
                (takht, index) => `
                  <button type="button" data-takht="${takht.id}" class="storyline-step" data-active="${takht.id === selected.id}">
                    <span class="storyline-step__index">${index + 1}</span>
                    <span class="${classForLanguage()}">${text(takht.name)} — ${text(takht.location)}</span>
                  </button>
                `,
              )
              .join('')}
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderLearn(): string {
  const learn = content.learnSikhi;

  return `
    <div class="grid gap-6">
      <section class="glass-panel p-8 md:p-10">
        <h2 class="text-3xl font-semibold text-white ${classForLanguage()}">${text(learn.title)}</h2>
        <p class="mt-4 max-w-3xl text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(learn.intro)}</p>
      </section>

      <section class="glass-panel p-8 md:p-10">
        <h3 class="text-2xl font-semibold text-white ${classForLanguage()}">${text(learn.gurdwaraRoomsTitle)}</h3>
        <div class="mt-6 grid gap-4 md:grid-cols-2">
          ${learn.gurdwaraRooms
            .map(
              (room) => `
                <article class="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                  <h4 class="text-lg font-semibold text-white ${classForLanguage()}">${text(room.name)}</h4>
                  <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(room.description)}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="glass-panel p-8 md:p-10">
        <h3 class="text-2xl font-semibold text-white ${classForLanguage()}">${text(learn.etiquetteTitle)}</h3>
        <div class="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          ${learn.etiquette
            .map(
              (item) => `
                <article class="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                  <h4 class="text-sm font-semibold uppercase tracking-[0.18em] text-gold-300 ${classForLanguage()}">${text(item.title)}</h4>
                  <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(item.description)}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="glass-panel p-8 md:p-10">
        <h3 class="text-2xl font-semibold text-white ${classForLanguage()}">${text(learn.gurusTitle)}</h3>
        <div class="mt-6 grid gap-4">
          ${learn.gurus
            .map(
              (guru) => `
                <article class="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 flex gap-4">
                  <span class="shrink-0 flex h-10 w-10 items-center justify-center rounded-full border border-gold-300/30 bg-gold-400/10 text-sm font-semibold text-gold-300">${guru.order}</span>
                  <div>
                    <h4 class="text-base font-semibold text-white ${classForLanguage()}">${text(guru.name)} <span class="font-normal text-cloud-400">— ${guru.years}</span></h4>
                    <p class="mt-2 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(guru.summary)}</p>
                  </div>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="glass-panel p-8 md:p-10">
        <h3 class="text-2xl font-semibold text-white ${classForLanguage()}">${text(learn.sahibzaadeTitle)}</h3>
        <div class="mt-6 grid gap-4 md:grid-cols-2">
          ${learn.sahibzaade
            .map(
              (child) => `
                <article class="rounded-[24px] border border-rose-300/15 bg-rose-400/5 p-5">
                  <h4 class="text-base font-semibold text-white ${classForLanguage()}">${text(child.name)} <span class="font-normal text-cloud-400">— ${child.years}</span></h4>
                  <p class="mt-2 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(child.summary)}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="glass-panel p-8 md:p-10">
        <h3 class="text-2xl font-semibold text-white ${classForLanguage()}">${text(learn.kakaarsTitle)}</h3>
        <p class="mt-3 max-w-3xl text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(learn.kakaarsIntro)}</p>
        <div class="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          ${learn.kakaars
            .map(
              (kakaar) => `
                <article class="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 text-center">
                  <p class="gurmukhi text-3xl font-semibold text-gold-300">${text(kakaar.name)}</p>
                  <p class="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-cloud-400">${text(kakaar.meaning)}</p>
                  <p class="mt-3 text-sm leading-6 text-cloud-200 ${classForLanguage()}">${text(kakaar.description)}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="glass-panel p-8 md:p-10">
        <h3 class="text-2xl font-semibold text-white ${classForLanguage()}">${text(learn.introTitle)}</h3>
        <p class="mt-4 max-w-3xl text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(learn.whatIsSikhi)}</p>
        <p class="mt-4 max-w-3xl text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(learn.founding)}</p>
        <p class="mt-4 max-w-3xl text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(learn.sevaSimran)}</p>
        <h4 class="mt-8 text-lg font-semibold text-white ${classForLanguage()}">${text(learn.pillarsTitle)}</h4>
        <div class="mt-4 grid gap-4 md:grid-cols-3">
          ${learn.pillars
            .map(
              (pillar) => `
                <article class="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                  <p class="gurmukhi text-xl font-semibold text-gold-300">${text(pillar.term)}</p>
                  <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(pillar.description)}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="glass-panel p-8 md:p-10">
        <h3 class="text-2xl font-semibold text-white ${classForLanguage()}">${text(learn.gurbaniTitle)}</h3>
        <p class="mt-4 max-w-3xl text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(learn.gurbaniIntro)}</p>
        <div class="mt-6 grid gap-5">
          ${learn.shabads
            .map(
              (shabad) => `
                <article class="rounded-[24px] border border-gold-300/20 bg-gold-400/5 p-6">
                  <p class="gurmukhi text-2xl leading-relaxed text-white">${shabad.gurmukhi}</p>
                  <p class="mt-4 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(shabad.translation)}</p>
                  <div class="mt-4 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold-300">
                    <span>Ang ${shabad.ang}</span>
                    <span>·</span>
                    <span>${shabad.raag}</span>
                    <span>·</span>
                    <span class="${classForLanguage()}">${text(shabad.author)}</span>
                  </div>
                  <p class="mt-4 text-xs italic leading-6 text-cloud-400 ${classForLanguage()}">${text(shabad.verificationNote)}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>
    </div>
  `;
}

function renderAbout(): string {
  return `
    <div class="grid gap-6">
      <section class="glass-panel p-8 md:p-10">
        <h2 class="text-3xl font-semibold text-white ${classForLanguage()}">${text(content.about.title)}</h2>
        <div class="mt-6 rounded-[24px] border border-gold-300/25 bg-gold-400/8 p-6">
          <p class="text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(content.about.collaboration)}</p>
        </div>
        <p class="mt-6 text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(content.about.partnerships)}</p>
        <p class="mt-4 text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(content.about.futureUpdates)}</p>
      </section>

      <section class="grid gap-6 md:grid-cols-3">
        ${content.about.principles
          .map(
            (principle) => `
              <article class="glass-panel p-6">
                <h4 class="text-lg font-semibold text-white ${classForLanguage()}">${text(principle.title)}</h4>
                <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(principle.description)}</p>
              </article>
            `,
          )
          .join('')}
      </section>

      <section class="glass-panel flex flex-wrap items-center gap-4 p-8">
        <span class="scholar-badge">✓ ${text(content.ui.reviewHeading)}</span>
        <span class="ai-badge">⚠ ${text(content.review.label)}</span>
        <p class="text-sm text-cloud-300 ${classForLanguage()}">${text(content.review.detail)}</p>
      </section>

      <section class="glass-panel p-8">
        <p class="lang-badge ${classForLanguage()}">${text(content.ui.labels.aiTranslationDisclaimer)}</p>
      </section>

      ${renderFaqSection()}
    </div>
  `;
}

function renderResources(): string {
  const sites = content.resources.sites;
  const resourceBanners: Record<string, string> = {
    'sikhi-io': '/assets/images/sikhi-io-beliefs-banner-new-4.webp',
    'sikhiuni': '/assets/images/sikhi-io-gurbani-banner.webp',
    'gursevak': '/assets/images/sikhi-io-gallery-banner.webp',
    'basicsofsikhi': '/assets/images/sikhi-io-sangat-banner.webp',
  };
  if (sites.length === 0) {
    return `<div class="glass-panel p-8 text-center"><p class="text-cloud-200">${text(content.resources.intro)}</p></div>`;
  }

  // Separate sites into live-preview capable (sikhi.io, sikhiuni) and regular
  const liveSites = sites.filter((s) => s.id === 'sikhi-io' || s.id === 'sikhiuni');
  const slideWidth = 100 / liveSites.length;

  return `
    <div class="grid gap-6">
      <section class="glass-panel p-8 md:p-10">
        <h2 class="text-3xl font-semibold text-white ${classForLanguage()}">${text(content.resources.title)}</h2>
        <p class="mt-4 max-w-3xl text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(content.resources.intro)}</p>
      </section>

      <section class="glass-panel relative overflow-hidden p-0" style="min-height:28rem;">
        <div class="resource-live-header">
          <span class="resource-live-dot"></span>
          <span class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">${text(content.ui.labels.livePreviews)}</span>
        </div>
        <div
          id="resource-carousel-track"
          class="flex transition-transform duration-700 ease-out"
          style="width:${liveSites.length * 100}%; height:28rem; transform:translateX(-${slideWidth * resourceCarouselIndex}%);"
        >
          ${liveSites
            .map(
              (site) => `
                <div class="relative" style="width:${slideWidth}%; height:28rem;">
                  <iframe
                    src="${site.url}"
                    class="resource-iframe"
                    loading="lazy"
                    sandbox="allow-scripts"
                    title="${site.title}"
                  ></iframe>
                  <div class="resource-card__overlay p-6 md:p-8">
                    <div class="flex items-end justify-between gap-6 w-full">
                      <div>
                        <h3 class="text-2xl font-semibold text-white ${classForLanguage()}">${text(site.previewTitle)}</h3>
                        <p class="mt-2 max-w-xl text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(site.previewDescription)}</p>
                        <a href="${site.url}" target="_blank" rel="noopener noreferrer" class="mt-4 inline-flex items-center gap-2 rounded-full bg-gold-400 px-5 py-3 text-sm font-semibold text-night-950 transition active:scale-[0.98] ${classForLanguage()}">${text(content.ui.labels.visitSite)}</a>
                      </div>
                      <div class="qr-badge">
                        ${qrDataUrls[site.id] ? `<img src="${qrDataUrls[site.id]}" alt="QR code for ${site.title}" class="qr-badge__img" width="80" height="80" />` : ''}
                        <p class="qr-badge__hint">${text(content.ui.labels.scanToVisit)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              `,
            )
            .join('')}
        </div>
        <div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2" id="resource-carousel-dots">
          ${liveSites
            .map(
              (_, index) => `
                <button type="button" data-carousel-dot="${index}" class="h-2 w-2 rounded-full transition ${index === resourceCarouselIndex ? 'bg-gold-400' : 'bg-white/30'}"></button>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        ${sites
          .map(
            (site) => `
              <article class="resource-card">
                ${resourceBanners[site.id] ? `<img src="${resourceBanners[site.id]}" alt="${site.title} banner" class="w-full object-cover" style="height:6rem;border-radius:28px 28px 0 0;" loading="lazy" decoding="async" />` : ''}
                <div class="resource-card__qr">
                  ${qrDataUrls[site.id] ? `<img src="${qrDataUrls[site.id]}" alt="QR code for ${site.title}" class="resource-card__qr-img" width="80" height="80" />` : '<div class="resource-card__qr-placeholder">QR</div>'}
                </div>
                <div class="p-5">
                  <h4 class="text-base font-semibold text-white ${classForLanguage()}">${text(site.previewTitle)}</h4>
                  <p class="mt-1.5 text-sm leading-6 text-cloud-300 ${classForLanguage()}">${text(site.details)}</p>
                  <div class="mt-4 flex items-center gap-3">
                    <a href="${site.url}" target="_blank" rel="noopener noreferrer" class="text-sm font-semibold text-gold-300 ${classForLanguage()}">${text(content.ui.labels.openInBrowser)} →</a>
                    <span class="text-xs text-cloud-500">${site.url.replace(/^https?:\/\//, '')}</span>
                  </div>
                </div>
              </article>
            `,
          )
          .join('')}
      </section>
    </div>
  `;
}

function renderLeaflets(): string {
  const leafletQr = qrDataUrls['basicsofsikhi'] ?? '';
  return `
    <div class="glass-panel p-10 text-center">
      <h2 class="text-3xl font-semibold text-white ${classForLanguage()}">${text(content.leaflets.title)}</h2>
      <p class="intro mx-auto mt-4 max-w-2xl text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(content.leaflets.intro)}</p>
      <div class="leaflet-hero my-8 overflow-hidden rounded-[20px]">
        <img src="/assets/images/sikh-fresco-·-restoration-3-restored.png" alt="Restored Sikh fresco artwork" class="mx-auto max-h-48 w-full object-cover object-top" decoding="async" />
      </div>
      <p class="text-base text-cloud-200 ${classForLanguage()}">${text(content.ui.labels.leafletsHelper)}</p>
      <a href="${content.leaflets.hubUrl}" target="_blank" rel="noopener noreferrer" class="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-4 text-base font-semibold text-night-950 transition active:scale-[0.98] ${classForLanguage()}">${text(content.leaflets.cta)}</a>
      <p class="mt-4 text-sm text-cloud-400">basicsofsikhi.com/resources</p>
      <div class="mx-auto mt-8 flex flex-col items-center gap-2">
        ${leafletQr ? `<img src="${leafletQr}" alt="QR code for basicsofsikhi.com/resources" class="leaflet-qr" width="128" height="128" />` : '<div class="mx-auto flex h-32 w-32 items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/[0.03] text-xs uppercase tracking-[0.18em] text-cloud-400">QR Code</div>'}
      </div>
      <p class="mt-3 text-xs text-cloud-400">Scan the QR code or visit basicsofsikhi.com/resources</p>
    </div>
  `;
}

function quizState(question: QuizQuestion, optionIndex: number): 'default' | 'selected' | 'correct' | 'incorrect' {
  if (state.revealedAnswer === null) {
    return 'default';
  }

  if (optionIndex === question.correctIndex) {
    return 'correct';
  }

  if (optionIndex === state.revealedAnswer) {
    return 'incorrect';
  }

  return 'default';
}

function currentQuizTotal(): number {
  return Math.min(content.quiz.questionsPerRound, state.quizQuestionOrder.length);
}

function renderQuizQuestion(question: QuizQuestion): string {
  const total = currentQuizTotal();

  return `
    <article class="glass-panel p-8 md:p-10">
      <div class="mb-6 flex flex-wrap items-center justify-between gap-3">
        <p class="text-xs font-semibold uppercase tracking-[0.24em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.quizProgress)} ${state.quizIndex + 1} / ${total}</p>
        <div class="h-2 w-full max-w-xs overflow-hidden rounded-full bg-white/8">
          <div class="h-full rounded-full bg-gold-400 transition duration-300" style="width:${((state.quizIndex + 1) / total) * 100}%"></div>
        </div>
      </div>
      <h3 class="text-3xl font-semibold text-white ${classForLanguage()}">${text(question.prompt)}</h3>
      <p class="mt-4 max-w-3xl text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(content.quiz.intro)}</p>
      <div class="mt-8 grid gap-4">
        ${question.options
          .map(
            (option, index) => `
              <button
                type="button"
                class="option-card"
                data-quiz-answer="${index}"
                data-state="${quizState(question, index)}"
                ${state.revealedAnswer !== null ? 'disabled' : ''}
              >
                <div class="flex items-start gap-4">
                  <span class="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-current/15 text-sm font-semibold">${String.fromCharCode(65 + index)}</span>
                  <span class="text-lg leading-7 ${classForLanguage()}">${text(option)}</span>
                </div>
              </button>
            `,
          )
          .join('')}
      </div>
      ${state.revealedAnswer === null
        ? ''
        : `
          <div class="mt-8 rounded-[24px] border border-gold-300/20 bg-gold-400/10 p-5">
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.correctAnswer)}</p>
            <p class="mt-3 text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(question.insight)}</p>
          </div>
          <button type="button" data-action="next-question" class="mt-6 rounded-full bg-gold-400 px-6 py-4 text-base font-semibold text-night-950 transition active:scale-[0.98]">${text(content.ui.labels.nextQuestion)}</button>
        `}
    </article>
  `;
}

function renderRecapCard(): string {
  const topics = state.quizQuestionOrder
    .map((questionIndex) => content.quiz.questions[questionIndex])
    .filter((question): question is QuizQuestion => Boolean(question));

  return `
    <div class="recap-card mt-6 text-left">
      <p class="text-center text-xs font-semibold uppercase tracking-[0.24em] text-gold-300">${text(content.ui.labels.recapTitle)}</p>
      <ul class="mt-5 grid gap-3">
        ${topics
          .map(
            (question) => `
              <li class="rounded-[18px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-cloud-200 ${classForLanguage()}">${text(question.prompt)}</li>
            `,
          )
          .join('')}
      </ul>
    </div>
  `;
}

function renderQuizResults(): string {
  const score = getQuizScore(state, content);
  const total = currentQuizTotal();

  return `
    <article class="glass-panel p-8 text-center md:p-12">
      <p class="text-sm font-semibold uppercase tracking-[0.24em] text-gold-300 ${classForLanguage()}">${text(content.sections.quiz.title)}</p>
      <h3 class="mt-5 text-5xl font-semibold text-white">${score} / ${total}</h3>
      <p class="mt-4 text-xl text-cloud-200 ${classForLanguage()}">${text(content.ui.labels.yourScore)}</p>
      <p class="mt-6 text-base leading-7 text-cloud-200 ${classForLanguage()}">${score === total ? text(content.ui.labels.perfectScore) : text(content.ui.labels.replayPrompt)}</p>
      <button type="button" data-action="restart-quiz" class="mt-8 rounded-full bg-gold-400 px-6 py-4 text-base font-semibold text-night-950 transition active:scale-[0.98]">${text(content.ui.labels.restartQuiz)}</button>
      ${renderRecapCard()}
    </article>
  `;
}

function clearResourceCarouselTimer(): void {
  window.clearInterval(resourceCarouselTimer);
  resourceCarouselTimer = 0;
}

function updateResourceCarousel(): void {
  const track = document.getElementById('resource-carousel-track');
  const liveSiteCount = content.resources.sites.filter((s) => s.id === 'sikhi-io' || s.id === 'sikhiuni').length;
  if (track) {
    track.style.transform = `translateX(-${(100 / liveSiteCount) * resourceCarouselIndex}%)`;
  }

  const dots = document.querySelectorAll<HTMLElement>('[data-carousel-dot]');
  dots.forEach((dot) => {
    const isActive = Number(dot.dataset.carouselDot) === resourceCarouselIndex;
    dot.classList.toggle('bg-gold-400', isActive);
    dot.classList.toggle('bg-white/30', !isActive);
  });
}

function setupResourceCarousel(): void {
  clearResourceCarouselTimer();
  const liveSiteCount = content.resources.sites.filter((s) => s.id === 'sikhi-io' || s.id === 'sikhiuni').length;
  if (liveSiteCount <= 1) {
    return;
  }
  resourceCarouselTimer = window.setInterval(() => {
    resourceCarouselIndex = (resourceCarouselIndex + 1) % liveSiteCount;
    updateResourceCarousel();
  }, 5000);
}

function launchConfetti(): void {
  const colors = ['#e4bb5e', '#f8fafc', '#f97316', '#60a5fa'];

  for (let i = 0; i < 80; i += 1) {
    const particle = document.createElement('div');
    particle.className = 'confetti-particle';
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)] ?? '#e4bb5e';
    particle.style.animationDuration = `${1.5 + Math.random() * 1.5}s`;
    particle.style.animationDelay = `${Math.random() * 0.4}s`;
    document.body.appendChild(particle);

    window.setTimeout(() => {
      particle.remove();
    }, 4000);
  }
}

function renderView(): void {
  if (state.view !== 'resources') {
    clearResourceCarouselTimer();
  }

  if (!state.awake) {
    viewContent.innerHTML = '';
    return;
  }

  switch (state.view) {
    case 'home':
      viewContent.innerHTML = renderHome();
      break;
    case 'pyare':
      viewContent.innerHTML = renderPyare();
      break;
    case 'takhts':
      viewContent.innerHTML = renderTakhts();
      break;
    case 'learn':
      viewContent.innerHTML = renderLearn();
      break;
    case 'about':
      viewContent.innerHTML = renderAbout();
      break;
    case 'resources':
      viewContent.innerHTML = renderResources();
      setupResourceCarousel();
      break;
    case 'leaflets':
      viewContent.innerHTML = renderLeaflets();
      break;
    case 'quiz': {
      if (isQuizComplete(state, content)) {
        viewContent.innerHTML = renderQuizResults();
        if (getQuizScore(state, content) === currentQuizTotal() && !hasCelebratedPerfect) {
          hasCelebratedPerfect = true;
          launchConfetti();
        }
      } else {
        const questionIndex = state.quizQuestionOrder[state.quizIndex];
        const question = questionIndex === undefined ? undefined : content.quiz.questions[questionIndex];
        if (!question) {
          viewContent.innerHTML = renderQuizResults();
          break;
        }
        viewContent.innerHTML = renderQuizQuestion(question);
      }
      break;
    }
  }
}

function scheduleInactivityReset(): void {
  window.clearTimeout(inactivityTimer);
  inactivityTimer = window.setTimeout(() => {
    state = resetForInactivity(content);
    hasCelebratedPerfect = false;
    openFaqIndex = null;
    langMenuOpen = false;
    resourceCarouselIndex = 0;
    applyDocumentDirection(state.language);
    render();
  }, content.settings.timeoutSeconds * 1000);
}

function render(): void {
  renderAttract();
  renderHeader();
  renderNav();
  renderView();

  if (state.awake) {
    attractScreen.classList.add('hidden');
    mainShell.classList.remove('hidden');
    mainShell.classList.add('flex');
  } else {
    attractScreen.classList.remove('hidden');
    mainShell.classList.add('hidden');
    mainShell.classList.remove('flex');
  }
}

function handleUserWake(): void {
  const wasAwake = state.awake;
  state = wakeKiosk(state);
  if (!wasAwake) {
    render();
  }
  scheduleInactivityReset();
}

document.addEventListener('pointerdown', () => {
  handleUserWake();
});

document.addEventListener('keydown', () => {
  handleUserWake();
});

document.addEventListener('click', (event) => {
  const target = event.target instanceof HTMLElement ? event.target : null;
  if (!target) {
    return;
  }

  const startButton = target.closest<HTMLElement>('[data-action="start"]');
  if (startButton) {
    state = wakeKiosk(state);
    render();
    scheduleInactivityReset();
    return;
  }

  const onboardingTarget = target.closest<HTMLElement>('[data-onboarding-mode]');
  if (onboardingTarget?.dataset.onboardingMode) {
    const mode = onboardingTarget.dataset.onboardingMode;
    state = navigate(state, mode === 'start-here' ? 'home' : (mode as View));
    render();
    scheduleInactivityReset();
    return;
  }

  const navTarget = target.closest<HTMLElement>('[data-nav]');
  if (navTarget?.dataset.nav) {
    state = navigate(state, navTarget.dataset.nav as View);
    render();
    scheduleInactivityReset();
    return;
  }

  const homeTarget = target.closest<HTMLElement>('[data-home-target]');
  if (homeTarget?.dataset.homeTarget) {
    state = navigate(state, homeTarget.dataset.homeTarget as View);
    render();
    scheduleInactivityReset();
    return;
  }

  if (target.closest('[data-action="toggle-lang-menu"]')) {
    langMenuOpen = !langMenuOpen;
    renderHeader();
    scheduleInactivityReset();
    return;
  }

  const languageTarget = target.closest<HTMLElement>('[data-set-language]');
  if (languageTarget?.dataset.setLanguage) {
    state = setLanguage(state, languageTarget.dataset.setLanguage as Language);
    langMenuOpen = false;
    applyDocumentDirection(state.language);
    render();
    scheduleInactivityReset();
    return;
  }

  if (target.closest('[data-action="reset"]')) {
    state = resetForInactivity(content);
    hasCelebratedPerfect = false;
    openFaqIndex = null;
    langMenuOpen = false;
    resourceCarouselIndex = 0;
    applyDocumentDirection(state.language);
    render();
    return;
  }

  const pyaraTarget = target.closest<HTMLElement>('[data-pyara]');
  if (pyaraTarget?.dataset.pyara) {
    state = selectPyara(state, Number(pyaraTarget.dataset.pyara));
    render();
    scheduleInactivityReset();
    return;
  }

  const takhtTarget = target.closest<HTMLElement>('[data-takht]');
  if (takhtTarget?.dataset.takht) {
    state = selectTakht(state, takhtTarget.dataset.takht);
    render();
    scheduleInactivityReset();
    return;
  }

  const faqTarget = target.closest<HTMLElement>('[data-faq-toggle]');
  if (faqTarget?.dataset.faqToggle !== undefined) {
    const index = Number(faqTarget.dataset.faqToggle);
    openFaqIndex = openFaqIndex === index ? null : index;
    render();
    scheduleInactivityReset();
    return;
  }

  const carouselDotTarget = target.closest<HTMLElement>('[data-carousel-dot]');
  if (carouselDotTarget?.dataset.carouselDot !== undefined) {
    resourceCarouselIndex = Number(carouselDotTarget.dataset.carouselDot);
    updateResourceCarousel();
    setupResourceCarousel();
    scheduleInactivityReset();
    return;
  }

  const answerTarget = target.closest<HTMLElement>('[data-quiz-answer]');
  if (answerTarget?.dataset.quizAnswer) {
    state = submitQuizAnswer(state, Number(answerTarget.dataset.quizAnswer));
    render();
    scheduleInactivityReset();
    return;
  }

  if (target.closest('[data-action="next-question"]')) {
    state = advanceQuiz(state);
    render();
    scheduleInactivityReset();
    return;
  }

  if (target.closest('[data-action="restart-quiz"]')) {
    state = restartQuiz(state, content);
    hasCelebratedPerfect = false;
    render();
    scheduleInactivityReset();
  }
});

applyDocumentDirection(state.language);
render();
