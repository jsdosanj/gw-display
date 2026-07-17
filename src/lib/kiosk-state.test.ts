import { describe, expect, it } from 'vitest';

import displayContent from '../data/display-content';
import {
  advanceQuiz,
  createInitialState,
  getQuizScore,
  navigate,
  resetForInactivity,
  restartQuiz,
  selectPyara,
  selectTakht,
  setLanguage,
  submitQuizAnswer,
  wakeKiosk,
} from './kiosk-state';

describe('kiosk state helpers', () => {
  it('creates the default kiosk state from content', () => {
    const state = createInitialState(displayContent);

    expect(state.awake).toBe(false);
    expect(state.language).toBe('en');
    expect(state.view).toBe('home');
    expect(state.selectedPyaraId).toBe(displayContent.panjPyare[0]?.id);
    expect(state.selectedTakhtId).toBe(displayContent.takhts[0]?.id);
  });

  it('sets language and wakes the kiosk', () => {
    const initial = createInitialState(displayContent);
    const awake = wakeKiosk(initial);
    const toggled = setLanguage(awake, 'pa');

    expect(awake.awake).toBe(true);
    expect(toggled.language).toBe('pa');
  });

  it('navigates between views and retains selected records', () => {
    const initial = createInitialState(displayContent);
    const next = selectTakht(selectPyara(navigate(initial, 'takhts'), 3), 'hazur_sahib');

    expect(next.view).toBe('takhts');
    expect(next.selectedPyaraId).toBe(3);
    expect(next.selectedTakhtId).toBe('hazur_sahib');
  });

  it('sets hasChosenMode to true on navigate', () => {
    const state = wakeKiosk(createInitialState(displayContent));
    expect(state.hasChosenMode).toBe(false);
    const navigated = navigate(state, 'pyare');
    expect(navigated.hasChosenMode).toBe(true);
  });

  it('records quiz answers, advances, and scores the round', () => {
    let state = createInitialState(displayContent);
    const firstQuestionIndex = state.quizQuestionOrder[0] ?? 0;
    const secondQuestionIndex = state.quizQuestionOrder[1] ?? 0;
    state = submitQuizAnswer(state, displayContent.quiz.questions[firstQuestionIndex]?.correctIndex ?? 0);
    state = advanceQuiz(state);
    state = submitQuizAnswer(state, (displayContent.quiz.questions[secondQuestionIndex]?.correctIndex ?? 1) + 1);

    expect(state.quizAnswers[0]).toBe(displayContent.quiz.questions[firstQuestionIndex]?.correctIndex);
    expect(state.quizQuestionOrder).toHaveLength(displayContent.quiz.questionsPerRound);
    expect(getQuizScore(state, displayContent)).toBe(1);
  });

  it('resets quiz progress and inactivity state', () => {
    let state = createInitialState(displayContent);
    state = wakeKiosk(navigate(state, 'quiz'));
    state = submitQuizAnswer(state, 0);
    state = restartQuiz(state, displayContent);

    expect(state.quizIndex).toBe(0);
    expect(state.quizQuestionOrder).toHaveLength(displayContent.quiz.questionsPerRound);
    expect(state.quizAnswers).toHaveLength(0);

    const reset = resetForInactivity(displayContent);
    expect(reset.awake).toBe(false);
    expect(reset.view).toBe('home');
  });
});
