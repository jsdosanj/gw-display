import type { DisplayContent } from '../types/display';

const displayContent: DisplayContent = {
  settings: {
    timeoutSeconds: 45,
  },
  review: {
    provenance: 'created-by-ai',
    status: 'pending-scholar-review',
    label: {
      en: 'Created by AI • Pending scholar review',
      pa: 'ਏਆਈ ਦੁਆਰਾ ਤਿਆਰ ਕੀਤਾ • ਵਿਦਵਤ ਸਮੀਖਿਆ ਬਾਕੀ',
    },
    detail: {
      en: 'Historical summaries in this display must be verified by the scholar review board before being treated as authoritative teaching material.',
      pa: 'ਇਸ ਪ੍ਰਦਰਸ਼ਨੀ ਦੇ ਇਤਿਹਾਸਕ ਸਾਰਾਂਸ਼ਾਂ ਨੂੰ ਅਧਿਕਾਰਕ ਸਿੱਖਿਆ ਸਮੱਗਰੀ ਵਜੋਂ ਵਰਤੋਂ ਤੋਂ ਪਹਿਲਾਂ ਵਿਦਵਤ ਸਮੀਖਿਆ ਬੋਰਡ ਵੱਲੋਂ ਪ੍ਰਮਾਣਿਤ ਕੀਤਾ ਜਾਣਾ ਲਾਜ਼ਮੀ ਹੈ।',
    },
  },
  sections: {
    home: {
      title: { en: 'Legacy of the Khalsa', pa: 'ਖ਼ਾਲਸੇ ਦੀ ਵਿਰਾਸਤ' },
      subtitle: { en: 'A premium bilingual museum-style display experience', pa: 'ਇੱਕ ਉੱਚ-ਪੱਧਰੀ ਦੋਭਾਸ਼ੀ ਮਿਊਜ਼ੀਅਮ-ਸ਼ੈਲੀ ਪ੍ਰਦਰਸ਼ਨੀ ਅਨੁਭਵ' },
    },
    pyare: {
      title: { en: 'Panj Pyare', pa: 'ਪੰਜ ਪਿਆਰੇ' },
      subtitle: { en: 'Five lives that modeled devotion, courage, and collective identity', pa: 'ਪੰਜ ਜੀਵਨ ਜਿਨ੍ਹਾਂ ਨੇ ਭਗਤੀ, ਹਿੰਮਤ ਅਤੇ ਸਾਂਝੀ ਪਹਿਚਾਣ ਨੂੰ ਰੂਪ ਦਿੱਤਾ' },
    },
    takhts: {
      title: { en: 'Panj Takht', pa: 'ਪੰਜ ਤਖ਼ਤ' },
      subtitle: { en: 'Sacred geography and institutional authority across the Sikh world', pa: 'ਸਿੱਖ ਜਗਤ ਵਿੱਚ ਪਵਿੱਤਰ ਭੂਗੋਲ ਅਤੇ ਸੰਸਥਾਗਤ ਅਧਿਕਾਰ' },
    },
    quiz: {
      title: { en: 'Interactive Quiz', pa: 'ਇੰਟਰਐਕਟਿਵ ਕਵਿਜ਼' },
      subtitle: { en: 'A touch-friendly learning mode for families, students, and sangat', pa: 'ਪਰਿਵਾਰਾਂ, ਵਿਦਿਆਰਥੀਆਂ ਅਤੇ ਸੰਗਤ ਲਈ ਟਚ-ਦੋਸਤ ਸਿੱਖਣ ਮੋਡ' },
    },
  },
  ui: {
    experienceLabel: { en: 'Premium Interactive Display', pa: 'ਪ੍ਰੀਮੀਅਮ ਇੰਟਰਐਕਟਿਵ ਪ੍ਰਦਰਸ਼ਨੀ' },
    attractEyebrow: { en: 'Immersive Kiosk Experience', pa: 'ਡੁੱਬਕੀਵਾਂ ਕਿਓਸਕ ਅਨੁਭਵ' },
    attractTitle: { en: 'Panj Pyare & Panj Takht', pa: 'ਪੰਜ ਪਿਆਰੇ ਅਤੇ ਪੰਜ ਤਖ਼ਤ' },
    attractSubtitle: { en: 'A ceremonial digital doorway into memory, identity, and Sikh institutional history.', pa: 'ਸਮ੍ਰਿਤੀ, ਪਹਿਚਾਣ ਅਤੇ ਸਿੱਖ ਸੰਸਥਾਗਤ ਇਤਿਹਾਸ ਵੱਲ ਇਕ ਰਸਮੀ ਡਿਜ਼ਿਟਲ ਦਰਵਾਜ਼ਾ।' },
    attractInstruction: { en: 'Touch anywhere to begin the guided display.', pa: 'ਮਾਰਗਦਰਸ਼ਿਤ ਪ੍ਰਦਰਸ਼ਨੀ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਕਿਤੇ ਵੀ ਛੂਹੋ।' },
    attractButton: { en: 'Begin Experience', pa: 'ਅਨੁਭਵ ਸ਼ੁਰੂ ਕਰੋ' },
    nav: {
      home: { en: 'Home', pa: 'ਮੁੱਖ' },
      pyare: { en: '5 Pyare', pa: '੫ ਪਿਆਰੇ' },
      takhts: { en: '5 Takht', pa: '੫ ਤਖ਼ਤ' },
      quiz: { en: 'Quiz', pa: 'ਕਵਿਜ਼' },
    },
    langToggle: {
      en: 'ਪੰਜਾਬੀ',
      pa: 'ENGLISH',
    },
    reset: { en: 'Reset display', pa: 'ਪ੍ਰਦਰਸ਼ਨੀ ਰੀਸੈੱਟ ਕਰੋ' },
    reviewHeading: { en: 'Scholar review status', pa: 'ਵਿਦਵਤ ਸਮੀਖਿਆ ਦੀ ਸਥਿਤੀ' },
    reviewAction: { en: 'Human review required before authoritative use', pa: 'ਅਧਿਕਾਰਕ ਵਰਤੋਂ ਤੋਂ ਪਹਿਲਾਂ ਮਨੁੱਖੀ ਸਮੀਖਿਆ ਲਾਜ਼ਮੀ ਹੈ' },
    labels: {
      birthName: { en: 'Birth name', pa: 'ਜਨਮ ਨਾਮ' },
      birthDeath: { en: 'Birth & shaheedi', pa: 'ਜਨਮ ਅਤੇ ਸ਼ਹੀਦੀ' },
      previousOccupation: { en: 'Prior occupation', pa: 'ਪਹਿਲਾ ਕਿੱਤਾ' },
      fromRegion: { en: 'From region', pa: 'ਇਲਾਕਾ' },
      representing: { en: 'Representing', pa: 'ਪ੍ਰਤੀਨਿਧਤਾ' },
      significance: { en: 'Significance', pa: 'ਮਹੱਤਵ' },
      establishedBy: { en: 'Established by', pa: 'ਸਥਾਪਨਾ' },
      sacredGeography: { en: 'Sacred geography', pa: 'ਪਵਿੱਤਰ ਭੂਗੋਲ' },
      originMap: { en: 'Origins across South Asia', pa: 'ਦੱਖਣੀ ਏਸ਼ੀਆ ਵਿੱਚ ਮੂਲ ਸਥਾਨ' },
      storylineJourney: { en: 'Storyline journey', pa: 'ਕਥਾ ਯਾਤਰਾ' },
      quizProgress: { en: 'Question', pa: 'ਪ੍ਰਸ਼ਨ' },
      nextQuestion: { en: 'Next question', pa: 'ਅਗਲਾ ਪ੍ਰਸ਼ਨ' },
      restartQuiz: { en: 'Play again', pa: 'ਮੁੜ ਖੇਡੋ' },
      yourScore: { en: 'Your score', pa: 'ਤੁਹਾਡਾ ਸਕੋਰ' },
      perfectScore: { en: 'Perfect score — beautifully done.', pa: 'ਪੂਰਾ ਸਕੋਰ — ਬਹੁਤ ਸੁੰਦਰ।' },
      replayPrompt: { en: 'Continue exploring and try again to deepen retention.', pa: 'ਹੋਰ ਖੋਜ ਕਰੋ ਅਤੇ ਯਾਦਗਾਰੀ ਵਧਾਉਣ ਲਈ ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।' },
      correctAnswer: { en: 'Correct answer', pa: 'ਸਹੀ ਉੱਤਰ' },
      reviewPanel: { en: 'Content provenance', pa: 'ਸਮੱਗਰੀ ਦਾ ਮੂਲ' },
      story: { en: 'The story', pa: 'ਕਥਾ' },
      funFact: { en: 'Did you know?', pa: 'ਕੀ ਤੁਸੀਂ ਜਾਣਦੇ ਹੋ?' },
      roles: { en: 'Roles & contributions', pa: 'ਰੋਲ ਅਤੇ ਯੋਗਦਾਨ' },
      accomplishments: { en: 'Key accomplishments', pa: 'ਮੁੱਖ ਪ੍ਰਾਪਤੀਆਂ' },
      shaheedi: { en: 'Shaheedi', pa: 'ਸ਼ਹੀਦੀ' },
      jathedaar: { en: 'Current Jathedar', pa: 'ਮੌਜੂਦਾ ਜਥੇਦਾਰ' },
      visitorsInfo: { en: 'Visitor information', pa: 'ਸੈਲਾਨੀ ਜਾਣਕਾਰੀ' },
    },
  },
  home: {
    heroTitle: {
      en: 'A museum-grade digital display for reverent, touch-first Sikh learning.',
      pa: 'ਗੰਭੀਰ, ਟਚ-ਪਹਿਲਾਂ ਸਿੱਖ ਸਿੱਖਿਆ ਲਈ ਮਿਊਜ਼ੀਅਮ-ਪੱਧਰੀ ਡਿਜ਼ਿਟਲ ਪ੍ਰਦਰਸ਼ਨੀ।',
    },
    heroDescription: {
      en: 'Explore the formation of the Khalsa, the lives of the Panj Pyare, and the sacred authority of the Panj Takht through a focused bilingual experience designed for kiosk screens.',
      pa: 'ਖ਼ਾਲਸੇ ਦੀ ਰਚਨਾ, ਪੰਜ ਪਿਆਰਿਆਂ ਦੇ ਜੀਵਨ ਅਤੇ ਪੰਜ ਤਖ਼ਤਾਂ ਦੀ ਪਵਿੱਤਰ ਅਧਿਕਾਰਤਾ ਨੂੰ ਕਿਓਸਕ ਸਕ੍ਰੀਨਾਂ ਲਈ ਤਿਆਰ ਕੀਤੇ ਕੇਂਦ੍ਰਿਤ ਦੋਭਾਸ਼ੀ ਅਨੁਭਵ ਰਾਹੀਂ ਜਾਣੋ।',
    },
    featureCards: [
      {
        id: 'pyare',
        icon: '⚔️',
        eyebrow: { en: 'Collective Identity', pa: 'ਸਾਂਝੀ ਪਹਿਚਾਣ' },
        title: { en: 'Explore the Panj Pyare', pa: 'ਪੰਜ ਪਿਆਰਿਆਂ ਨੂੰ ਜਾਣੋ' },
        description: { en: 'Compare their backgrounds, regions, and contributions in a refined side-by-side experience.', pa: 'ਉਨ੍ਹਾਂ ਦੇ ਪਿਛੋਕੜ, ਇਲਾਕੇ ਅਤੇ ਯੋਗਦਾਨ ਨੂੰ ਇਕ ਨਿੱਖਰੇ ਤੁਲਨਾਤਮਕ ਅਨੁਭਵ ਵਿੱਚ ਦੇਖੋ।' },
        cta: { en: 'Open profiles', pa: 'ਪ੍ਰੋਫ਼ਾਈਲ ਖੋਲ੍ਹੋ' },
      },
      {
        id: 'takhts',
        icon: '🕌',
        eyebrow: { en: 'Sacred Geography', pa: 'ਪਵਿੱਤਰ ਭੂਗੋਲ' },
        title: { en: 'Journey across the Panj Takht', pa: 'ਪੰਜ ਤਖ਼ਤਾਂ ਦੀ ਯਾਤਰਾ' },
        description: { en: 'Move through the five seats of authority with an elegant map-first narrative layout.', pa: 'ਅਧਿਕਾਰ ਦੇ ਪੰਜ ਆਸਣਾਂ ਰਾਹੀਂ ਸੁੰਦਰ ਨਕਸ਼ਾ-ਪਹਿਲਾਂ ਕਥਾਤਮਕ ਲੇਆਉਟ ਨਾਲ ਯਾਤਰਾ ਕਰੋ।' },
        cta: { en: 'View Takht', pa: 'ਤਖ਼ਤ ਵੇਖੋ' },
      },
      {
        id: 'quiz',
        icon: '✨',
        eyebrow: { en: 'Active Recall', pa: 'ਸਕ੍ਰਿਯ ਯਾਦ' },
        title: { en: 'Test memory with a polished quiz mode', pa: 'ਨਿੱਖਰੇ ਕਵਿਜ਼ ਮੋਡ ਨਾਲ ਯਾਦਸ਼ਕਤੀ ਪਰਖੋ' },
        description: { en: 'Use touch-friendly cards, instant feedback, and replayable rounds to strengthen retention.', pa: 'ਟਚ-ਦੋਸਤ ਕਾਰਡ, ਤੁਰੰਤ ਪ੍ਰਤੀਕਿਰਿਆ ਅਤੇ ਦੁਹਰਾਏ ਜਾ ਸਕਣ ਵਾਲੇ ਰਾਊਂਡਾਂ ਨਾਲ ਯਾਦ ਮਜ਼ਬੂਤ ਕਰੋ।' },
        cta: { en: 'Start quiz', pa: 'ਕਵਿਜ਼ ਸ਼ੁਰੂ ਕਰੋ' },
      },
    ],
    principles: [
      {
        title: { en: 'Bilingual by design', pa: 'ਡਿਜ਼ਾਇਨ ਤੋਂ ਦੋਭਾਸ਼ੀ' },
        description: { en: 'English framing with clear Punjabi Unicode support keeps the display welcoming and reverent.', pa: 'ਅੰਗਰੇਜ਼ੀ ਪ੍ਰਸਤੁਤੀ ਅਤੇ ਸਪਸ਼ਟ ਪੰਜਾਬੀ ਯੂਨੀਕੋਡ ਸਹਾਇਤਾ ਪ੍ਰਦਰਸ਼ਨੀ ਨੂੰ ਸਵਾਗਤੀ ਅਤੇ ਗੰਭੀਰ ਬਣਾਉਂਦੀ ਹੈ।' },
      },
      {
        title: { en: 'Kiosk-first behavior', pa: 'ਕਿਓਸਕ-ਪਹਿਲਾਂ ਵਿਹਾਰ' },
        description: { en: 'Idle reset, large touch targets, and consistent navigation protect the exhibit flow.', pa: 'ਨਿਸ਼ਕ੍ਰਿਯਤਾ ਰੀਸੈੱਟ, ਵੱਡੇ ਟਚ ਟਾਰਗਟ ਅਤੇ ਇੱਕਸਾਰ ਨੇਵੀਗੇਸ਼ਨ ਪ੍ਰਦਰਸ਼ਨੀ ਦੇ ਪ੍ਰਭਾਹ ਨੂੰ ਸੁਰੱਖਿਅਤ ਰੱਖਦੇ ਹਨ।' },
      },
      {
        title: { en: 'Accuracy gates', pa: 'ਸ਼ੁੱਧਤਾ ਦਰਵਾਜ਼ੇ' },
        description: { en: 'The experience visibly distinguishes drafted material from scholar-reviewed authority.', pa: 'ਇਹ ਅਨੁਭਵ ਖਾਕਾ ਸਮੱਗਰੀ ਅਤੇ ਵਿਦਵਤ-ਪ੍ਰਮਾਣਿਤ ਅਧਿਕਾਰ ਵਿਚਕਾਰ ਸਪਸ਼ਟ ਫ਼ਰਕ ਦਿਖਾਉਂਦਾ ਹੈ।' },
      },
    ],
  },
  panjPyare: [
    {
      id: 1,
      imagePath: '/assets/images/pyara1.jpg',
      mapPoint: { x: '40%', y: '22%' },
      name: { en: 'Bhai Daya Singh Ji', pa: 'ਭਾਈ ਦਯਾ ਸਿੰਘ ਜੀ' },
      birthName: { en: 'Daya Ram', pa: 'ਦਇਆ ਰਾਮ' },
      years: '1661 – 1708',
      caste: { en: 'Khatri', pa: 'ਖੱਤਰੀ' },
      from: { en: 'Lahore, Punjab (now Pakistan)', pa: 'ਲਾਹੌਰ, ਪੰਜਾਬ (ਹੁਣ ਪਾਕਿਸਤਾਨ)' },
      occupation: { en: 'Merchant', pa: 'ਵਪਾਰੀ' },
      representing: { en: 'North — Compassion (Daya)', pa: 'ਉੱਤਰ — ਦਇਆ' },
      details: { en: 'The first to answer Guru Gobind Singh Ji\'s call on Vaisakhi 1699, later serving with courage in major campaigns and carrying the historic Zafarnama to Aurangzeb.', pa: 'ਵਿਸਾਖੀ 1699 ਵਿੱਚ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੀ ਪੁਕਾਰ ਦਾ ਪਹਿਲਾਂ ਉੱਤਰ ਦੇਣ ਵਾਲੇ, ਜਿਨ੍ਹਾਂ ਨੇ ਬਾਅਦ ਵਿੱਚ ਵੱਡੇ ਅਭਿਆਨਾਂ ਵਿੱਚ ਦਲੇਰੀ ਨਾਲ ਸੇਵਾ ਕੀਤੀ ਅਤੇ ਇਤਿਹਾਸਕ ਜ਼ਫ਼ਰਨਾਮਾ ਔਰੰਗਜ਼ੇਬ ਤੱਕ ਪਹੁੰਚਾਇਆ।' },
      story: {
        en: 'On Vaisakhi, April 30, 1699, Guru Gobind Singh Ji addressed a vast gathering at Anandpur Sahib. Drawing his sword, the Guru called for a volunteer willing to give his head for the faith. After a profound silence, Daya Ram of Lahore stepped forward — the first and bravest of five. After initiating all five, the Guru asked the newly-created Panj Pyare to initiate the Guru himself into the Khalsa — placing himself as a student of his own Khalsa. Bhai Daya Singh Ji remained at the Guru\'s side through every hardship until the very end at Nanded in 1708.',
        pa: 'ਵਿਸਾਖੀ, 30 ਅਪ੍ਰੈਲ 1699 ਨੂੰ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਵਿੱਚ, ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਵੱਡੀ ਸੰਗਤ ਨੂੰ ਸੰਬੋਧਿਤ ਕੀਤਾ। ਤਲਵਾਰ ਕੱਢ ਕੇ ਗੁਰੂ ਜੀ ਨੇ ਧਰਮ ਲਈ ਆਪਣਾ ਸਿਰ ਦੇਣ ਵਾਲੇ ਸੇਵਾਦਾਰ ਦੀ ਮੰਗ ਕੀਤੀ। ਗਹਿਰੀ ਚੁੱਪ ਤੋਂ ਬਾਅਦ ਲਾਹੌਰ ਤੋਂ ਦਇਆ ਰਾਮ ਪਹਿਲਾ ਅੱਗੇ ਆਇਆ।',
      },
      funFact: {
        en: 'Bhai Daya Singh Ji was entrusted with one of history\'s most daring missions — carrying the Zafarnama ("Letter of Victory") to Emperor Aurangzeb deep in the Deccan. In this letter, Guru Gobind Singh Ji wrote powerful poetry asserting moral victory even in worldly defeat.',
        pa: 'ਭਾਈ ਦਯਾ ਸਿੰਘ ਜੀ ਨੂੰ ਔਰੰਗਜ਼ੇਬ ਨੂੰ ਦੱਖਣ ਵਿੱਚ ਜ਼ਫ਼ਰਨਾਮਾ ਪਹੁੰਚਾਉਣ ਦਾ ਇਤਿਹਾਸ ਦਾ ਸਭ ਤੋਂ ਦਲੇਰ ਮਿਸ਼ਨ ਸੌਂਪਿਆ ਗਿਆ।',
      },
      roles: {
        en: 'First of the Panj Pyare; Khalsa diplomat and emissary; trusted companion of Guru Gobind Singh Ji in battle and statecraft.',
        pa: 'ਪੰਜ ਪਿਆਰਿਆਂ ਵਿੱਚੋਂ ਪਹਿਲੇ; ਖ਼ਾਲਸਾ ਦੂਤ; ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਭਰੋਸੇਯੋਗ ਸਾਥੀ।',
      },
      accomplishments: {
        en: 'Delivered the Zafarnama to Aurangzeb at Ahmednagar (1706); fought in the Battle of Muktsar (1705); helped initiate Guru Gobind Singh Ji himself into the Khalsa.',
        pa: 'ਅਹਿਮਦਨਗਰ ਵਿੱਚ ਔਰੰਗਜ਼ੇਬ ਨੂੰ ਜ਼ਫ਼ਰਨਾਮਾ ਸੌਂਪਿਆ (1706); ਮੁਕਤਸਰ ਦੀ ਜੰਗ ਵਿੱਚ ਲੜੇ (1705)।',
      },
      shaheedi: {
        en: 'Bhai Daya Singh Ji remained with Guru Gobind Singh Ji until the Guru\'s final days at Nanded, Maharashtra, in October 1708. He attained jyoti jot shortly thereafter, never having left the Guru\'s side.',
        pa: 'ਭਾਈ ਦਯਾ ਸਿੰਘ ਜੀ ਨਾਂਦੇੜ, ਮਹਾਰਾਸ਼ਟਰ ਵਿੱਚ ਅਕਤੂਬਰ 1708 ਤੱਕ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਨਾਲ ਰਹੇ।',
      },
    },
    {
      id: 2,
      imagePath: '/assets/images/pyara2.jpg',
      mapPoint: { x: '48%', y: '26%' },
      name: { en: 'Bhai Dharam Singh Ji', pa: 'ਭਾਈ ਧਰਮ ਸਿੰਘ ਜੀ' },
      birthName: { en: 'Dharam Das', pa: 'ਧਰਮ ਦਾਸ' },
      years: '1666 – 1708',
      caste: { en: 'Jat', pa: 'ਜੱਟ' },
      from: { en: 'Hastinapur, Uttar Pradesh', pa: 'ਹਸਤਿਨਾਪੁਰ, ਉੱਤਰ ਪ੍ਰਦੇਸ਼' },
      occupation: { en: 'Farmer', pa: 'ਕਿਸਾਨ' },
      representing: { en: 'East — Righteousness (Dharam)', pa: 'ਪੂਰਬ — ਧਰਮ' },
      details: { en: 'The second beloved volunteer, remembered as a witness to the Khalsa ideal of righteous resolve and shared discipline.', pa: 'ਦੂਜੇ ਪਿਆਰੇ ਸੇਵਾਦਾਰ, ਜੋ ਖ਼ਾਲਸੇ ਦੇ ਧਰਮੀ ਦ੍ਰਿੜ ਨਿਸ਼ਚੇ ਅਤੇ ਸਾਂਝੇ ਅਨੁਸ਼ਾਸਨ ਦੇ ਆਦਰਸ਼ ਦੇ ਸਾਕਸ਼ੀ ਵਜੋਂ ਯਾਦ ਕੀਤੇ ਜਾਂਦੇ ਹਨ।' },
      story: {
        en: 'Dharam Das was a farmer of the Jat community from Hastinapur, the ancient city of the Mahabharata. He was the second to step forward when Guru Gobind Singh Ji\'s divine call rang out. Rising from the congregation without hesitation, he crossed every social boundary to stand beside a Khatri merchant — a powerful statement that the Khalsa would dissolve the hierarchy of caste. His very name, Dharam (righteousness), became his identity in the Khalsa as Bhai Dharam Singh Ji.',
        pa: 'ਧਰਮ ਦਾਸ ਹਸਤਿਨਾਪੁਰ ਤੋਂ ਜੱਟ ਭਾਈਚਾਰੇ ਦਾ ਕਿਸਾਨ ਸੀ। ਉਹ ਦੂਜਾ ਅੱਗੇ ਆਇਆ ਜਦੋਂ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੀ ਪੁਕਾਰ ਗੂੰਜੀ। ਉਸਨੇ ਖੱਤਰੀ ਵਪਾਰੀ ਦੇ ਨਾਲ ਖੜੇ ਹੋ ਕੇ ਜਾਤ ਦੀਆਂ ਸਾਰੀਆਂ ਸੀਮਾਵਾਂ ਪਾਰ ਕੀਤੀਆਂ।',
      },
      funFact: {
        en: 'Hastinapur — Bhai Dharam Singh Ji\'s hometown — is the legendary capital of the Kaurava kingdom from the ancient Mahabharata epic, a city steeped in the concept of dharma (righteous duty). A man from the city of dharma stepped forward to embody dharma in its truest, most transformative form.',
        pa: 'ਹਸਤਿਨਾਪੁਰ — ਭਾਈ ਧਰਮ ਸਿੰਘ ਜੀ ਦਾ ਜੱਦੀ ਸ਼ਹਿਰ — ਮਹਾਭਾਰਤ ਮਹਾਂਕਾਵਿ ਦੀ ਕੌਰਵ ਰਾਜਧਾਨੀ ਹੈ — ਧਰਮ ਦੇ ਸੰਕਲਪ ਵਿੱਚ ਡੁੱਬੀ ਇੱਕ ਪੁਰਾਤਨ ਨਗਰੀ।',
      },
      roles: {
        en: 'Second of the Panj Pyare; represented the farming (Jat) community; embodied righteous duty and steadfast courage in founding the Khalsa.',
        pa: 'ਪੰਜ ਪਿਆਰਿਆਂ ਵਿੱਚੋਂ ਦੂਜੇ; ਕਿਸਾਨ ਭਾਈਚਾਰੇ ਦੀ ਪ੍ਰਤੀਨਿਧਤਾ; ਖ਼ਾਲਸਾ ਪੰਥ ਦੀ ਨੀਂਹ ਰੱਖਣ ਵਿੱਚ ਯੋਗਦਾਨ।',
      },
      accomplishments: {
        en: 'One of the five founding members of the Khalsa (1699); helped initiate Guru Gobind Singh Ji into the Khalsa; participated in the Guru\'s military campaigns with distinction.',
        pa: 'ਖ਼ਾਲਸੇ ਦੇ ਪੰਜ ਸੰਸਥਾਪਕ ਮੈਂਬਰਾਂ ਵਿੱਚੋਂ ਇੱਕ (1699); ਗੁਰੂ ਜੀ ਦੀਆਂ ਫ਼ੌਜੀ ਮੁਹਿੰਮਾਂ ਵਿੱਚ ਭਾਗ ਲਿਆ।',
      },
      shaheedi: {
        en: 'Historical accounts differ. Some sources record Bhai Dharam Singh Ji as having attained shaheedi at the Battle of Chamkaur Sahib (1705); others place him at Nanded in 1708. He is honoured as having given everything in service of the Guru\'s mission.',
        pa: 'ਇਤਿਹਾਸਕ ਬਿਰਤਾਂਤ ਵੱਖ-ਵੱਖ ਹਨ। ਕੁਝ ਸਰੋਤ ਕਹਿੰਦੇ ਹਨ ਕਿ ਉਨ੍ਹਾਂ ਨੇ 1705 ਵਿੱਚ ਚਮਕੌਰ ਸਾਹਿਬ ਦੀ ਜੰਗ ਵਿੱਚ ਸ਼ਹੀਦੀ ਪਾਈ।',
      },
    },
    {
      id: 3,
      imagePath: '/assets/images/pyara3.jpg',
      mapPoint: { x: '64%', y: '46%' },
      name: { en: 'Bhai Himmat Singh Ji', pa: 'ਭਾਈ ਹਿੰਮਤ ਸਿੰਘ ਜੀ' },
      birthName: { en: 'Himmat Rai', pa: 'ਹਿੰਮਤ ਰਾਏ' },
      years: '1661 – 1705',
      caste: { en: 'Jheevar (water carrier)', pa: 'ਝੀਵਰ (ਪਾਣੀ ਢੋਣ ਵਾਲਾ)' },
      from: { en: 'Jagannath Puri, Odisha', pa: 'ਜਗਨਨਾਥ ਪੁਰੀ, ਉੜੀਸਾ' },
      occupation: { en: 'Water carrier at Guru Ka Langar', pa: 'ਗੁਰੂ ਕੇ ਲੰਗਰ ਵਿੱਚ ਪਾਣੀ ਢੋਣ ਵਾਲਾ' },
      representing: { en: 'Center — Courage (Himmat)', pa: 'ਕੇਂਦਰ — ਹਿੰਮਤ' },
      details: { en: 'The third beloved companion, remembered for fearless service and for standing firm in the face of battlefield sacrifice.', pa: 'ਤੀਜੇ ਪਿਆਰੇ, ਜੋ ਨਿਰਭਉ ਸੇਵਾ ਅਤੇ ਯੁੱਧਕਾਲੀ ਬਲਿਦਾਨ ਦੇ ਸਾਹਮਣੇ ਅਡੋਲ ਖੜ੍ਹੇ ਰਹਿਣ ਲਈ ਯਾਦ ਕੀਤੇ ਜਾਂਦੇ ਹਨ।' },
      story: {
        en: 'Himmat Rai was a water carrier (jheevar) who made the long pilgrimage from Jagannath Puri in Odisha to serve at Guru Ka Langar in Anandpur Sahib. On Vaisakhi 1699, he was the third to rise when the Guru called. His act was extraordinary: in the caste hierarchy of the era, jheevar was one of the most marginalized communities. Yet at this founding moment, he stood equal to a Khatri merchant. His courage (himmat) in stepping forward embodied the Khalsa\'s founding truth — all souls are equal before the Creator.',
        pa: 'ਹਿੰਮਤ ਰਾਏ ਉੜੀਸਾ ਦੇ ਜਗਨਨਾਥ ਪੁਰੀ ਤੋਂ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਵਿੱਚ ਗੁਰੂ ਕੇ ਲੰਗਰ ਵਿੱਚ ਸੇਵਾ ਕਰਨ ਲਈ ਆਇਆ ਸੀ। ਵਿਸਾਖੀ 1699 ਨੂੰ ਉਹ ਤੀਜਾ ਅੱਗੇ ਆਇਆ — ਜਾਤ ਦੀਆਂ ਸਾਰੀਆਂ ਸੀਮਾਵਾਂ ਤੋੜਦੇ ਹੋਏ।',
      },
      funFact: {
        en: 'Himmat Rai traveled from Jagannath Puri in Odisha — one of India\'s four most sacred pilgrimage sites (dhams), home to one of the most revered temples in tradition. His spiritual yearning carried him hundreds of miles to serve in the Guru\'s presence.',
        pa: 'ਹਿੰਮਤ ਰਾਏ ਉੜੀਸਾ ਦੇ ਜਗਨਨਾਥ ਪੁਰੀ ਤੋਂ ਆਇਆ — ਭਾਰਤ ਦੇ ਚਾਰ ਸਭ ਤੋਂ ਪਵਿੱਤਰ ਧਾਰਮਿਕ ਸਥਾਨਾਂ ਵਿੱਚੋਂ ਇੱਕ।',
      },
      roles: {
        en: 'Third of the Panj Pyare; served as water carrier at Guru Ka Langar; represented marginalized communities; living proof of the Khalsa\'s casteless equality.',
        pa: 'ਪੰਜ ਪਿਆਰਿਆਂ ਵਿੱਚੋਂ ਤੀਜੇ; ਗੁਰੂ ਕੇ ਲੰਗਰ ਵਿੱਚ ਪਾਣੀ ਢੋਣ ਵਾਲੇ; ਖ਼ਾਲਸੇ ਦੀ ਜਾਤ-ਮੁਕਤ ਬਰਾਬਰੀ ਦੇ ਜੀਵੰਤ ਸਬੂਤ।',
      },
      accomplishments: {
        en: 'Co-inaugurated the Khande-di-Pahul (Amrit ceremony); helped initiate Guru Gobind Singh Ji into the Khalsa; fought bravely in the Guru\'s military campaigns across Punjab.',
        pa: 'ਖੰਡੇ ਦੀ ਪਾਹੁਲ ਦੀ ਸ਼ੁਰੂਆਤ ਕੀਤੀ; ਗੁਰੂ ਜੀ ਦੀਆਂ ਫ਼ੌਜੀ ਮੁਹਿੰਮਾਂ ਵਿੱਚ ਦਲੇਰੀ ਨਾਲ ਲੜੇ।',
      },
      shaheedi: {
        en: 'Bhai Himmat Singh Ji attained shaheedi at the Battle of Chamkaur Sahib on December 7, 1705 — fighting alongside the Guru\'s own sons and companions, giving his life to defend the Khalsa Panth.',
        pa: 'ਭਾਈ ਹਿੰਮਤ ਸਿੰਘ ਜੀ ਨੇ 7 ਦਸੰਬਰ 1705 ਨੂੰ ਚਮਕੌਰ ਸਾਹਿਬ ਦੀ ਜੰਗ ਵਿੱਚ ਸ਼ਹੀਦੀ ਪਾਈ।',
      },
    },
    {
      id: 4,
      imagePath: '/assets/images/pyara4.jpg',
      mapPoint: { x: '30%', y: '41%' },
      name: { en: 'Bhai Mohkam Singh Ji', pa: 'ਭਾਈ ਮੋਹਕਮ ਸਿੰਘ ਜੀ' },
      birthName: { en: 'Mohkam Chand', pa: 'ਮੋਹਕਮ ਚੰਦ' },
      years: '1663 – 1705',
      caste: { en: 'Chhimba (calico printer)', pa: 'ਛੀਂਬਾ (ਛਾਪਾਕਾਰ)' },
      from: { en: 'Dwarka, Gujarat', pa: 'ਦਵਾਰਕਾ, ਗੁਜਰਾਤ' },
      occupation: { en: 'Tailor and calico printer', pa: 'ਦਰਜ਼ੀ ਅਤੇ ਛਾਪਾਕਾਰ' },
      representing: { en: 'West — Steadfastness (Mohkam)', pa: 'ਪੱਛਮ — ਅਡੋਲਤਾ' },
      details: { en: 'The fourth beloved one, embodying steadfastness and disciplined companionship in the Guru\'s service.', pa: 'ਚੌਥੇ ਪਿਆਰੇ, ਜਿਨ੍ਹਾਂ ਨੇ ਗੁਰੂ ਦੀ ਸੇਵਾ ਵਿੱਚ ਦ੍ਰਿੜਤਾ ਅਤੇ ਅਨੁਸ਼ਾਸਿਤ ਸਾਥ ਦਾ ਰੂਪ ਦਿਖਾਇਆ।' },
      story: {
        en: 'Mohkam Chand was a craftsman — a calico printer and tailor — from Dwarka in Gujarat. His hands, skilled in creating patterns on cloth, were now raised in a different devotion: the founding of the Khalsa. He was the fourth to step forward when Guru Gobind Singh Ji called for a head. That a skilled artisan from faraway Dwarka — thousands of miles from Punjab — answered this call demonstrates the extraordinary geographic reach of the Guru\'s sangat across all of India.',
        pa: 'ਮੋਹਕਮ ਚੰਦ ਗੁਜਰਾਤ ਦੇ ਦਵਾਰਕਾ ਤੋਂ ਇੱਕ ਕਾਰੀਗਰ — ਛਾਪਾਕਾਰ ਅਤੇ ਦਰਜ਼ੀ — ਸੀ। ਉਹ ਚੌਥਾ ਅੱਗੇ ਆਇਆ ਜਦੋਂ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਸਿਰ ਦੇਣ ਵਾਲੇ ਦੀ ਮੰਗ ਕੀਤੀ।',
      },
      funFact: {
        en: 'Bhai Mohkam Singh Ji came from Dwarka — one of the four sacred dhams (pilgrimage sites) of India, considered the holy city of Lord Krishna. That someone from one of tradition\'s holiest cities answered a different, transformative spiritual call is a profound testimony to the Guru\'s reach.',
        pa: 'ਭਾਈ ਮੋਹਕਮ ਸਿੰਘ ਜੀ ਦਵਾਰਕਾ ਤੋਂ ਆਏ — ਭਾਰਤ ਦੇ ਚਾਰ ਪਵਿੱਤਰ ਧਾਮਾਂ ਵਿੱਚੋਂ ਇੱਕ, ਜੋ ਭਗਵਾਨ ਕ੍ਰਿਸ਼ਨ ਦੀ ਪਵਿੱਤਰ ਨਗਰੀ ਮੰਨੀ ਜਾਂਦੀ ਹੈ।',
      },
      roles: {
        en: 'Fourth of the Panj Pyare; represented artisan and craftsman communities; embodied steadfastness (mohkam) in service of the Guru and the Khalsa Panth.',
        pa: 'ਪੰਜ ਪਿਆਰਿਆਂ ਵਿੱਚੋਂ ਚੌਥੇ; ਕਾਰੀਗਰ ਭਾਈਚਾਰੇ ਦੀ ਪ੍ਰਤੀਨਿਧਤਾ; ਗੁਰੂ ਦੀ ਸੇਵਾ ਵਿੱਚ ਅਡੋਲਤਾ ਦਾ ਰੂਪ।',
      },
      accomplishments: {
        en: 'One of the five founders of the Khalsa Panth (1699); co-initiated the first Amrit ceremony; participated in major battles alongside Guru Gobind Singh Ji.',
        pa: 'ਖ਼ਾਲਸਾ ਪੰਥ ਦੇ ਪੰਜ ਸੰਸਥਾਪਕਾਂ ਵਿੱਚੋਂ ਇੱਕ (1699); ਗੁਰੂ ਜੀ ਦੇ ਨਾਲ ਵੱਡੀਆਂ ਲੜਾਈਆਂ ਵਿੱਚ ਭਾਗ ਲਿਆ।',
      },
      shaheedi: {
        en: 'Bhai Mohkam Singh Ji attained shaheedi at the Battle of Chamkaur Sahib in December 1705, among the brave companions who gave their lives defending the Guru and the Khalsa Panth.',
        pa: 'ਭਾਈ ਮੋਹਕਮ ਸਿੰਘ ਜੀ ਨੇ ਦਸੰਬਰ 1705 ਵਿੱਚ ਚਮਕੌਰ ਸਾਹਿਬ ਦੀ ਜੰਗ ਵਿੱਚ ਸ਼ਹੀਦੀ ਪਾਈ।',
      },
    },
    {
      id: 5,
      imagePath: '/assets/images/pyara5.jpg',
      mapPoint: { x: '47%', y: '50%' },
      name: { en: 'Bhai Sahib Singh Ji', pa: 'ਭਾਈ ਸਾਹਿਬ ਸਿੰਘ ਜੀ' },
      birthName: { en: 'Sahib Chand', pa: 'ਸਾਹਿਬ ਚੰਦ' },
      years: '1662 – 1705',
      caste: { en: 'Nai (barber)', pa: 'ਨਾਈ (ਹਜਾਮ)' },
      from: { en: 'Bidar, Karnataka', pa: 'ਬੀਦਰ, ਕਰਨਾਟਕ' },
      occupation: { en: 'Barber', pa: 'ਹਜਾਮ / ਨਾਈ' },
      representing: { en: 'South — Service (Sahib)', pa: 'ਦੱਖਣ — ਸੇਵਾ' },
      details: { en: 'The fifth to step forward, completing the Panj Pyare and visibly breaking caste distinctions within the Khalsa order.', pa: 'ਅੱਗੇ ਆਉਣ ਵਾਲੇ ਪੰਜਵੇਂ ਪਿਆਰੇ, ਜਿਨ੍ਹਾਂ ਨੇ ਪੰਜ ਪਿਆਰਿਆਂ ਦੀ ਗਿਣਤੀ ਪੂਰੀ ਕੀਤੀ ਅਤੇ ਖ਼ਾਲਸਾ ਪੰਥ ਵਿੱਚ ਜਾਤ-ਭੇਦ ਨੂੰ ਸਪਸ਼ਟ ਤੌਰ ਤੇ ਤੋੜਿਆ।' },
      story: {
        en: 'Sahib Chand was a barber from Bidar, Karnataka — hundreds of miles south of Punjab. In traditional Indian society, the Nai (barber) community occupied a marginalized rung of the caste order. Yet when Guru Gobind Singh Ji\'s call rang out on Vaisakhi 1699, Sahib Chand was the fifth to step forward — and in doing so, he stood alongside a Khatri merchant, a Jat farmer, a water carrier, and a calico printer. Five people, five different castes, five corners of India. The Khalsa was complete: united as one brotherhood under Waheguru.',
        pa: 'ਸਾਹਿਬ ਚੰਦ ਕਰਨਾਟਕ ਦੇ ਬੀਦਰ ਤੋਂ ਇੱਕ ਨਾਈ ਸੀ। ਵਿਸਾਖੀ 1699 ਨੂੰ ਉਹ ਪੰਜਵਾਂ ਅੱਗੇ ਆਇਆ — ਇੱਕ ਖੱਤਰੀ, ਜੱਟ, ਝੀਵਰ ਅਤੇ ਛੀਂਬੇ ਦੇ ਨਾਲ ਖੜਾ ਹੋ ਕੇ। ਪੰਜ ਜਾਤਾਂ, ਪੰਜ ਖਿੱਤੇ — ਇੱਕ ਖ਼ਾਲਸਾ।',
      },
      funFact: {
        en: 'Bidar, Bhai Sahib Singh Ji\'s hometown in Karnataka, is over 1,500 km south of Anandpur Sahib. That someone traveled so far to be in the Guru\'s presence — and then answered the most extraordinary call in Sikh history — shows the magnetic spiritual pull of Guru Gobind Singh Ji across the entire subcontinent.',
        pa: 'ਕਰਨਾਟਕ ਵਿੱਚ ਬੀਦਰ, ਭਾਈ ਸਾਹਿਬ ਸਿੰਘ ਜੀ ਦਾ ਜੱਦੀ ਸ਼ਹਿਰ, ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਤੋਂ 1,500 ਕਿਲੋਮੀਟਰ ਤੋਂ ਵੱਧ ਦੂਰ ਹੈ।',
      },
      roles: {
        en: 'Fifth and final of the Panj Pyare; completed the founding of the Khalsa; represented South India and service communities; embodied the principle of universal equality.',
        pa: 'ਪੰਜ ਪਿਆਰਿਆਂ ਵਿੱਚੋਂ ਪੰਜਵੇਂ ਅਤੇ ਆਖਰੀ; ਖ਼ਾਲਸੇ ਦੀ ਸਥਾਪਨਾ ਨੂੰ ਪੂਰਾ ਕੀਤਾ; ਸਰਵਭੌਮਿਕ ਬਰਾਬਰੀ ਦੇ ਸਿਧਾਂਤ ਨੂੰ ਦਰਸਾਇਆ।',
      },
      accomplishments: {
        en: 'Completed the founding circle of the Panj Pyare; helped inaugurate the Amrit Sanchar ceremony; served as the living embodiment of Sikh teaching that all souls are equal before Waheguru.',
        pa: 'ਪੰਜ ਪਿਆਰਿਆਂ ਦੇ ਸੰਸਥਾਪਕ ਚੱਕਰ ਨੂੰ ਪੂਰਾ ਕੀਤਾ; ਅੰਮ੍ਰਿਤ ਸੰਚਾਰ ਸ਼ੁਰੂ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕੀਤੀ।',
      },
      shaheedi: {
        en: 'Bhai Sahib Singh Ji is believed to have attained shaheedi at the Battle of Chamkaur Sahib in December 1705, giving his life alongside his brothers of the Panj Pyare in the service of the Khalsa Panth.',
        pa: 'ਭਾਈ ਸਾਹਿਬ ਸਿੰਘ ਜੀ ਨੇ ਦਸੰਬਰ 1705 ਵਿੱਚ ਚਮਕੌਰ ਸਾਹਿਬ ਦੀ ਜੰਗ ਵਿੱਚ ਸ਼ਹੀਦੀ ਪਾਈ।',
      },
    },
  ],
  takhts: [
    {
      id: 'akal_takht',
      imagePath: '/assets/images/takht1.jpg',
      name: { en: 'Sri Akal Takht Sahib', pa: 'ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ' },
      location: { en: 'Amritsar, Punjab, India', pa: 'ਅੰਮ੍ਰਿਤਸਰ, ਪੰਜਾਬ, ਭਾਰਤ' },
      establishedBy: { en: 'Guru Hargobind Sahib Ji — 6th Guru (1606 CE)', pa: 'ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ — ਛੇਵੇਂ ਗੁਰੂ (1606 ਈ.)' },
      significance: { en: 'The supreme seat of Sikh temporal authority (Miri), standing directly opposite Sri Harmandir Sahib to embody the dual principle of Miri-Piri — worldly sovereignty and spiritual authority united.', pa: 'ਸਿੱਖ ਸੰਸਾਰਕ ਅਧਿਕਾਰ (ਮੀਰੀ) ਦਾ ਸਰਵੋੱਚ ਆਸਣ, ਜੋ ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਦੇ ਬਿਲਕੁਲ ਸਾਹਮਣੇ ਖੜ੍ਹਾ ਹੈ ਅਤੇ ਮੀਰੀ-ਪੀਰੀ ਦੇ ਦੋਹਰੇ ਸਿਧਾਂਤ ਦਾ ਰੂਪ ਹੈ।' },
      details: { en: 'Akal Takht anchors Sikh institutional leadership and is the source of all official hukamnamas (edicts) that govern the Sikh Panth worldwide.', pa: 'ਅਕਾਲ ਤਖ਼ਤ ਸਿੱਖ ਸੰਸਥਾਗਤ ਨੇਤ੍ਰਿਤਵ ਦਾ ਕੇਂਦਰ ਹੈ ਅਤੇ ਵਿਸ਼ਵਵਿਆਪੀ ਸਿੱਖ ਪੰਥ ਨੂੰ ਸੇਧਿਤ ਕਰਨ ਵਾਲੇ ਸਾਰੇ ਸਰਕਾਰੀ ਹੁਕਮਨਾਮਿਆਂ ਦਾ ਸਰੋਤ ਹੈ।' },
      mapPoint: { x: '42%', y: '21%' },
      story: {
        en: 'In 1606, after the Mughal Empire imprisoned Guru Hargobind Sahib Ji\'s father (Guru Arjan Dev Ji, the 5th Guru), the 6th Guru responded boldly upon his release: the Sikh Panth would embrace both spiritual authority (Piri) AND worldly sovereignty (Miri). He built the Akal Takht — the "Eternal Throne" — directly opposite the Harmandir Sahib, and wore two swords simultaneously for the first time: Miri and Piri. The Akal Takht has since been the supreme seat of Sikh political and institutional authority. It issues hukamnamas (royal edicts) that are binding on all Sikhs worldwide.',
        pa: '1606 ਵਿੱਚ, ਜਦੋਂ ਮੁਗਲ ਸਾਮਰਾਜ ਨੇ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ (5ਵੇਂ ਗੁਰੂ) ਨੂੰ ਸ਼ਹੀਦ ਕੀਤਾ, ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ (6ਵੇਂ ਗੁਰੂ) ਨੇ ਜੇਲ੍ਹ ਤੋਂ ਰਿਹਾਈ ਤੋਂ ਬਾਅਦ ਦਲੇਰੀ ਨਾਲ ਅਕਾਲ ਤਖ਼ਤ ਦੀ ਉਸਾਰੀ ਕੀਤੀ।',
      },
      funFact: {
        en: 'The original Akal Takht was built intentionally taller than the Mughal Emperor\'s seat of power — a deliberate statement that sovereign Sikh authority recognizes no earthly superior. It was severely damaged during Operation Blue Star in 1984 and later rebuilt.',
        pa: 'ਮੂਲ ਅਕਾਲ ਤਖ਼ਤ ਜਾਣਬੁੱਝ ਕੇ ਮੁਗਲ ਬਾਦਸ਼ਾਹ ਦੀ ਸੱਤਾ ਦੀ ਸੀਟ ਨਾਲੋਂ ਉੱਚਾ ਬਣਾਇਆ ਗਿਆ ਸੀ। 1984 ਵਿੱਚ ਓਪਰੇਸ਼ਨ ਬਲੂ ਸਟਾਰ ਦੌਰਾਨ ਇਹ ਬੁਰੀ ਤਰ੍ਹਾਂ ਨੁਕਸਾਨਿਆ ਗਿਆ ਸੀ।',
      },
      jathedaar: {
        en: 'The current Jathedar of Sri Akal Takht Sahib is appointed by the SGPC (Shiromani Gurdwara Parbandhak Committee). The Jathedar is the highest temporal authority in Sikhism, responsible for issuing hukamnamas (official edicts) to the global Sikh Panth.',
        pa: 'ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ ਦੇ ਜਥੇਦਾਰ ਦੀ ਨਿਯੁਕਤੀ ਸ਼੍ਰੋਮਣੀ ਗੁਰਦੁਆਰਾ ਪ੍ਰਬੰਧਕ ਕਮੇਟੀ (SGPC) ਦੁਆਰਾ ਕੀਤੀ ਜਾਂਦੀ ਹੈ। ਜਥੇਦਾਰ ਸਿੱਖ ਧਰਮ ਵਿੱਚ ਸਭ ਤੋਂ ਉੱਚਾ ਸੰਸਾਰਕ ਅਧਿਕਾਰ ਹੈ।',
      },
      visitorsInfo: {
        en: 'Head covering and removal of footwear required. No tobacco, alcohol, or meat on premises. The Langar (community kitchen) is open to all, free of charge. Darshan hours run from early morning to late night. Photography is restricted in the Sachkhand (inner sanctum). Dress modestly and speak in hushed tones.',
        pa: 'ਸਿਰ ਢੱਕਣਾ ਅਤੇ ਜੁੱਤੇ ਉਤਾਰਨੇ ਜ਼ਰੂਰੀ ਹਨ। ਪਰਿਸਰ ਵਿੱਚ ਤੰਬਾਕੂ, ਸ਼ਰਾਬ ਜਾਂ ਮਾਸ ਦੀ ਮਨਾਹੀ ਹੈ। ਲੰਗਰ ਸਾਰਿਆਂ ਲਈ ਖੁੱਲ੍ਹਾ ਹੈ।',
      },
      yearDeclared: '1606',
    },
    {
      id: 'kesgarh_sahib',
      imagePath: '/assets/images/takht2.jpg',
      name: { en: 'Takht Sri Keshgarh Sahib', pa: 'ਤਖ਼ਤ ਸ੍ਰੀ ਕੇਸਗੜ੍ਹ ਸਾਹਿਬ' },
      location: { en: 'Anandpur Sahib, Punjab, India', pa: 'ਅਨੰਦਪੁਰ ਸਾਹਿਬ, ਪੰਜਾਬ, ਭਾਰਤ' },
      establishedBy: { en: 'Guru Gobind Singh Ji — 10th Guru (Vaisakhi 1699 CE)', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ — ਦਸਵੇਂ ਗੁਰੂ (ਵਿਸਾਖੀ 1699 ਈ.)' },
      significance: { en: 'The birthplace of the Khalsa Panth and site where Guru Gobind Singh Ji first prepared Amrit (Khande-di-Pahul) and initiated the Panj Pyare on Vaisakhi 1699.', pa: 'ਖ਼ਾਲਸਾ ਪੰਥ ਦਾ ਜਨਮ ਅਸਥਾਨ ਜਿੱਥੇ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਵਿਸਾਖੀ 1699 ਨੂੰ ਪਹਿਲੀ ਵਾਰ ਅੰਮ੍ਰਿਤ ਤਿਆਰ ਕੀਤਾ ਅਤੇ ਪੰਜ ਪਿਆਰਿਆਂ ਨੂੰ ਛਕਾਇਆ।' },
      details: { en: 'Keshgarh Sahib marks the public formation of a disciplined spiritual-political community that would forever change the course of Sikh and South Asian history.', pa: 'ਕੇਸਗੜ੍ਹ ਸਾਹਿਬ ਇੱਕ ਅਨੁਸ਼ਾਸਿਤ ਅਧਿਆਤਮਿਕ-ਰਾਜਨੀਤਿਕ ਸੰਗਤ ਦੀ ਜਨਤਕ ਰਚਨਾ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ ਜਿਸਨੇ ਸਿੱਖ ਅਤੇ ਦੱਖਣੀ ਏਸ਼ੀਆਈ ਇਤਿਹਾਸ ਦੀ ਦਿਸ਼ਾ ਬਦਲ ਦਿੱਤੀ।' },
      mapPoint: { x: '45%', y: '22%' },
      story: {
        en: 'On the Vaisakhi of 1699, Guru Gobind Singh Ji summoned thousands of Sikhs to the fortress-city of Anandpur Sahib. Addressing the vast congregation, he called for five volunteers willing to offer their heads. As each of the Panj Pyare stepped forward, the Guru took them behind a tent. Each time, he emerged with a bloodied sword — and the crowd feared the worst. What was truly happening was the preparation of Amrit — the sacred nectar of initiation — with Panj Banis recited and the double-edged khanda (sword) stirred into the iron bowl. The Guru initiated the five, gave them the name "Singh," and then asked them to initiate the Guru himself. Keshgarh Sahib also preserves the sacred weapons (shastars) of Guru Gobind Singh Ji.',
        pa: 'ਵਿਸਾਖੀ 1699 ਨੂੰ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਵਿੱਚ ਹਜ਼ਾਰਾਂ ਸਿੱਖਾਂ ਨੂੰ ਬੁਲਾਇਆ। ਉਨ੍ਹਾਂ ਨੇ ਪੰਜ ਸੇਵਾਦਾਰਾਂ ਦੀ ਮੰਗ ਕੀਤੀ ਜੋ ਆਪਣੇ ਸਿਰ ਦੇਣ ਲਈ ਤਿਆਰ ਹੋਣ। ਪੰਜ ਪਿਆਰੇ ਅੱਗੇ ਆਏ, ਅੰਮ੍ਰਿਤ ਤਿਆਰ ਕੀਤਾ ਗਿਆ, ਅਤੇ ਖ਼ਾਲਸਾ ਪੰਥ ਦੀ ਸਿਰਜਣਾ ਹੋਈ।',
      },
      funFact: {
        en: 'The sacred weapons (Guru-ka-shaster) of Guru Gobind Singh Ji are kept at Keshgarh Sahib and displayed for the sangat. Among them is the original Khanda used to prepare the very first Amrit on Vaisakhi 1699. Major celebrations including the festival of Hola Mohalla take place here annually.',
        pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਪਵਿੱਤਰ ਹਥਿਆਰ (ਗੁਰੂ-ਕਾ-ਸ਼ਸਤਰ) ਕੇਸਗੜ੍ਹ ਸਾਹਿਬ ਵਿੱਚ ਰੱਖੇ ਹੋਏ ਹਨ। ਹਰ ਸਾਲ ਇੱਥੇ ਹੋਲਾ ਮਹੱਲਾ ਦਾ ਤਿਉਹਾਰ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ।',
      },
      jathedaar: {
        en: 'The Jathedar of Takht Sri Keshgarh Sahib is one of the five Jathedars of the Panj Takht, responsible for the spiritual and administrative oversight of this most sacred site where the Khalsa was born.',
        pa: 'ਤਖ਼ਤ ਸ੍ਰੀ ਕੇਸਗੜ੍ਹ ਸਾਹਿਬ ਦੇ ਜਥੇਦਾਰ ਪੰਜ ਤਖ਼ਤਾਂ ਦੇ ਪੰਜ ਜਥੇਦਾਰਾਂ ਵਿੱਚੋਂ ਇੱਕ ਹਨ।',
      },
      visitorsInfo: {
        en: 'Head covering and removal of footwear required. The Shastarghar (weapons museum) displays the historic weapons of Guru Gobind Singh Ji and is a must-visit. The Hola Mohalla spring festival brings hundreds of thousands of Sikhs to Anandpur Sahib annually. Photography inside the main sanctum is restricted.',
        pa: 'ਸਿਰ ਢੱਕਣਾ ਅਤੇ ਜੁੱਤੇ ਉਤਾਰਨੇ ਜ਼ਰੂਰੀ ਹਨ। ਸ਼ਸਤਰਘਰ (ਹਥਿਆਰਾਂ ਦਾ ਅਜਾਇਬਘਰ) ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਇਤਿਹਾਸਕ ਹਥਿਆਰਾਂ ਨੂੰ ਦਿਖਾਉਂਦਾ ਹੈ।',
      },
      yearDeclared: '1699',
    },
    {
      id: 'damdama_sahib',
      imagePath: '/assets/images/takht3.jpg',
      name: { en: 'Takht Sri Damdama Sahib', pa: 'ਤਖ਼ਤ ਸ੍ਰੀ ਦਮਦਮਾ ਸਾਹਿਬ' },
      location: { en: 'Talwandi Sabo, Bathinda, Punjab, India', pa: 'ਤਲਵੰਡੀ ਸਾਬੋ, ਬਠਿੰਡਾ, ਪੰਜਾਬ, ਭਾਰਤ' },
      establishedBy: { en: 'Guru Gobind Singh Ji — 10th Guru (1705–06 CE)', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ — ਦਸਵੇਂ ਗੁਰੂ (1705–06 ਈ.)' },
      significance: { en: 'Called "Guru Ki Kashi" — the Guru\'s Varanasi — a supreme center of Sikh learning where Guru Gobind Singh Ji compiled the final and definitive version of Guru Granth Sahib Ji.', pa: '"ਗੁਰੂ ਕੀ ਕਾਸ਼ੀ" ਵਜੋਂ ਪ੍ਰਸਿੱਧ — ਸਿੱਖ ਵਿੱਦਿਆ ਦਾ ਸਰਵੋੱਚ ਕੇਂਦਰ ਜਿੱਥੇ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦਾ ਅੰਤਿਮ ਅਤੇ ਅਧਿਕਾਰਕ ਸੰਸਕਰਣ ਤਿਆਰ ਕੀਤਾ।' },
      details: { en: 'Damdama Sahib represents the sacred transmission, study, and disciplined preservation of Gurbani — the living word of the Guru Granth Sahib Ji.', pa: 'ਦਮਦਮਾ ਸਾਹਿਬ ਗੁਰਬਾਣੀ ਦੀ ਪਵਿੱਤਰ ਪਰੰਪਰਾ, ਅਧਿਐਨ ਅਤੇ ਅਨੁਸ਼ਾਸਿਤ ਸੰਭਾਲ ਦਾ ਪ੍ਰਤੀਕ ਹੈ।' },
      mapPoint: { x: '42%', y: '25%' },
      story: {
        en: 'After the devastating battles of 1704–05 — having lost his four sons, his mother Mata Gujri Ji, and countless companions — Guru Gobind Singh Ji arrived at Talwandi Sabo. Here, for approximately nine months, the Guru "breathed" (damdama = resting/breathing place) and gathered his scattered sangat. Most profoundly, he re-established the entire Guru Granth Sahib Ji from memory — reciting it to Bhai Mani Singh Ji who transcribed it — and added the bani of Guru Tegh Bahadur Ji (the 9th Guru, his own father). This final version, the Damdama Sahib Beed, became the definitive scripture of the Sikhs.',
        pa: 'ਵਿਨਾਸ਼ਕਾਰੀ ਲੜਾਈਆਂ ਤੋਂ ਬਾਅਦ — ਆਪਣੇ ਚਾਰੇ ਸਾਹਿਬਜ਼ਾਦਿਆਂ ਅਤੇ ਅਣਗਿਣਤ ਸਾਥੀਆਂ ਨੂੰ ਗੁਆ ਕੇ — ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਤਲਵੰਡੀ ਸਾਬੋ ਪਹੁੰਚੇ। ਇੱਥੇ ਉਨ੍ਹਾਂ ਨੇ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੀ ਅੰਤਮ ਬੀੜ ਤਿਆਰ ਕੀਤੀ।',
      },
      funFact: {
        en: 'Damdama Sahib is called "Guru Ki Kashi" (the Guru\'s Varanasi/Benares) — a title recognizing it as the supreme center of Sikh scholarship, equivalent in spiritual gravity to the ancient city of Varanasi in Hindu tradition. It was formally declared the 5th Takht on November 26, 1966.',
        pa: 'ਦਮਦਮਾ ਸਾਹਿਬ ਨੂੰ "ਗੁਰੂ ਕੀ ਕਾਸ਼ੀ" ਕਿਹਾ ਜਾਂਦਾ ਹੈ। ਇਸਨੂੰ 26 ਨਵੰਬਰ 1966 ਨੂੰ ਰਸਮੀ ਤੌਰ ਤੇ 5ਵਾਂ ਤਖ਼ਤ ਘੋਸ਼ਿਤ ਕੀਤਾ ਗਿਆ।',
      },
      jathedaar: {
        en: 'The Jathedar of Takht Sri Damdama Sahib oversees this Takht and its tradition of scholarship. The site is especially revered by students and scholars of Gurbani from around the world.',
        pa: 'ਤਖ਼ਤ ਸ੍ਰੀ ਦਮਦਮਾ ਸਾਹਿਬ ਦੇ ਜਥੇਦਾਰ ਇਸ ਤਖ਼ਤ ਅਤੇ ਵਿਦਵਤਾ ਦੀ ਪਰੰਪਰਾ ਦੀ ਨਿਗਰਾਨੀ ਕਰਦੇ ਹਨ।',
      },
      visitorsInfo: {
        en: 'Head covering and removal of footwear required. The Takht has significant historical relics associated with Guru Gobind Singh Ji\'s sojourn. It is especially revered by Gurbani scholars. The site was formally recognized as the 5th Takht on November 26, 1966. Photography policies vary by location within the complex.',
        pa: 'ਸਿਰ ਢੱਕਣਾ ਅਤੇ ਜੁੱਤੇ ਉਤਾਰਨੇ ਜ਼ਰੂਰੀ ਹਨ। ਇਸ ਤਖ਼ਤ ਨੂੰ 26 ਨਵੰਬਰ 1966 ਨੂੰ ਰਸਮੀ ਤੌਰ ਤੇ ਮਾਨਤਾ ਮਿਲੀ।',
      },
      yearDeclared: '1966 (formally declared)',
    },
    {
      id: 'patna_sahib',
      imagePath: '/assets/images/takht4.jpg',
      name: { en: 'Takht Sri Patna Sahib', pa: 'ਤਖ਼ਤ ਸ੍ਰੀ ਪਟਨਾ ਸਾਹਿਬ' },
      location: { en: 'Patna, Bihar, India', pa: 'ਪਟਨਾ, ਬਿਹਾਰ, ਭਾਰਤ' },
      establishedBy: { en: 'Birthplace of Guru Gobind Singh Ji (December 22, 1666)', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦਾ ਪ੍ਰਕਾਸ਼ ਅਸਥਾਨ (22 ਦਸੰਬਰ, 1666)' },
      significance: { en: 'Marks the birthplace of Guru Gobind Singh Ji, where Gobind Rai (his birth name) spent his first six years before moving to Anandpur Sahib, and where sacred childhood relics are preserved.', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਜਨਮ ਅਸਥਾਨ ਦੀ ਨਿਸ਼ਾਨਦੇਹੀ ਕਰਦਾ ਹੈ, ਜਿੱਥੇ ਗੋਬਿੰਦ ਰਾਏ (ਉਨ੍ਹਾਂ ਦਾ ਜਨਮ ਨਾਮ) ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਜਾਣ ਤੋਂ ਪਹਿਲਾਂ ਆਪਣੇ ਪਹਿਲੇ ਛੇ ਸਾਲ ਬਿਤਾਏ।' },
      details: { en: 'Patna Sahib connects the story of the Khalsa to Bihar — demonstrating the full geographic sweep of Sikh history from the east to the northwest of the subcontinent.', pa: 'ਪਟਨਾ ਸਾਹਿਬ ਖ਼ਾਲਸੇ ਦੀ ਕਥਾ ਨੂੰ ਬਿਹਾਰ ਨਾਲ ਜੋੜਦਾ ਹੈ — ਉਪਮਹਾਂਦੀਪ ਦੇ ਪੂਰਬ ਤੋਂ ਉੱਤਰ-ਪੱਛਮ ਤੱਕ ਸਿੱਖ ਇਤਿਹਾਸ ਦੀ ਭੂਗੋਲਿਕ ਵਿਸ਼ਾਲਤਾ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ।' },
      mapPoint: { x: '63%', y: '34%' },
      story: {
        en: 'In December 1666, Guru Tegh Bahadur Ji\'s wife, Mata Gujri Ji, gave birth to a son in Patna, Bihar — the child who would become Guru Gobind Singh Ji, the 10th Guru. His birth name was Gobind Rai. He spent his first approximately six years in Patna, surrounded by the devoted Sikh sangat of Bihar. The sacred site where the Guru was born is now preserved as a Takht. Precious relics of the Guru\'s childhood are kept here — including his iron arrow (baan), sandals (kharavan), and the cradle (palana) in which the young Guru rested.',
        pa: 'ਦਸੰਬਰ 1666 ਵਿੱਚ, ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ ਦੀ ਪਤਨੀ, ਮਾਤਾ ਗੁਜਰੀ ਜੀ ਨੇ ਪਟਨਾ, ਬਿਹਾਰ ਵਿੱਚ ਇੱਕ ਪੁੱਤਰ ਨੂੰ ਜਨਮ ਦਿੱਤਾ — ਜੋ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਬਣੇ। ਉਨ੍ਹਾਂ ਦਾ ਜਨਮ ਨਾਮ ਗੋਬਿੰਦ ਰਾਏ ਸੀ।',
      },
      funFact: {
        en: 'Among the relics preserved at Patna Sahib is the young Guru\'s iron arrow (baan) — remarkable because even as a child, Gobind Rai was trained in the warrior arts. The Guru\'s childhood friends in Patna are said to have playfully called him their "Raja" (king).',
        pa: 'ਪਟਨਾ ਸਾਹਿਬ ਵਿੱਚ ਸੁਰੱਖਿਅਤ ਯਾਦਗਾਰੀ ਵਸਤੂਆਂ ਵਿੱਚ ਨੌਜਵਾਨ ਗੁਰੂ ਦਾ ਲੋਹੇ ਦਾ ਤੀਰ (ਬਾਣ) ਵੀ ਹੈ — ਇਹ ਦਰਸਾਉਂਦਾ ਹੈ ਕਿ ਬਚਪਨ ਤੋਂ ਹੀ ਗੋਬਿੰਦ ਰਾਏ ਨੂੰ ਯੋਧੇ ਕਲਾਵਾਂ ਵਿੱਚ ਸਿੱਖਿਅਤ ਕੀਤਾ ਗਿਆ ਸੀ।',
      },
      jathedaar: {
        en: 'The Jathedar of Takht Sri Patna Sahib (also called Harmandir Ji, Patna) is appointed to preserve and serve this birth-site of the 10th Guru, maintaining the sacred relics and overseeing Sikh religious observances in Bihar.',
        pa: 'ਤਖ਼ਤ ਸ੍ਰੀ ਪਟਨਾ ਸਾਹਿਬ ਦੇ ਜਥੇਦਾਰ ਦੀ ਨਿਯੁਕਤੀ 10ਵੇਂ ਗੁਰੂ ਦੇ ਜਨਮ ਅਸਥਾਨ ਦੀ ਸੰਭਾਲ ਅਤੇ ਸੇਵਾ ਲਈ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।',
      },
      visitorsInfo: {
        en: 'Head covering and removal of footwear required. Sacred childhood relics of Guru Gobind Singh Ji are preserved in the museum here. The complex is located in Patna City (Patna Sahib area). Pilgrims from across India visit for Guru Gobind Singh Ji\'s Prakash Utsav (birthday celebration) in December–January. Behave reverently and dress modestly.',
        pa: 'ਸਿਰ ਢੱਕਣਾ ਅਤੇ ਜੁੱਤੇ ਉਤਾਰਨੇ ਜ਼ਰੂਰੀ ਹਨ। ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਬਚਪਨ ਦੀਆਂ ਪਵਿੱਤਰ ਯਾਦਗਾਰੀ ਵਸਤੂਆਂ ਇੱਥੇ ਸੁਰੱਖਿਅਤ ਹਨ।',
      },
      yearDeclared: '1666 (birthplace recognized)',
    },
    {
      id: 'hazur_sahib',
      imagePath: '/assets/images/takht5.jpg',
      name: { en: 'Takht Sri Hazur Sahib', pa: 'ਤਖ਼ਤ ਸ੍ਰੀ ਹਜ਼ੂਰ ਸਾਹਿਬ' },
      location: { en: 'Nanded, Maharashtra, India', pa: 'ਨਾਂਦੇੜ, ਮਹਾਰਾਸ਼ਟਰ, ਭਾਰਤ' },
      establishedBy: { en: 'Site of Guru Gobind Singh Ji\'s jyoti jot (1708 CE); Gurdwara built by Maharaja Ranjit Singh (1832–39)', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੀ ਜੋਤੀ ਜੋਤ ਦਾ ਅਸਥਾਨ (1708 ਈ.); ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦੁਆਰਾ ਗੁਰਦੁਆਰਾ ਉਸਾਰਿਆ (1832–39)' },
      significance: { en: 'The sacred site where Guru Gobind Singh Ji spent his final days, declared Guru Granth Sahib Ji as the eternal living Guru, and attained jyoti jot in October 1708.', pa: 'ਉਹ ਪਵਿੱਤਰ ਅਸਥਾਨ ਜਿੱਥੇ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਆਪਣੇ ਅੰਤਿਮ ਦਿਨ ਬਿਤਾਏ, ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਨੂੰ ਸਦੀਵੀ ਜੀਵੰਤ ਗੁਰੂ ਘੋਸ਼ਿਤ ਕੀਤਾ ਅਤੇ ਅਕਤੂਬਰ 1708 ਵਿੱਚ ਜੋਤੀ ਜੋਤ ਸਮਾਏ।' },
      details: { en: 'Hazur Sahib carries the profound sense of completion — where the line of human Gurus ended and the eternal Guru Granth Sahib Ji was proclaimed as the living, eternal Guru of the Sikhs forever.', pa: 'ਹਜ਼ੂਰ ਸਾਹਿਬ ਪੂਰਨਤਾ ਦੀ ਗਹਿਰੀ ਭਾਵਨਾ ਰੱਖਦਾ ਹੈ — ਜਿੱਥੇ ਮਨੁੱਖੀ ਗੁਰੂਆਂ ਦੀ ਲੜੀ ਸਮਾਪਤ ਹੋਈ ਅਤੇ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਨੂੰ ਸਿੱਖਾਂ ਦੇ ਸਦੀਵੀ ਜੀਵੰਤ ਗੁਰੂ ਵਜੋਂ ਘੋਸ਼ਿਤ ਕੀਤਾ ਗਿਆ।' },
      mapPoint: { x: '47%', y: '47%' },
      story: {
        en: 'In October 1708, Guru Gobind Singh Ji was at Nanded, Maharashtra, when he was fatally wounded by an assailant. As his final days drew near, the Guru gathered the Sikh sangat and, in a ceremony of profound finality, declared that after him, the Sri Guru Granth Sahib Ji would be the eternal, living Guru of the Sikhs: "Sab Sikhan ko hukam hai, Guru Maniyo Granth." The golden-domed Hazur Sahib — also called Sachkhand ("Realm of Truth") — was later built on this sacred site by Maharaja Ranjit Singh between 1832 and 1839.',
        pa: 'ਅਕਤੂਬਰ 1708 ਵਿੱਚ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨਾਂਦੇੜ ਵਿੱਚ ਸਨ। ਆਪਣੇ ਅੰਤਿਮ ਦਿਨਾਂ ਵਿੱਚ, ਗੁਰੂ ਜੀ ਨੇ ਸੰਗਤ ਨੂੰ ਇਕੱਠਾ ਕੀਤਾ ਅਤੇ ਘੋਸ਼ਣਾ ਕੀਤੀ: "ਸਬ ਸਿਖਨ ਕੋ ਹੁਕਮ ਹੈ, ਗੁਰੂ ਮਾਨਿਓ ਗ੍ਰੰਥ।"',
      },
      funFact: {
        en: 'Maharaja Ranjit Singh, the "Lion of Punjab," commissioned the construction of the current golden-domed structure of Hazur Sahib between 1832 and 1839, fulfilling a long-held Sikh aspiration to honor this most sacred site. "Hazur" itself means "in the presence of the revered one."',
        pa: 'ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ, "ਸ਼ੇਰ-ਏ-ਪੰਜਾਬ," ਨੇ 1832 ਤੋਂ 1839 ਦੇ ਵਿਚਕਾਰ ਹਜ਼ੂਰ ਸਾਹਿਬ ਦੀ ਮੌਜੂਦਾ ਸੁਨਹਿਰੀ-ਗੁੰਬਦ ਵਾਲੀ ਇਮਾਰਤ ਬਣਾਈ।',
      },
      jathedaar: {
        en: 'The Jathedar of Takht Sri Hazur Sahib (Sachkhand Sri Hazur Abchal Nagar Sahib) is appointed by the Nanded Sahib Sikh Gurdwara Sachkhand Sahib Board. Kirtan is performed continuously 24 hours at this sacred site.',
        pa: 'ਤਖ਼ਤ ਸ੍ਰੀ ਹਜ਼ੂਰ ਸਾਹਿਬ (ਸਚਖੰਡ ਸ੍ਰੀ ਹਜ਼ੂਰ ਅਬਚਲ ਨਗਰ ਸਾਹਿਬ) ਦੇ ਜਥੇਦਾਰ ਦੀ ਨਿਯੁਕਤੀ ਨਾਂਦੇੜ ਸਾਹਿਬ ਸਿੱਖ ਗੁਰਦੁਆਰਾ ਸਚਖੰਡ ਸਾਹਿਬ ਬੋਰਡ ਦੁਆਰਾ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।',
      },
      visitorsInfo: {
        en: 'Non-Sikhs may enter the Gurdwara after covering their head and removing footwear. The Sachkhand (innermost sanctum) has additional access restrictions. Continuous kirtan is performed 24 hours. Multiple shrines within the complex commemorate specific moments in Guru Gobind Singh Ji\'s final days. Dress modestly and behave with deep reverence.',
        pa: 'ਗੈਰ-ਸਿੱਖ ਸਿਰ ਢੱਕ ਕੇ ਅਤੇ ਜੁੱਤੇ ਉਤਾਰ ਕੇ ਗੁਰਦੁਆਰੇ ਵਿੱਚ ਦਾਖਲ ਹੋ ਸਕਦੇ ਹਨ। ਸਚਖੰਡ (ਅੰਦਰੂਨੀ ਪਵਿੱਤਰ ਅਸਥਾਨ) ਵਿੱਚ ਵਾਧੂ ਪਾਬੰਦੀਆਂ ਹਨ। ਇੱਥੇ 24 ਘੰਟੇ ਕੀਰਤਨ ਹੁੰਦਾ ਹੈ।',
      },
      yearDeclared: '1708',
    },
  ],
  quiz: {
    intro: { en: 'Quick, polished recall rounds help visitors reinforce names, places, and significance before moving on.', pa: 'ਛੋਟੇ ਨਿੱਖਰੇ ਯਾਦਗਾਰੀ ਰਾਊਂਡ ਨਾਮਾਂ, ਥਾਵਾਂ ਅਤੇ ਮਹੱਤਵ ਨੂੰ ਅੱਗੇ ਵਧਣ ਤੋਂ ਪਹਿਲਾਂ ਮਜ਼ਬੂਤ ਕਰਦੇ ਹਨ।' },
    questions: [
      {
        prompt: { en: 'Who was the first Pyara to step forward on Vaisakhi 1699?', pa: 'ਵਿਸਾਖੀ 1699 ਵਿੱਚ ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਕਿਹੜੇ ਪਿਆਰੇ ਅੱਗੇ ਆਏ?' },
        options: [
          { en: 'Bhai Dharam Singh Ji', pa: 'ਭਾਈ ਧਰਮ ਸਿੰਘ ਜੀ' },
          { en: 'Bhai Daya Singh Ji', pa: 'ਭਾਈ ਦਯਾ ਸਿੰਘ ਜੀ' },
          { en: 'Bhai Himmat Singh Ji', pa: 'ਭਾਈ ਹਿੰਮਤ ਸਿੰਘ ਜੀ' },
        ],
        correctIndex: 1,
        insight: { en: 'Bhai Daya Singh Ji is remembered as the first volunteer in the founding moment of the Khalsa.', pa: 'ਭਾਈ ਦਯਾ ਸਿੰਘ ਜੀ ਨੂੰ ਖ਼ਾਲਸੇ ਦੀ ਸਥਾਪਨਾ ਦੇ ਉਸ ਪਲ ਵਿੱਚ ਪਹਿਲੇ ਸੇਵਾਦਾਰ ਵਜੋਂ ਯਾਦ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।' },
      },
      {
        prompt: { en: 'Which Takht is often called Guru Ki Kashi?', pa: 'ਕਿਹੜਾ ਤਖ਼ਤ ਅਕਸਰ ਗੁਰੂ ਕੀ ਕਾਸ਼ੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?' },
        options: [
          { en: 'Takht Sri Damdama Sahib', pa: 'ਤਖ਼ਤ ਸ੍ਰੀ ਦਮਦਮਾ ਸਾਹਿਬ' },
          { en: 'Sri Akal Takht Sahib', pa: 'ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ' },
          { en: 'Takht Sri Patna Sahib', pa: 'ਤਖ਼ਤ ਸ੍ਰੀ ਪਟਨਾ ਸਾਹਿਬ' },
        ],
        correctIndex: 0,
        insight: { en: 'Damdama Sahib is closely associated with learning, study, and scriptural recension.', pa: 'ਦਮਦਮਾ ਸਾਹਿਬ ਵਿੱਦਿਆ, ਅਧਿਐਨ ਅਤੇ ਧਾਰਮਿਕ ਗ੍ਰੰਥ ਦੀ ਸੰਪਾਦਨਾ ਨਾਲ ਘਣੀ ਤਰ੍ਹਾਂ ਜੁੜਿਆ ਹੈ।' },
      },
      {
        prompt: { en: 'Which Panj Pyara is associated with Bidar in Karnataka?', pa: 'ਕਿਹੜੇ ਪੰਜ ਪਿਆਰੇ ਦਾ ਸੰਬੰਧ ਕਰਨਾਟਕ ਦੇ ਬੀਦਰ ਨਾਲ ਹੈ?' },
        options: [
          { en: 'Bhai Sahib Singh Ji', pa: 'ਭਾਈ ਸਾਹਿਬ ਸਿੰਘ ਜੀ' },
          { en: 'Bhai Mohkam Singh Ji', pa: 'ਭਾਈ ਮੋਹਕਮ ਸਿੰਘ ਜੀ' },
          { en: 'Bhai Dharam Singh Ji', pa: 'ਭਾਈ ਧਰਮ ਸਿੰਘ ਜੀ' },
        ],
        correctIndex: 0,
        insight: { en: 'Bhai Sahib Singh Ji represents the south and helps embody the Khalsa’s breaking of caste boundaries.', pa: 'ਭਾਈ ਸਾਹਿਬ ਸਿੰਘ ਜੀ ਦੱਖਣ ਦੀ ਪ੍ਰਤੀਨਿਧਤਾ ਕਰਦੇ ਹਨ ਅਤੇ ਖ਼ਾਲਸੇ ਵੱਲੋਂ ਜਾਤੀ ਬੰਧਨਾਂ ਦੇ ਟੁੱਟਣ ਨੂੰ ਦਰਸਾਉਂਦੇ ਹਨ।' },
      },
      {
        prompt: { en: 'Which Takht is connected with Guru Gobind Singh Ji’s final days?', pa: 'ਕਿਹੜਾ ਤਖ਼ਤ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਅੰਤਿਮ ਦਿਨਾਂ ਨਾਲ ਜੁੜਿਆ ਹੋਇਆ ਹੈ?' },
        options: [
          { en: 'Takht Sri Hazur Sahib', pa: 'ਤਖ਼ਤ ਸ੍ਰੀ ਹਜ਼ੂਰ ਸਾਹਿਬ' },
          { en: 'Takht Sri Keshgarh Sahib', pa: 'ਤਖ਼ਤ ਸ੍ਰੀ ਕੇਸਗੜ੍ਹ ਸਾਹਿਬ' },
          { en: 'Takht Sri Patna Sahib', pa: 'ਤਖ਼ਤ ਸ੍ਰੀ ਪਟਨਾ ਸਾਹਿਬ' },
        ],
        correctIndex: 0,
        insight: { en: 'Hazur Sahib is remembered for the Guru’s final days and for continuity through the Guru Granth Sahib.', pa: 'ਹਜ਼ੂਰ ਸਾਹਿਬ ਗੁਰੂ ਦੇ ਅੰਤਿਮ ਦਿਨਾਂ ਅਤੇ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਰਾਹੀਂ ਨਿਰੰਤਰਤਾ ਲਈ ਯਾਦ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।' },
      },
      {
        prompt: { en: 'What does Sri Akal Takht Sahib especially represent in this display?', pa: 'ਇਸ ਪ੍ਰਦਰਸ਼ਨੀ ਵਿੱਚ ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ ਖ਼ਾਸ ਤੌਰ ਤੇ ਕੀ ਦਰਸਾਉਂਦਾ ਹੈ?' },
        options: [
          { en: 'Scriptural learning only', pa: 'ਕੇਵਲ ਸ਼ਾਸਤਰੀ ਅਧਿਐਨ' },
          { en: 'Temporal authority and miri-piri', pa: 'ਸੰਸਾਰਕ ਅਧਿਕਾਰ ਅਤੇ ਮੀਰੀ-ਪੀਰੀ' },
          { en: 'The birthplace of Guru Gobind Singh Ji', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦਾ ਪ੍ਰਕਾਸ਼ ਅਸਥਾਨ' },
        ],
        correctIndex: 1,
        insight: { en: 'The display frames Akal Takht through its public authority and its relation to miri-piri.', pa: 'ਇਹ ਪ੍ਰਦਰਸ਼ਨੀ ਅਕਾਲ ਤਖ਼ਤ ਨੂੰ ਇਸ ਦੇ ਲੋਕ ਅਧਿਕਾਰ ਅਤੇ ਮੀਰੀ-ਪੀਰੀ ਨਾਲ ਸਬੰਧ ਰਾਹੀਂ ਦਰਸਾਉਂਦੀ ਹੈ।' },
      },
    ],
  },
};

export default displayContent;
