export type Language = 'en' | 'pa';
export type View = 'home' | 'pyare' | 'takhts' | 'quiz';

export interface LocalizedText {
  en: string;
  pa: string;
}

export interface ReviewMeta {
  label: LocalizedText;
  detail: LocalizedText;
  provenance: 'created-by-ai' | 'legacy-migration';
  status: 'pending-scholar-review' | 'reviewed';
}

export interface ViewCopy {
  title: LocalizedText;
  subtitle: LocalizedText;
}

export interface HomeFeature {
  id: View;
  icon: string;
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  cta: LocalizedText;
}

export interface PrincipleCard {
  title: LocalizedText;
  description: LocalizedText;
}

export interface PanjPyaraProfile {
  id: number;
  imagePath: string;
  name: LocalizedText;
  birthName: LocalizedText;
  years: string;
  caste: LocalizedText;
  from: LocalizedText;
  occupation: LocalizedText;
  details: LocalizedText;
  representing: LocalizedText;
}

export interface TakhtProfile {
  id: string;
  imagePath: string;
  name: LocalizedText;
  location: LocalizedText;
  establishedBy: LocalizedText;
  details: LocalizedText;
  significance: LocalizedText;
  mapPoint: {
    x: string;
    y: string;
  };
}

export interface QuizQuestion {
  prompt: LocalizedText;
  options: LocalizedText[];
  correctIndex: number;
  insight: LocalizedText;
}

export interface DisplayContent {
  settings: {
    timeoutSeconds: number;
  };
  review: ReviewMeta;
  sections: Record<View, ViewCopy>;
  ui: {
    experienceLabel: LocalizedText;
    attractEyebrow: LocalizedText;
    attractTitle: LocalizedText;
    attractSubtitle: LocalizedText;
    attractInstruction: LocalizedText;
    attractButton: LocalizedText;
    nav: Record<View, LocalizedText>;
    langToggle: Record<Language, string>;
    reset: LocalizedText;
    reviewHeading: LocalizedText;
    reviewAction: LocalizedText;
    labels: {
      birthName: LocalizedText;
      birthDeath: LocalizedText;
      previousOccupation: LocalizedText;
      fromRegion: LocalizedText;
      representing: LocalizedText;
      significance: LocalizedText;
      establishedBy: LocalizedText;
      sacredGeography: LocalizedText;
      quizProgress: LocalizedText;
      nextQuestion: LocalizedText;
      restartQuiz: LocalizedText;
      yourScore: LocalizedText;
      perfectScore: LocalizedText;
      replayPrompt: LocalizedText;
      correctAnswer: LocalizedText;
      reviewPanel: LocalizedText;
    };
  };
  home: {
    heroTitle: LocalizedText;
    heroDescription: LocalizedText;
    featureCards: HomeFeature[];
    principles: PrincipleCard[];
  };
  panjPyare: PanjPyaraProfile[];
  takhts: TakhtProfile[];
  quiz: {
    intro: LocalizedText;
    questions: QuizQuestion[];
  };
}
