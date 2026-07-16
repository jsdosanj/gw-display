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
  submitQuizAnswer,
  toggleLanguage,
  wakeKiosk,
} from '../lib/kiosk-state';
import type {
  DisplayContent,
  HomeFeature,
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

const icons: Record<View, string> = {
  home: '🏛️',
  pyare: '⚔️',
  takhts: '🕌',
  quiz: '✨',
};

function text(value: LocalizedText, language = state.language): string {
  return value[language];
}

function classForLanguage(language = state.language): string {
  return language === 'pa' ? 'gurmukhi' : '';
}

function renderAttract(): void {
  attractScreen.innerHTML = `
    <div class="relative flex h-screen items-center justify-center overflow-hidden px-6 py-12">
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
              <p class="text-sm font-semibold uppercase tracking-[0.24em] text-gold-300">${text(content.ui.reviewHeading)}</p>
              <p class="mt-4 text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(content.review.label)}</p>
              <p class="mt-3 text-sm leading-6 text-cloud-400 ${classForLanguage()}">${text(content.review.detail)}</p>
            </div>
            <button type="button" data-action="start" class="rounded-full bg-gold-400 px-6 py-4 text-base font-semibold text-night-950 shadow-lg shadow-gold-400/20 transition active:scale-[0.98]">${text(content.ui.attractButton)}</button>
          </div>
        </div>
        <p class="text-sm uppercase tracking-[0.28em] text-cloud-400 ${classForLanguage()}">${text(content.ui.attractInstruction)}</p>
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
        <button type="button" data-action="toggle-language" class="rounded-full border border-gold-300/40 px-4 py-3 text-sm font-semibold text-gold-300 transition active:scale-[0.98]">${content.ui.langToggle[state.language]}</button>
        <button type="button" data-action="reset" class="hidden rounded-full border border-white/10 px-4 py-3 text-sm font-semibold text-cloud-200 transition active:scale-[0.98] md:block ${classForLanguage()}">${text(content.ui.reset)}</button>
      </div>
    </div>
  `;
}

function renderNav(): void {
  const views: View[] = ['home', 'pyare', 'takhts', 'quiz'];

  bottomNav.innerHTML = `
    <div class="glass-header grid min-h-20 grid-cols-4 gap-2 px-2 pt-2 md:min-h-24 md:px-5 md:py-2">
      ${views
        .map(
          (view) => `
            <button
              type="button"
              data-nav="${view}"
              class="nav-pill"
              data-active="${state.view === view}"
              aria-current="${state.view === view ? 'page' : 'false'}"
            >
              <span class="text-xl">${icons[view]}</span>
              <span class="text-xs font-semibold uppercase tracking-[0.18em] ${classForLanguage()}">${text(content.ui.nav[view])}</span>
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

function renderArtworkPanel(imagePath: string, title: string, eyebrow: string): string {
  const imageStyle = imagePath ? `style="--art-image:url('${imagePath}');"` : '';

  return `
    <div class="art-panel mb-6" data-has-image="${String(Boolean(imagePath))}" ${imageStyle}>
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
    <div class="glass-panel geo-map-panel relative min-h-[22rem] overflow-hidden p-5">
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
          `,
        )
        .join('')}
      <div class="absolute bottom-5 left-5 right-5 rounded-[22px] border border-white/10 bg-night-950/88 p-4 backdrop-blur-xl">
        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.originMap)}</p>
        <h4 class="mt-2 text-lg font-semibold text-white ${classForLanguage()}">${text(selected.name)}</h4>
        <p class="mt-1 text-sm text-cloud-400 ${classForLanguage()}">${text(selected.from)}</p>
      </div>
    </div>
  `;
}

function renderHome(): string {
  const primaryFeatures = content.home.featureCards.filter((feature) => feature.id === 'pyare' || feature.id === 'takhts');
  const secondaryFeatures = content.home.featureCards.filter((feature) => feature.id !== 'pyare' && feature.id !== 'takhts');

  return `
    <div class="grid gap-6">
      <section class="glass-panel overflow-hidden p-7 md:p-10">
        <div class="soft-grid absolute inset-0 opacity-20"></div>
        <div class="relative">
          <p class="text-sm font-semibold uppercase tracking-[0.28em] text-gold-300">${text(content.sections.home.title)}</p>
          <h3 class="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl ${classForLanguage()}">${text(content.home.heroTitle)}</h3>
          <p class="mt-6 max-w-3xl text-lg leading-8 text-cloud-200 ${classForLanguage()}">${text(content.home.heroDescription)}</p>
        </div>
      </section>

      <section class="grid gap-6 lg:grid-cols-2">
        ${primaryFeatures.map(renderFeatureCard).join('')}
      </section>

      <section class="grid gap-6 xl:grid-cols-[1fr_0.95fr]">
        <aside class="grid gap-6">
          ${content.home.principles
            .map(
              (principle) => `
                <article class="glass-panel p-6">
                  <h4 class="text-lg font-semibold text-white ${classForLanguage()}">${text(principle.title)}</h4>
                  <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(principle.description)}</p>
                </article>
              `,
            )
            .join('')}
        </aside>
        <div class="grid gap-6">
          ${secondaryFeatures.map(renderFeatureCard).join('')}
        </div>
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

  const storyHtml = selected.story
    ? `<div class="story-panel mt-6">
         <p class="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300 ${classForLanguage()}">${text(content.ui.labels.story)}</p>
         <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(selected.story)}</p>
       </div>`
    : '';

  const funFactHtml = selected.funFact
    ? `<div class="fact-card mt-4">
         <div class="fact-card__icon">✦</div>
         <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.funFact)}</p>
         <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(selected.funFact)}</p>
       </div>`
    : '';

  const accomplishmentsHtml = selected.accomplishments
    ? `<div class="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 mt-4">
         <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.accomplishments)}</p>
         <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(selected.accomplishments)}</p>
       </div>`
    : '';

  const shaheediHtml = selected.shaheedi
    ? `<div class="rounded-[24px] border border-rose-300/15 bg-rose-400/5 p-5 mt-4">
         <p class="text-xs font-semibold uppercase tracking-[0.22em] text-rose-300 ${classForLanguage()}">${text(content.ui.labels.shaheedi)}</p>
         <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(selected.shaheedi)}</p>
       </div>`
    : '';

  return `
    <div class="grid gap-6 xl:grid-cols-[23rem_1fr]">
      <aside class="glass-panel p-4 md:p-5">
        <div class="mb-4 flex items-center justify-between gap-3">
          <h3 class="text-lg font-semibold text-white ${classForLanguage()}">${text(content.sections.pyare.title)}</h3>
          <span class="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-cloud-400">${content.panjPyare.length}</span>
        </div>
        <div class="grid gap-3">
          ${content.panjPyare
            .map(
              (item) => `
                <button type="button" data-pyara="${item.id}" class="rounded-[22px] border px-4 py-4 text-left transition ${
                  item.id === selected.id
                    ? 'border-gold-300/50 bg-gold-400/10 text-gold-300'
                    : 'border-white/8 bg-white/[0.03] text-cloud-200 active:scale-[0.99]'
                }">
                  <div class="flex items-center justify-between gap-4">
                    <div>
                      <p class="text-lg font-semibold ${classForLanguage()}">${text(item.name)}</p>
                      <p class="mt-1 text-sm text-cloud-400 ${classForLanguage()}">${text(item.from)}</p>
                    </div>
                    <span class="shrink-0 rounded-full border border-current/20 px-2 py-1 text-xs uppercase tracking-[0.14em] ${classForLanguage()}">${text(item.caste)}</span>
                  </div>
                </button>
              `,
            )
            .join('')}
        </div>
      </aside>
      <section class="glass-panel overflow-hidden p-8 md:p-10">
        <div class="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <div>
            ${renderArtworkPanel(selected.imagePath, text(selected.name), text(content.sections.pyare.title))}
            <p class="text-sm font-semibold uppercase tracking-[0.24em] text-gold-300 ${classForLanguage()}">${text(selected.representing)}</p>
            <h3 class="mt-4 text-4xl font-semibold text-white ${classForLanguage()}">${text(selected.name)}</h3>
            <p class="mt-2 text-base text-cloud-400 ${classForLanguage()}">${text(selected.birthName)} &middot; ${selected.years}</p>
            <p class="mt-4 text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(selected.details)}</p>
            ${storyHtml}
            ${funFactHtml}
            ${accomplishmentsHtml}
            ${shaheediHtml}
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
          </div>
          <div class="grid gap-4 content-start">
            ${renderPyareMap(selected)}
            ${renderInfoBox(content.ui.labels.birthName, text(selected.birthName))}
            ${renderInfoBox(content.ui.labels.birthDeath, selected.years)}
            ${renderInfoBox(content.ui.labels.previousOccupation, text(selected.occupation))}
            ${renderInfoBox(content.ui.labels.fromRegion, text(selected.from))}
            ${renderInfoBox(content.ui.labels.representing, text(selected.representing))}
            ${selected.roles ? `<article class="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.roles)}</p>
              <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(selected.roles)}</p>
            </article>` : ''}
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderTakhtMap(selected: TakhtProfile): string {
  return `
    <div class="glass-panel geo-map-panel relative min-h-[28rem] overflow-hidden p-6">
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
          `,
        )
        .join('')}
      <div class="absolute bottom-6 left-6 right-6 rounded-[24px] border border-white/10 bg-night-950/85 p-5 backdrop-blur-xl">
        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.sacredGeography)}</p>
        <h4 class="mt-3 text-2xl font-semibold text-white ${classForLanguage()}">${text(selected.name)}</h4>
        <p class="mt-2 text-sm text-cloud-400 ${classForLanguage()}">${text(selected.location)}</p>
      </div>
    </div>
  `;
}

