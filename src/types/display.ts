export type Language = 'en' | 'pa' | 'hi' | 'es' | 'ar';
export type View = 'home' | 'pyare' | 'takhts' | 'quiz' | 'about' | 'resources' | 'leaflets';

export interface LocalizedText {
  en: string;
  pa: string;
  hi?: string;
  es?: string;
  ar?: string;
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
  silhouettePath: string;
  mapPoint: {
    x: string;
    y: string;
  };
  name: LocalizedText;
  birthName: LocalizedText;
  years: string;
  caste: LocalizedText;
  from: LocalizedText;
  occupation: LocalizedText;
  details: LocalizedText;
  representing: LocalizedText;
  story?: LocalizedText;
  funFact?: LocalizedText;
  roles?: LocalizedText;
  accomplishments?: LocalizedText;
  shaheedi?: LocalizedText;
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
  story?: LocalizedText;
  funFact?: LocalizedText;
  jathedaar?: LocalizedText;
  visitorsInfo?: LocalizedText;
  yearDeclared?: string;
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
    languageLabel: LocalizedText;
    languages: Record<Language, string>;
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
      originMap: LocalizedText;
      storylineJourney: LocalizedText;
      quizProgress: LocalizedText;
      nextQuestion: LocalizedText;
      restartQuiz: LocalizedText;
      yourScore: LocalizedText;
      perfectScore: LocalizedText;
      replayPrompt: LocalizedText;
      correctAnswer: LocalizedText;
      reviewPanel: LocalizedText;
      story: LocalizedText;
      funFact: LocalizedText;
      roles: LocalizedText;
      accomplishments: LocalizedText;
      shaheedi: LocalizedText;
      jathedaar: LocalizedText;
      visitorsInfo: LocalizedText;
    };
  };
  home: {
    heroTitle: LocalizedText;
    heroDescription: LocalizedText;
    collaborationBanner: LocalizedText;
    differentiationTitle: LocalizedText;
    differentiationDescription: LocalizedText;
    differentiationCards: {
      id: 'pyare' | 'takhts';
      imagePath: string;
      title: LocalizedText;
      description: LocalizedText;
    }[];
    featureCards: HomeFeature[];
  };
  about: {
    title: LocalizedText;
    collaboration: LocalizedText;
    partnerships: LocalizedText;
    futureUpdates: LocalizedText;
    principles: PrincipleCard[];
  };
  resources: {
    title: LocalizedText;
    intro: LocalizedText;
    sites: {
      id: string;
      title: string;
      url: string;
      previewTitle: LocalizedText;
      previewDescription: LocalizedText;
      details: LocalizedText;
    }[];
  };
  leaflets: {
    title: LocalizedText;
    intro: LocalizedText;
    cta: LocalizedText;
    hubUrl: string;
  };
  panjPyare: PanjPyaraProfile[];
  takhts: TakhtProfile[];
  quiz: {
    intro: LocalizedText;
    questionsPerRound: number;
    questions: QuizQuestion[];
  };
}
