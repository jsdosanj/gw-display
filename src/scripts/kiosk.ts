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
  type KioskState,
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

const contentEl = document.getElementById('display-data');
const content: DisplayContent = contentEl?.textContent ? JSON.parse(contentEl.textContent) : displayContent;

const attractScreen = document.getElementById('attract-screen');
const mainShell = document.getElementById('main-shell');
const header = document.getElementById('app-header');
const viewContent = document.getElementById('view-content');
const bottomNav = document.getElementById('bottom-nav');

if (!attractScreen || !mainShell || !header || !viewContent || !bottomNav) {
  throw new Error('Kiosk shell failed to mount.');
}

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
    <div class="glass-header flex h-24 items-center justify-between px-5 md:px-8">
      <div class="flex min-w-0 items-center gap-4">
        <button type="button" data-nav="home" class="flex h-14 w-14 items-center justify-center rounded-full border border-gold-300/30 bg-white/5 text-2xl text-gold-300 transition active:scale-[0.98]">☬</button>
        <div class="min-w-0">
          <p class="truncate text-xs font-semibold uppercase tracking-[0.22em] text-cloud-400">${text(content.ui.experienceLabel)}</p>
          <h2 class="truncate text-2xl font-semibold text-white ${classForLanguage()}">${text(copy.title)}</h2>
          <p class="truncate text-sm text-cloud-400 ${classForLanguage()}">${text(copy.subtitle)}</p>
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
    <div class="glass-header grid h-24 grid-cols-4 gap-2 px-3 py-2 md:px-5">
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

function renderHome(): string {
  return `
    <div class="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
      <section class="glass-panel overflow-hidden p-8 md:p-10">
        <div class="soft-grid absolute inset-0 opacity-20"></div>
        <div class="relative">
          <p class="text-sm font-semibold uppercase tracking-[0.28em] text-gold-300">${text(content.sections.home.title)}</p>
          <h3 class="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl ${classForLanguage()}">${text(content.home.heroTitle)}</h3>
          <p class="mt-6 max-w-3xl text-lg leading-8 text-cloud-200 ${classForLanguage()}">${text(content.home.heroDescription)}</p>
          <div class="mt-8 rounded-[24px] border border-gold-300/20 bg-gold-400/8 p-5">
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.reviewPanel)}</p>
            <p class="mt-3 text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(content.review.label)}</p>
            <p class="mt-2 text-sm leading-6 text-cloud-400 ${classForLanguage()}">${text(content.ui.reviewAction)}</p>
          </div>
        </div>
      </section>
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
      <section class="xl:col-span-2 grid gap-6 lg:grid-cols-3">
        ${content.home.featureCards.map(renderFeatureCard).join('')}
      </section>
    </div>
  `;
}

function renderPyare(): string {
  const selected = content.panjPyare.find((item) => item.id === state.selectedPyaraId) ?? content.panjPyare[0];

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
                    <span class="rounded-full border border-current/20 px-3 py-1 text-xs uppercase tracking-[0.18em] ${classForLanguage()}">${text(item.representing)}</span>
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
            <p class="text-sm font-semibold uppercase tracking-[0.24em] text-gold-300 ${classForLanguage()}">${text(selected.representing)}</p>
            <h3 class="mt-4 text-4xl font-semibold text-white ${classForLanguage()}">${text(selected.name)}</h3>
            <p class="mt-5 text-lg leading-8 text-cloud-200 ${classForLanguage()}">${text(selected.details)}</p>
          </div>
          <div class="grid gap-4">
            ${[
              [content.ui.labels.birthName, text(selected.birthName)],
              [content.ui.labels.birthDeath, selected.years],
              [content.ui.labels.previousOccupation, text(selected.occupation)],
              [content.ui.labels.fromRegion, text(selected.from)],
              [content.ui.labels.representing, text(selected.representing)],
            ]
              .map(
                ([label, value]) => `
                  <article class="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                    <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${typeof label === 'string' ? label : text(label)}</p>
                    <p class="mt-3 text-lg font-medium text-white ${classForLanguage()}">${value}</p>
                  </article>
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
    <div class="glass-panel relative min-h-[28rem] overflow-hidden p-6">
      <div class="soft-grid absolute inset-0 opacity-20"></div>
      <div class="absolute inset-[12%] rounded-[28px] border border-white/10 bg-gradient-to-br from-night-800 to-night-900"></div>
      <div class="absolute inset-x-[21%] top-[14%] h-[58%] rounded-[45%_38%_42%_46%] border border-white/8 bg-white/[0.03]"></div>
      <div class="absolute inset-x-[38%] bottom-[16%] h-[26%] rounded-[32%_45%_46%_30%] border border-white/8 bg-white/[0.03]"></div>
      <div class="absolute inset-y-[18%] left-[30%] w-px bg-gradient-to-b from-transparent via-gold-300/40 to-transparent"></div>
      <div class="absolute inset-y-[28%] left-[46%] w-px bg-gradient-to-b from-transparent via-gold-300/20 to-transparent"></div>
      <div class="absolute left-[28%] top-[20%] h-[1px] w-[38%] bg-gradient-to-r from-transparent via-gold-300/30 to-transparent"></div>
      ${content.takhts
        .map(
          (takht) => `
            <button
              type="button"
              class="pin-button"
              data-takht="${takht.id}"
              data-active="${takht.id === selected.id}"
              style="left:${takht.mapPoint.x}; top:${takht.mapPoint.y};"
              aria-label="${text(takht.name)}"
            >
              ${takht.id === selected.id ? '☬' : '•'}
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

  return `
    <div class="grid gap-6 2xl:grid-cols-[24rem_1fr]">
      <aside class="grid gap-4">
        ${content.takhts
          .map(
            (takht) => `
              <button type="button" data-takht="${takht.id}" class="glass-panel p-5 text-left transition ${
                takht.id === selected.id ? 'border-gold-300/40 bg-gold-400/10' : 'active:scale-[0.99]'
              }">
                <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(takht.location)}</p>
                <h3 class="mt-3 text-xl font-semibold text-white ${classForLanguage()}">${text(takht.name)}</h3>
                <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(takht.significance)}</p>
              </button>
            `,
          )
          .join('')}
      </aside>
      <section class="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        ${renderTakhtMap(selected)}
        <article class="glass-panel p-8 md:p-10">
          <p class="text-sm font-semibold uppercase tracking-[0.24em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.establishedBy)}</p>
          <h3 class="mt-4 text-3xl font-semibold text-white ${classForLanguage()}">${text(selected.name)}</h3>
          <p class="mt-2 text-base text-cloud-400 ${classForLanguage()}">${text(selected.location)}</p>
          <div class="mt-8 grid gap-5">
            <div class="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.establishedBy)}</p>
              <p class="mt-3 text-lg font-medium text-white ${classForLanguage()}">${text(selected.establishedBy)}</p>
            </div>
            <div class="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.significance)}</p>
              <p class="mt-3 text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(selected.significance)}</p>
            </div>
            <div class="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.sections.takhts.subtitle)}</p>
              <p class="mt-3 text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(selected.details)}</p>
            </div>
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