function renderTakhts(): string {
  const selected = content.takhts.find((item) => item.id === state.selectedTakhtId) ?? content.takhts[0];

  const storyHtml = selected.story
    ? `<div class="story-panel mt-6">
         <p class="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300 ${classForLanguage()}">${text(content.ui.labels.story)}</p>
         <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(selected.story)}</p>
       </div>`
    : '';

  const funFactHtml = selected.funFact
    ? `<div class="fact-card mt-4">
         <div class="fact-card__icon">✦</div>
         <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.funFact)}</p>
         <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(selected.funFact)}</p>
       </div>`
    : '';

  const jathedaarHtml = selected.jathedaar
    ? `<div class="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
         <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.jathedaar)}</p>
         <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(selected.jathedaar)}</p>
       </div>`
    : '';

  const visitorsHtml = selected.visitorsInfo
    ? `<div class="rounded-[24px] border border-emerald-300/15 bg-emerald-400/5 p-5">
         <p class="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300 ${classForLanguage()}">${text(content.ui.labels.visitorsInfo)}</p>
         <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(selected.visitorsInfo)}</p>
       </div>`
    : '';

  return `
    <div class="grid gap-6 2xl:grid-cols-[24rem_1fr]">
      <aside class="grid gap-4">
        ${content.takhts
          .map(
            (takht, index) => `
              <button type="button" data-takht="${takht.id}" class="glass-panel p-5 text-left transition ${
                takht.id === selected.id ? 'border-gold-300/40 bg-gold-400/10' : 'active:scale-[0.99]'
              }">
                <div class="flex items-start justify-between gap-3">
                  <div class="min-w-0">
                    <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(takht.location)}</p>
                    <h3 class="mt-2 text-lg font-semibold text-white ${classForLanguage()}">${text(takht.name)}</h3>
                  </div>
                  <span class="shrink-0 rounded-full border border-gold-300/25 px-2 py-1 text-xs font-semibold text-gold-300">${index + 1}</span>
                </div>
                <p class="mt-2 text-xs leading-6 text-cloud-400 ${classForLanguage()} line-clamp-2">${text(takht.significance)}</p>
              </button>
            `,
          )
          .join('')}
      </aside>
      <section class="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        ${renderTakhtMap(selected)}
        <article class="glass-panel p-8 md:p-10">
          ${renderArtworkPanel(selected.imagePath, text(selected.name), text(content.sections.takhts.title))}
          <p class="text-sm font-semibold uppercase tracking-[0.24em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.establishedBy)}</p>
          <h3 class="mt-4 text-3xl font-semibold text-white ${classForLanguage()}">${text(selected.name)}</h3>
          <p class="mt-2 text-base text-cloud-400 ${classForLanguage()}">${text(selected.location)}${selected.yearDeclared ? ' &middot; ' + selected.yearDeclared : ''}</p>
          ${storyHtml}
          ${funFactHtml}
          <div class="storyline-panel mt-6">
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
          <div class="mt-6 grid gap-4">
            <div class="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.establishedBy)}</p>
              <p class="mt-3 text-base font-medium text-white ${classForLanguage()}">${text(selected.establishedBy)}</p>
            </div>
            <div class="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.significance)}</p>
              <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(selected.significance)}</p>
            </div>
            ${jathedaarHtml}
            ${visitorsHtml}
          </div>
        </article>
      </section>
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

function renderQuizQuestion(question: QuizQuestion): string {
  return `
    <article class="glass-panel p-8 md:p-10">
      <div class="mb-6 flex flex-wrap items-center justify-between gap-3">
        <p class="text-xs font-semibold uppercase tracking-[0.24em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.quizProgress)} ${state.quizIndex + 1} / ${content.quiz.questions.length}</p>
        <div class="h-2 w-full max-w-xs overflow-hidden rounded-full bg-white/8">
          <div class="h-full rounded-full bg-gold-400 transition duration-300" style="width:${((state.quizIndex + 1) / content.quiz.questions.length) * 100}%"></div>
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

