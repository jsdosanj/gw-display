export type Language = 'en' | 'pa' | 'hi' | 'es' | 'ar';
export type View = 'home' | 'pyare' | 'takhts' | 'quiz' | 'learn' | 'about' | 'resources' | 'leaflets';
export type ThemePalette = 'default' | 'vaisakhi' | 'diwali' | 'gurpurab';

export interface LocalizedText {
  en: string;
  pa: string;
  hi?: string;
  es?: string;
  ar?: string;
}

export interface EventTheme {
  id: string;
  palette: ThemePalette;
  icon: string;
  label: LocalizedText;
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

export type QuizLevel = 'beginner' | 'intermediate' | 'advanced';

export interface QuizQuestion {
  prompt: LocalizedText;
  options: LocalizedText[];
  correctIndex: number;
  insight: LocalizedText;
}

export interface QuizLevelMeta {
  title: LocalizedText;
  description: LocalizedText;
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
  relation: LocalizedText;
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
  guruLineageTitle: LocalizedText;
  guruLineageIntro: LocalizedText;
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
    themeLabel: LocalizedText;
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
      excellentScore: LocalizedText;
      goodScore: LocalizedText;
      tryAgainScore: LocalizedText;
      replayPrompt: LocalizedText;
      chooseLevelTitle: LocalizedText;
      chooseLevelStep: LocalizedText;
      chooseCountTitle: LocalizedText;
      chooseCountStep: LocalizedText;
      backButton: LocalizedText;
      changeLevel: LocalizedText;
      tryAgainButton: LocalizedText;
      correctAnswer: LocalizedText;
      reviewPanel: LocalizedText;
      story: LocalizedText;
      funFact: LocalizedText;
      roles: LocalizedText;
      accomplishments: LocalizedText;
      shaheedi: LocalizedText;
      jathedaar: LocalizedText;
      visitorsInfo: LocalizedText;
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
      journeyProgress: LocalizedText;
      installBannerAndroid: LocalizedText;
      installBannerIos: LocalizedText;
      installAction: LocalizedText;
      dismissAction: LocalizedText;
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
    contributorsLabel: LocalizedText;
    contributors: string[];
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
  themes: EventTheme[];
  quiz: {
    intro: LocalizedText;
    levelMeta: Record<QuizLevel, QuizLevelMeta>;
    countOptions: { count: number; label: LocalizedText }[];
    levels: Record<QuizLevel, QuizQuestion[]>;
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
