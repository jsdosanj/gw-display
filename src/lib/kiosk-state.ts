import type { DisplayContent, Language, View } from '../types/display';

export interface KioskState {
  awake: boolean;
  language: Language;
  view: View;
  selectedPyaraId: number;
  selectedTakhtId: string;
  quizIndex: number;
  quizQuestionOrder: number[];
  quizAnswers: number[];
  revealedAnswer: number | null;
  hasChosenMode: boolean;
}

function createQuizOrder(content: DisplayContent): number[] {
  const indices = content.quiz.questions.map((_, index) => index);
  for (let i = indices.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j] ?? 0, indices[i] ?? 0];
  }
  return indices.slice(0, Math.min(content.quiz.questionsPerRound, indices.length));
}

export function createInitialState(content: DisplayContent): KioskState {
  return {
    awake: false,
    language: 'en',
    view: 'home',
    selectedPyaraId: content.panjPyare[0]?.id ?? 0,
    selectedTakhtId: content.takhts[0]?.id ?? '',
    quizIndex: 0,
    quizQuestionOrder: createQuizOrder(content),
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
  return {
    ...state,
    view,
    hasChosenMode: true,
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

export function restartQuiz(state: KioskState, content: DisplayContent): KioskState {
  return {
    ...state,
    quizIndex: 0,
    quizQuestionOrder: createQuizOrder(content),
    quizAnswers: [],
    revealedAnswer: null,
  };
}

export function resetForInactivity(content: DisplayContent): KioskState {
  return createInitialState(content);
}

export function getQuizScore(state: KioskState, content: DisplayContent): number {
  return state.quizQuestionOrder.reduce((score, questionIndex, index) => {
    const question = content.quiz.questions[questionIndex];
    if (!question) {
      return score;
    }
    return score + (state.quizAnswers[index] === question.correctIndex ? 1 : 0);
  }, 0);
}

export function isQuizComplete(state: KioskState, content: DisplayContent): boolean {
  return state.quizIndex >= Math.min(content.quiz.questionsPerRound, state.quizQuestionOrder.length);
}
