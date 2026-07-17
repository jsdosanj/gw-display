import type { DisplayContent, Language, QuizLevel, QuizQuestion, View } from '../types/display';

export type QuizPhase = 'level' | 'count' | 'active' | 'results';

export interface KioskState {
  awake: boolean;
  language: Language;
  view: View;
  selectedPyaraId: number;
  selectedTakhtId: string;
  quizPhase: QuizPhase;
  quizLevel: QuizLevel | null;
  quizCount: number;
  quizIndex: number;
  quizQuestionOrder: number[];
  quizAnswers: number[];
  revealedAnswer: number | null;
  hasChosenMode: boolean;
}

function shuffleIndices(length: number): number[] {
  const indices = Array.from({ length }, (_, index) => index);
  for (let i = indices.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j] ?? 0, indices[i] ?? 0];
  }
  return indices;
}

function createQuizOrder(content: DisplayContent, level: QuizLevel, count: number): number[] {
  const pool = content.quiz.levels[level] ?? [];
  return shuffleIndices(pool.length).slice(0, Math.min(count, pool.length));
}

export function getActiveQuizQuestions(state: KioskState, content: DisplayContent): QuizQuestion[] {
  return state.quizLevel ? (content.quiz.levels[state.quizLevel] ?? []) : [];
}

export function createInitialState(content: DisplayContent): KioskState {
  return {
    awake: false,
    language: 'en',
    view: 'home',
    selectedPyaraId: content.panjPyare[0]?.id ?? 0,
    selectedTakhtId: content.takhts[0]?.id ?? '',
    quizPhase: 'level',
    quizLevel: null,
    quizCount: content.quiz.countOptions[0]?.count ?? 5,
    quizIndex: 0,
    quizQuestionOrder: [],
    quizAnswers: [],
    revealedAnswer: null,
    hasChosenMode: false,
  };
}

export function wakeKiosk(state: KioskState): KioskState {
  return {
    ...state,
    awake: true,
    hasChosenMode: false,
  };
}

export function setLanguage(state: KioskState, language: Language): KioskState {
  return {
    ...state,
    language,
  };
}

export function navigate(state: KioskState, view: View): KioskState {
  const next: KioskState = {
    ...state,
    view,
    hasChosenMode: true,
  };

  // The quiz always begins at level selection — entering it (even by
  // re-clicking the tab mid-round) starts a clean attempt rather than
  // resuming, matching the kiosk's reset-on-reentry behavior elsewhere.
  if (view === 'quiz') {
    next.quizPhase = 'level';
    next.quizLevel = null;
    next.quizIndex = 0;
    next.quizQuestionOrder = [];
    next.quizAnswers = [];
    next.revealedAnswer = null;
  }

  return next;
}

export function selectPyara(state: KioskState, selectedPyaraId: number): KioskState {
  return {
    ...state,
    selectedPyaraId,
  };
}

export function selectTakht(state: KioskState, selectedTakhtId: string): KioskState {
  return {
    ...state,
    selectedTakhtId,
  };
}

export function selectQuizLevel(state: KioskState, level: QuizLevel): KioskState {
  return {
    ...state,
    quizLevel: level,
    quizPhase: 'count',
  };
}

export function backToQuizLevels(state: KioskState): KioskState {
  return {
    ...state,
    quizPhase: 'level',
    quizLevel: null,
  };
}

export function startQuiz(state: KioskState, content: DisplayContent, count: number): KioskState {
  if (!state.quizLevel) {
    return state;
  }

  return {
    ...state,
    quizCount: count,
    quizIndex: 0,
    quizQuestionOrder: createQuizOrder(content, state.quizLevel, count),
    quizAnswers: [],
    revealedAnswer: null,
    quizPhase: 'active',
  };
}

export function submitQuizAnswer(state: KioskState, answerIndex: number): KioskState {
  if (state.revealedAnswer !== null) {
    return state;
  }

  const quizAnswers = [...state.quizAnswers];
  quizAnswers[state.quizIndex] = answerIndex;

  return {
    ...state,
    quizAnswers,
    revealedAnswer: answerIndex,
  };
}

export function advanceQuiz(state: KioskState): KioskState {
  return {
    ...state,
    quizIndex: state.quizIndex + 1,
    revealedAnswer: null,
  };
}

export function restartQuiz(state: KioskState, content: DisplayContent): KioskState {
  if (!state.quizLevel) {
    return state;
  }

  return {
    ...state,
    quizIndex: 0,
    quizQuestionOrder: createQuizOrder(content, state.quizLevel, state.quizCount),
    quizAnswers: [],
    revealedAnswer: null,
    quizPhase: 'active',
  };
}

export function resetForInactivity(content: DisplayContent): KioskState {
  return createInitialState(content);
}

export function getQuizScore(state: KioskState, content: DisplayContent): number {
  const questions = getActiveQuizQuestions(state, content);
  return state.quizQuestionOrder.reduce((score, questionIndex, index) => {
    const question = questions[questionIndex];
    if (!question) {
      return score;
    }
    return score + (state.quizAnswers[index] === question.correctIndex ? 1 : 0);
  }, 0);
}

export function isQuizComplete(state: KioskState): boolean {
  return state.quizIndex >= Math.min(state.quizCount, state.quizQuestionOrder.length);
}