function renderQuizResults(): string {
  const score = getQuizScore(state, content);
  const total = content.quiz.questions.length;

  return `
    <article class="glass-panel p-8 text-center md:p-12">
      <p class="text-sm font-semibold uppercase tracking-[0.24em] text-gold-300 ${classForLanguage()}">${text(content.sections.quiz.title)}</p>
      <h3 class="mt-5 text-5xl font-semibold text-white">${score} / ${total}</h3>
      <p class="mt-4 text-xl text-cloud-200 ${classForLanguage()}">${text(content.ui.labels.yourScore)}</p>
      <p class="mt-6 text-base leading-7 text-cloud-200 ${classForLanguage()}">${score === total ? text(content.ui.labels.perfectScore) : text(content.ui.labels.replayPrompt)}</p>
      <button type="button" data-action="restart-quiz" class="mt-8 rounded-full bg-gold-400 px-6 py-4 text-base font-semibold text-night-950 transition active:scale-[0.98]">${text(content.ui.labels.restartQuiz)}</button>
    </article>
  `;
}

function renderView(): void {
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
    case 'quiz': {
      if (isQuizComplete(state, content)) {
        viewContent.innerHTML = renderQuizResults();
      } else {
        const question = content.quiz.questions[state.quizIndex];
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

  if (target.closest('[data-action="toggle-language"]')) {
    state = toggleLanguage(state);
    render();
    scheduleInactivityReset();
    return;
  }

  if (target.closest('[data-action="reset"]')) {
    state = resetForInactivity(content);
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
    state = restartQuiz(state);
    render();
    scheduleInactivityReset();
  }
});

render();
