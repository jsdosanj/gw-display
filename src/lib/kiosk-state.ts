import type { DisplayContent, Language, View } from '../types/display';

export interface KioskState {
  awake: boolean;
  language: Language;
  view: View;
  selectedPyaraId: number;
  selectedTakhtId: string;
  quizIndex: number;
  quizAnswers: number[];
  revealedAnswer: number | null;
}

export function createInitialState(content: DisplayContent): KioskState {
  return {
    awake: false,
    language: 'en',
    view: 'home',
    selectedPyaraId: content.panjPyare[0]?.id ?? 0,
    selectedTakhtId: content.takhts[0]?.id ?? '',
    quizIndex: 0,
    quizAnswers: [],
    revealedAnswer: null,
  };
}

export function wakeKiosk(state: KioskState): KioskState {
  return {
    ...state,
    awake: true,
  };
}

export function toggleLanguage(state: KioskState): KioskState {
  return {
    ...state,
    language: state.language === 'en' ? 'pa' : 'en',
  };
}

export function navigate(state: KioskState, view: View): KioskState {
  return {
    ...state,
    view,
  };
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

export function restartQuiz(state: KioskState): KioskState {
  return {
    ...state,
    quizIndex: 0,
    quizAnswers: [],
    revealedAnswer: null,
  };
}

export function resetForInactivity(content: DisplayContent): KioskState {
  return createInitialState(content);
}

export function getQuizScore(state: KioskState, content: DisplayContent): number {
  return content.quiz.questions.reduce((score, question, index) => {
    return score + (state.quizAnswers[index] === question.correctIndex ? 1 : 0);
  }, 0);
}

export function isQuizComplete(state: KioskState, content: DisplayContent): boolean {
  return state.quizIndex >= content.quiz.questions.length;
}
