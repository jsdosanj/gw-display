export type Language = 'en' | 'pa' | 'hi' | 'es' | 'ar';
export type View = 'home' | 'pyare' | 'takhts' | 'quiz' | 'learn' | 'about' | 'resources' | 'leaflets';

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
  lessons?: LocalizedText;
  language?: LocalizedText;
  qualities?: LocalizedText;
}

export interface TakhtProfile {
  id: string;
  imagePath: string;
  silhouettePath?: string;
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
  gurusVisited?: LocalizedText;
  areaHistory?: LocalizedText;
  localImpact?: LocalizedText;
}

export interface QuizQuestion {
  prompt: LocalizedText;
  options: LocalizedText[];
  correctIndex: number;
  insight: LocalizedText;
}

export interface FaqItem {
  question: LocalizedText;
  answer: LocalizedText;
}

export interface TimelineEvent {
  year: string;
  title: LocalizedText;
  description: LocalizedText;
  mapPoint?: { x: string; y: string };
}

export interface GurdwaraRoom {
  name: LocalizedText;
  description: LocalizedText;
}

export interface EtiquetteItem {
  title: LocalizedText;
  description: LocalizedText;
}

export interface GuruSummary {
  order: number;
  name: LocalizedText;
  years: string;
  summary: LocalizedText;
}

export interface SahibzaadaSummary {
  name: LocalizedText;
  years: string;
  summary: LocalizedText;
}

export interface KakaarItem {
  name: LocalizedText;
  meaning: LocalizedText;
  description: LocalizedText;
}

export interface PillarItem {
  term: LocalizedText;
  description: LocalizedText;
}

export interface ShabadItem {
  gurmukhi: string;
  translation: LocalizedText;
  ang: number;
  raag: string;
  author: LocalizedText;
  verificationNote: LocalizedText;
}

export interface LearnSikhiContent {
  title: LocalizedText;
  intro: LocalizedText;
  gurdwaraRoomsTitle: LocalizedText;
  gurdwaraRooms: GurdwaraRoom[];
  etiquetteTitle: LocalizedText;
  etiquette: EtiquetteItem[];
  gurusTitle: LocalizedText;
  gurus: GuruSummary[];
  sahibzaadeTitle: LocalizedText;
  sahibzaade: SahibzaadaSummary[];
  kakaarsTitle: LocalizedText;
  kakaarsIntro: LocalizedText;
  kakaars: KakaarItem[];
  introTitle: LocalizedText;
  whatIsSikhi: LocalizedText;
  founding: LocalizedText;
  sevaSimran: LocalizedText;
  pillarsTitle: LocalizedText;
  pillars: PillarItem[];
  gurbaniTitle: LocalizedText;
  gurbaniIntro: LocalizedText;
  shabads: ShabadItem[];
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
      aiTranslationDisclaimer: LocalizedText;
      openInBrowser: LocalizedText;
      visitSite: LocalizedText;
      takhtsIntro: LocalizedText;
      pyareIntro: LocalizedText;
      selectOnMap: LocalizedText;
      learnMore: LocalizedText;
      beforeKhalsa: LocalizedText;
      afterKhalsa: LocalizedText;
      timelineTitle: LocalizedText;
      faqTitle: LocalizedText;
      leafletsHelper: LocalizedText;
      recapTitle: LocalizedText;
      collaborationWith: LocalizedText;
      livePreviews: LocalizedText;
      scanToVisit: LocalizedText;
      lessons: LocalizedText;
      language: LocalizedText;
      qualities: LocalizedText;
      gurusVisited: LocalizedText;
      areaHistory: LocalizedText;
      localImpact: LocalizedText;
      embedUnavailable: LocalizedText;
      ttsListen: LocalizedText;
      ttsNoPunjabiVoice: LocalizedText;
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
  learnSikhi: LearnSikhiContent;
  quiz: {
    intro: LocalizedText;
    questionsPerRound: number;
    questions: QuizQuestion[];
  };
  faq: FaqItem[];
  timeline: TimelineEvent[];
  onboarding: {
    welcomeTitle: LocalizedText;
    welcomeSubtitle: LocalizedText;
    modeTitle: LocalizedText;
    modes: {
      id: 'start-here' | 'pyare' | 'takhts';
      icon: string;
      title: LocalizedText;
      description: LocalizedText;
    }[];
  };
}
