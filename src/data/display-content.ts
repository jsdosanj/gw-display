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
    learn: {
      title: { en: 'Learn About Sikhi', pa: 'ਸਿੱਖੀ ਬਾਰੇ ਜਾਣੋ' },
      subtitle: { en: 'Gurdwara etiquette, the Gurus, the Kakaars, and verified Gurbani', pa: 'ਗੁਰਦੁਆਰਾ ਮਰਯਾਦਾ, ਗੁਰੂ ਸਾਹਿਬਾਨ, ਕਕਾਰ ਅਤੇ ਪ੍ਰਮਾਣਿਤ ਗੁਰਬਾਣੀ' },
    },
    about: {
      title: { en: 'About', pa: 'ਸਾਡੇ ਬਾਰੇ' },
      subtitle: { en: 'Collaboration, quality standards, and project direction', pa: 'ਸਹਿਯੋਗ, ਗੁਣਵੱਤਾ ਮਾਪਦੰਡ ਅਤੇ ਪ੍ਰੋਜੈਕਟ ਦੀ ਦਿਸ਼ਾ' },
    },
    resources: {
      title: { en: 'Resources', pa: 'ਸਰੋਤ' },
      subtitle: { en: 'Trusted Sikh learning platforms and partner sites', pa: 'ਭਰੋਸੇਯੋਗ ਸਿੱਖ ਸਿਖਲਾਈ ਪਲੇਟਫਾਰਮ ਅਤੇ ਭਾਗੀਦਾਰ ਸਾਈਟਾਂ' },
    },
    leaflets: {
      title: { en: 'Leaflets', pa: 'ਲੀਫਲੈਟ' },
      subtitle: { en: 'Download and continue learning beyond the kiosk', pa: 'ਡਾਊਨਲੋਡ ਕਰੋ ਅਤੇ ਕਿਓਸਕ ਤੋਂ ਬਾਅਦ ਵੀ ਸਿੱਖਣਾ ਜਾਰੀ ਰੱਖੋ' },
    },
  },
  ui: {
    experienceLabel: { en: 'Premium Interactive Display', pa: 'ਪ੍ਰੀਮੀਅਮ ਇੰਟਰਐਕਟਿਵ ਪ੍ਰਦਰਸ਼ਨੀ' },
    attractEyebrow: { en: 'Immersive Kiosk Experience', pa: 'ਡੁੱਬਕੀਵਾਂ ਕਿਓਸਕ ਅਨੁਭਵ' },
    attractTitle: { en: 'Panj Pyare & Panj Takht', pa: 'ਪੰਜ ਪਿਆਰੇ ਅਤੇ ਪੰਜ ਤਖ਼ਤ', hi: 'पंज प्यारे और पंज तख्त', es: 'Los Cinco Amados y los Cinco Tronos', ar: 'خمسة المحبوبين وخمسة العروش' },
    attractSubtitle: { en: 'A ceremonial digital doorway into memory, identity, and Sikh institutional history.', pa: 'ਸਮ੍ਰਿਤੀ, ਪਹਿਚਾਣ ਅਤੇ ਸਿੱਖ ਸੰਸਥਾਗਤ ਇਤਿਹਾਸ ਵੱਲ ਇਕ ਰਸਮੀ ਡਿਜ਼ਿਟਲ ਦਰਵਾਜ਼ਾ।', hi: 'स्मृति, पहचान और सिख संस्थागत इतिहास की ओर एक औपचारिक डिजिटल द्वार।', es: 'Una puerta digital ceremonial hacia la memoria, la identidad y la historia institucional sij.', ar: 'بوابة رقمية احتفالية إلى الذاكرة والهوية والتاريخ المؤسسي السيخي.' },
    attractInstruction: { en: 'Touch anywhere to begin the guided display.', pa: 'ਮਾਰਗਦਰਸ਼ਿਤ ਪ੍ਰਦਰਸ਼ਨੀ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਕਿਤੇ ਵੀ ਛੂਹੋ।', hi: 'निर्देशित प्रदर्शन शुरू करने के लिए कहीं भी स्पर्श करें।', es: 'Toca en cualquier lugar para comenzar la presentación guiada.', ar: 'المس في أي مكان لبدء العرض الموجّه.' },
    attractButton: { en: 'Begin Experience', pa: 'ਅਨੁਭਵ ਸ਼ੁਰੂ ਕਰੋ', hi: 'अनुभव शुरू करें', es: 'Comenzar experiencia', ar: 'ابدأ التجربة' },
    nav: {
      home: { en: 'Home', pa: 'ਮੁੱਖ', hi: 'होम', es: 'Inicio', ar: 'الرئيسية' },
      pyare: { en: '5 Pyare', pa: '੫ ਪਿਆਰੇ', hi: '5 प्यारे', es: '5 Amados', ar: '٥ محبوبين' },
      takhts: { en: '5 Takht', pa: '੫ ਤਖ਼ਤ', hi: '5 तख्त', es: '5 Tronos', ar: '٥ عروش' },
      quiz: { en: 'Quiz', pa: 'ਕਵਿਜ਼', hi: 'प्रश्नोत्तरी', es: 'Cuestionario', ar: 'اختبار' },
      learn: { en: 'Learn Sikhi', pa: 'ਸਿੱਖੀ ਸਿੱਖੋ', hi: 'सिखी सीखें', es: 'Aprende Sikhi', ar: 'تعلّم السيخية' },
      about: { en: 'About', pa: 'ਬਾਰੇ', hi: 'परिचय', es: 'Acerca de', ar: 'حول' },
      resources: { en: 'Resources', pa: 'ਸਰੋਤ', hi: 'संसाधन', es: 'Recursos', ar: 'موارد' },
      leaflets: { en: 'Leaflets', pa: 'ਲੀਫਲੈਟ', hi: 'पत्रक', es: 'Folletos', ar: 'نشرات' },
    },
    languageLabel: {
      en: 'Language',
      pa: 'ਭਾਸ਼ਾ',
    },
    languages: {
      en: 'English',
      pa: 'ਪੰਜਾਬੀ',
      hi: 'हिन्दी',
      es: 'Español',
      ar: 'العربية',
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
      aiTranslationDisclaimer: { en: 'Translations to Hindi, Spanish, and Arabic are AI-generated and pending human review.', pa: 'ਹਿੰਦੀ, ਸਪੈਨਿਸ਼ ਅਤੇ ਅਰਬੀ ਅਨੁਵਾਦ ਏਆਈ ਦੁਆਰਾ ਤਿਆਰ ਕੀਤੇ ਗਏ ਹਨ ਅਤੇ ਮਨੁੱਖੀ ਸਮੀਖਿਆ ਅਧੀਨ ਹਨ।', hi: 'हिंदी, स्पेनिश और अरबी अनुवाद AI द्वारा तैयार किए गए हैं और मानव समीक्षा के अधीन हैं।', es: 'Las traducciones al hindi, español y árabe son generadas por IA y están pendientes de revisión humana.', ar: 'الترجمات إلى الهندية والإسبانية والعربية مولّدة بالذكاء الاصطناعي وقيد مراجعة بشرية.' },
      openInBrowser: { en: 'Open in browser', pa: 'ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਖੋਲ੍ਹੋ' },
      visitSite: { en: 'Visit site', pa: 'ਸਾਈਟ ਵੇਖੋ' },
      takhtsIntro: { en: 'The Panj Takht (Five Thrones) are the five most sacred seats of Sikh institutional authority. Each Takht holds supreme significance in the Sikh world — governing doctrine, issuing binding decrees (hukamnamas), and marking pivotal moments in Sikh history. They span the geography of South Asia, from Punjab to Bihar, Deccan to Karnataka.', pa: 'ਪੰਜ ਤਖ਼ਤ ਸਿੱਖ ਸੰਸਥਾਗਤ ਅਧਿਕਾਰ ਦੇ ਸਭ ਤੋਂ ਪਵਿੱਤਰ ਪੰਜ ਅਸਥਾਨ ਹਨ। ਹਰ ਤਖ਼ਤ ਸਿੱਖ ਜਗਤ ਵਿੱਚ ਸਰਵੋੱਚ ਮਹੱਤਵ ਰੱਖਦਾ ਹੈ।' },
      pyareIntro: { en: 'On Vaisakhi of 1699, Guru Gobind Singh Ji asked for five volunteers willing to give their heads for the faith. Five men stepped forward from different corners of India — different castes, different occupations, different lives — and together became the Panj Pyare: the Five Beloved Ones. Guru Gobind Singh Ji deliberately chose men from five distinct caste backgrounds and five different regions of India — a Khatri, a Jat, a Jheevar, a Chhimba, and a Nai — as a decisive act to dissolve caste distinction (ਜਾਤ-ਪਾਤ) within the Khalsa and declare that all souls stand equal before Waheguru. They are the founding exemplars of the Khalsa, the embodiment of courage, equality, and selfless devotion. Touch each pin on the map to learn where they came from, who they were, and the lives they led.', pa: '1699 ਦੀ ਵਿਸਾਖੀ ਨੂੰ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਧਰਮ ਲਈ ਆਪਣਾ ਸਿਰ ਦੇਣ ਲਈ ਤਿਆਰ ਪੰਜ ਸੇਵਾਦਾਰਾਂ ਦੀ ਮੰਗ ਕੀਤੀ। ਭਾਰਤ ਦੇ ਵੱਖ-ਵੱਖ ਕੋਨਿਆਂ ਤੋਂ ਪੰਜ ਵਿਅਕਤੀ ਅੱਗੇ ਆਏ ਅਤੇ ਪੰਜ ਪਿਆਰੇ ਬਣੇ। ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਜਾਣਬੁੱਝ ਕੇ ਪੰਜ ਵੱਖ-ਵੱਖ ਜਾਤਾਂ ਅਤੇ ਖੇਤਰਾਂ ਤੋਂ ਪੁਰਸ਼ ਚੁਣੇ — ਖ਼ਾਲਸੇ ਅੰਦਰ ਜਾਤ-ਪਾਤ ਨੂੰ ਖ਼ਤਮ ਕਰਨ ਅਤੇ ਇਹ ਐਲਾਨ ਕਰਨ ਲਈ ਕਿ ਵਾਹਿਗੁਰੂ ਅੱਗੇ ਸਾਰੀਆਂ ਰੂਹਾਂ ਬਰਾਬਰ ਹਨ।' },
      selectOnMap: { en: 'Select a location on the map to begin', pa: 'ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਨਕਸ਼ੇ ਤੇ ਇੱਕ ਸਥਾਨ ਚੁਣੋ' },
      learnMore: { en: 'Learn more →', pa: 'ਹੋਰ ਜਾਣੋ →' },
      beforeKhalsa: { en: 'Before the Khalsa', pa: 'ਖ਼ਾਲਸੇ ਤੋਂ ਪਹਿਲਾਂ' },
      afterKhalsa: { en: 'After initiation', pa: 'ਅੰਮ੍ਰਿਤ ਛਕਣ ਤੋਂ ਬਾਅਦ' },
      timelineTitle: { en: 'Key Events Timeline', pa: 'ਮੁੱਖ ਘਟਨਾਵਾਂ ਦੀ ਸਮਾਂ-ਰੇਖਾ' },
      faqTitle: { en: 'Frequently Asked Questions', pa: 'ਅਕਸਰ ਪੁੱਛੇ ਜਾਂਦੇ ਸਵਾਲ' },
      leafletsHelper: { en: 'Access the full Basics of Sikhi leaflet library:', pa: 'ਬੇਸਿਕਸ ਆਫ ਸਿੱਖੀ ਲੀਫਲੈਟ ਲਾਇਬ੍ਰੇਰੀ ਤੱਕ ਪਹੁੰਚ ਕਰੋ:' },
      recapTitle: { en: 'What you learned', pa: 'ਤੁਸੀਂ ਕੀ ਸਿੱਖਿਆ' },
      collaborationWith: { en: 'Built in Collaboration With', pa: 'ਸਾਂਝੇ ਤੌਰ ਤੇ ਬਣਾਇਆ' },
      livePreviews: { en: 'Live Previews', pa: 'ਲਾਈਵ ਝਲਕ' },
      scanToVisit: { en: 'Scan to visit', pa: 'ਵੇਖਣ ਲਈ ਸਕੈਨ ਕਰੋ' },
      lessons: { en: 'Lessons from their life', pa: 'ਜੀਵਨ ਤੋਂ ਸਿੱਖਿਆ' },
      language: { en: 'Language', pa: 'ਭਾਸ਼ਾ' },
      qualities: { en: 'Qualities', pa: 'ਗੁਣ' },
      gurusVisited: { en: 'Gurus associated with this site', pa: 'ਇਸ ਅਸਥਾਨ ਨਾਲ ਸੰਬੰਧਿਤ ਗੁਰੂ ਸਾਹਿਬਾਨ' },
      areaHistory: { en: 'History of the surrounding area', pa: 'ਆਲੇ-ਦੁਆਲੇ ਦੇ ਇਲਾਕੇ ਦਾ ਇਤਿਹਾਸ' },
      localImpact: { en: 'Impact on the local area', pa: 'ਸਥਾਨਕ ਇਲਾਕੇ ਤੇ ਪ੍ਰਭਾਵ' },
      embedUnavailable: { en: 'This site cannot be embedded here — view it in your browser instead.', pa: 'ਇਹ ਸਾਈਟ ਇੱਥੇ ਏਮਬੈਡ ਨਹੀਂ ਹੋ ਸਕਦੀ — ਇਸਨੂੰ ਆਪਣੇ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਵੇਖੋ।' },
      ttsListen: { en: 'Listen', pa: 'ਸੁਣੋ' },
      ttsNoPunjabiVoice: { en: 'No Punjabi voice is available on this device — showing text only.', pa: 'ਇਸ ਡਿਵਾਈਸ ਤੇ ਪੰਜਾਬੀ ਆਵਾਜ਼ ਉਪਲਬਧ ਨਹੀਂ ਹੈ — ਸਿਰਫ਼ ਪਾਠ ਦਿਖਾਇਆ ਜਾ ਰਿਹਾ ਹੈ।' },
      journeyProgress: { en: 'Your journey', pa: 'ਤੁਹਾਡੀ ਯਾਤਰਾ' },
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
    collaborationBanner: {
      en: 'Collaboratively created by the Mata Gujri Ji Group from San Jose Gurmat Camp (July 2026).',
      pa: 'ਸੈਨ ਹੋਜੇ ਗੁਰਮਤ ਕੈਂਪ (ਜੁਲਾਈ 2026) ਦੇ ਮਾਤਾ ਗੁਜਰੀ ਜੀ ਗਰੁੱਪ ਦੀ ਸਾਂਝੀ ਤਿਆਰੀ।',
    },
    differentiationTitle: {
      en: 'Know the difference: Panj Pyare and Panj Takht',
      pa: 'ਫ਼ਰਕ ਸਮਝੋ: ਪੰਜ ਪਿਆਰੇ ਅਤੇ ਪੰਜ ਤਖ਼ਤ',
    },
    differentiationDescription: {
      en: 'Panj Pyare are the first five initiated Sikhs who modeled courage and equality. Panj Takht are the five highest seats of Sikh authority that guide the Panth across geography and time.',
      pa: 'ਪੰਜ ਪਿਆਰੇ ਪਹਿਲੇ ਪੰਜ ਅੰਮ੍ਰਿਤਧਾਰੀ ਸਿੱਖ ਹਨ ਜਿਨ੍ਹਾਂ ਨੇ ਹਿੰਮਤ ਅਤੇ ਬਰਾਬਰੀ ਦਾ ਮਿਸਾਲ ਦਿੱਤਾ। ਪੰਜ ਤਖ਼ਤ ਸਿੱਖ ਅਧਿਕਾਰ ਦੇ ਪੰਜ ਸਰਵੋੱਚ ਅਸਥਾਨ ਹਨ ਜੋ ਪੰਥ ਨੂੰ ਮਾਰਗਦਰਸ਼ਨ ਦਿੰਦੇ ਹਨ।',
    },
    differentiationCards: [
      {
        id: 'pyare',
        imagePath: '/assets/images/IMG_3268.jpeg',
        title: { en: 'Panj Pyare', pa: 'ਪੰਜ ਪਿਆਰੇ' },
        description: { en: 'Five historic individuals who offered their heads to Guru Gobind Singh Ji and became the founding exemplars of the Khalsa.', pa: 'ਪੰਜ ਇਤਿਹਾਸਕ ਵਿਅਕਤੀ ਜਿਨ੍ਹਾਂ ਨੇ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਅੱਗੇ ਸਿਰ ਭੇਟ ਕੀਤਾ ਅਤੇ ਖ਼ਾਲਸੇ ਦੇ ਪ੍ਰਥਮ ਮਿਸਾਲ ਬਣੇ।' },
      },
      {
        id: 'takhts',
        imagePath: '/assets/images/IMG_3192.jpeg',
        title: { en: 'Panj Takht', pa: 'ਪੰਜ ਤਖ਼ਤ' },
        description: { en: 'Five sacred institutions and seats of authority that preserve Sikh doctrine, governance, and collective memory.', pa: 'ਪੰਜ ਪਵਿੱਤਰ ਸੰਸਥਾਗਤ ਅਸਥਾਨ ਜੋ ਸਿੱਖ ਮਰਯਾਦਾ, ਨਿਰਣੇ ਅਤੇ ਸਾਂਝੀ ਸਮੂਹਕ ਯਾਦ ਨੂੰ ਸੰਭਾਲਦੇ ਹਨ।' },
      },
    ],
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
  },
  about: {
    title: { en: 'About this project', pa: 'ਇਸ ਪ੍ਰੋਜੈਕਟ ਬਾਰੇ' },
    collaboration: {
      en: 'This display was collaborated on by the Mata Gujri Ji Group from the San Jose Gurmat Camp in July 2026.',
      pa: 'ਇਹ ਪ੍ਰਦਰਸ਼ਨੀ ਜੁਲਾਈ 2026 ਵਿੱਚ ਸੈਨ ਹੋਜੇ ਗੁਰਮਤ ਕੈਂਪ ਦੇ ਮਾਤਾ ਗੁਜਰੀ ਜੀ ਗਰੁੱਪ ਦੇ ਸਹਿਯੋਗ ਨਾਲ ਤਿਆਰ ਕੀਤੀ ਗਈ।',
    },
    partnerships: {
      en: 'Built in partnership with Sikhi.io and SikhiUni.com, with curated pathways to trusted Sikh education resources.',
      pa: 'Sikhi.io ਅਤੇ SikhiUni.com ਦੇ ਸਾਥ ਨਾਲ ਬਣਾਇਆ ਗਿਆ, ਭਰੋਸੇਯੋਗ ਸਿੱਖ ਸਿੱਖਿਆ ਸਰੋਤਾਂ ਵੱਲ ਮਾਰਗਦਰਸ਼ਨ ਸਮੇਤ।',
    },
    futureUpdates: {
      en: 'This experience will continue receiving updates, expanded content, and improved visuals.',
      pa: 'ਇਸ ਅਨੁਭਵ ਵਿੱਚ ਆਉਣ ਵਾਲੇ ਸਮੇਂ ਵਿੱਚ ਨਵੇਂ ਅੱਪਡੇਟ, ਵਧੀਕ ਸਮੱਗਰੀ ਅਤੇ ਸੁਧਰੇ ਦ੍ਰਿਸ਼ ਜੋੜੇ ਜਾਣਗੇ।',
    },
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
  resources: {
    title: { en: 'Sikh learning resources', pa: 'ਸਿੱਖ ਸਿੱਖਣ ਦੇ ਸਰੋਤ' },
    intro: { en: 'Discover partner and community platforms for deeper study beyond this interactive display.', pa: 'ਇਸ ਇੰਟਰਐਕਟਿਵ ਪ੍ਰਦਰਸ਼ਨੀ ਤੋਂ ਅੱਗੇ ਗਹਿਰੇ ਅਧਿਐਨ ਲਈ ਭਾਗੀਦਾਰ ਅਤੇ ਕਮਿਊਨਟੀ ਪਲੇਟਫਾਰਮ ਖੋਜੋ।' },
    sites: [
      {
        id: 'sikhi-io',
        title: 'Sikhi.io',
        url: 'https://sikhi.io',
        previewTitle: { en: 'Sikhi.io', pa: 'Sikhi.io' },
        previewDescription: { en: 'Interactive Sikh learning paths and curated teaching tools.', pa: 'ਇੰਟਰਐਕਟਿਵ ਸਿੱਖ ਸਿੱਖਣ ਮਾਰਗ ਅਤੇ ਚੁਣੀ ਹੋਈ ਸਿੱਖਿਆ ਸਮੱਗਰੀ।' },
        details: { en: 'Use for structured onboarding and community-focused study paths.', pa: 'ਸੰਰਚਿਤ ਸ਼ੁਰੂਆਤੀ ਸਿੱਖਿਆ ਅਤੇ ਕਮਿਊਨਟੀ ਕੇਂਦ੍ਰਿਤ ਅਧਿਐਨ ਲਈ।' },
      },
      {
        id: 'sikhiuni',
        title: 'SikhiUni.com',
        url: 'https://sikhiuni.com',
        previewTitle: { en: 'SikhiUni.com', pa: 'SikhiUni.com' },
        previewDescription: { en: 'Courses, lectures, and long-form educational study for Sikhi.', pa: 'ਸਿੱਖੀ ਲਈ ਕੋਰਸ, ਲੈਕਚਰ ਅਤੇ ਵਿਸਤ੍ਰਿਤ ਅਧਿਐਨ ਸਮੱਗਰੀ।' },
        details: { en: 'Ideal for learners wanting guided, classroom-style progression.', pa: 'ਉਨ੍ਹਾਂ ਲਈ ਬਿਹਤਰ ਜੋ ਕਲਾਸਰੂਮ-ਸ਼ੈਲੀ ਮਾਰਗਦਰਸ਼ਿਤ ਅੱਗੇ ਵੱਧਣਾ ਚਾਹੁੰਦੇ ਹਨ।' },
      },
      {
        id: 'gursevak',
        title: 'Gursevak.com',
        url: 'https://gursevak.com',
        previewTitle: { en: 'Gursevak.com', pa: 'Gursevak.com' },
        previewDescription: { en: 'Gurbani-focused materials, references, and Sikh educational media.', pa: 'ਗੁਰਬਾਣੀ-ਕੇਂਦ੍ਰਿਤ ਸਮੱਗਰੀ, ਸੰਦਰਭ ਅਤੇ ਸਿੱਖ ਸਿੱਖਿਆ ਮੀਡੀਆ।' },
        details: { en: 'Useful for learners who want scripture-centered exploration.', pa: 'ਉਨ੍ਹਾਂ ਸਿਖਿਆਰਥੀਆਂ ਲਈ ਜੋ ਗੁਰਬਾਣੀ ਕੇਂਦ੍ਰਿਤ ਖੋਜ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹਨ।' },
      },
      {
        id: 'basicsofsikhi',
        title: 'BasicsOfSikhi.com',
        url: 'https://www.basicsofsikhi.com',
        previewTitle: { en: 'BasicsOfSikhi.com', pa: 'BasicsOfSikhi.com' },
        previewDescription: { en: 'Videos, explainers, and practical learning resources.', pa: 'ਵੀਡੀਓ, ਵਿਆਖਿਆਕਾਰੀ ਸਮੱਗਰੀ ਅਤੇ ਪ੍ਰਯੋਗਕਾਰੀ ਸਿੱਖਣ ਸਰੋਤ।' },
        details: { en: 'Strong for quick introductions and practical everyday Sikh guidance.', pa: 'ਤੁਰੰਤ ਜਾਣ-ਪਛਾਣ ਅਤੇ ਰੋਜ਼ਾਨਾ ਸਿੱਖ ਜੀਵਨ ਮਾਰਗਦਰਸ਼ਨ ਲਈ ਉਪਯੋਗੀ।' },
      },
    ],
  },
  leaflets: {
    title: { en: 'Leaflets and handouts', pa: 'ਲੀਫਲੈਟ ਅਤੇ ਹੈਂਡਆਉਟ' },
    intro: { en: 'Download trusted Sikh learning leaflets to continue your journey after this exhibit.', pa: 'ਇਸ ਪ੍ਰਦਰਸ਼ਨੀ ਤੋਂ ਬਾਅਦ ਵੀ ਸਿੱਖਣ ਜਾਰੀ ਰੱਖਣ ਲਈ ਭਰੋਸੇਯੋਗ ਸਿੱਖ ਲੀਫਲੈਟ ਡਾਊਨਲੋਡ ਕਰੋ।' },
    cta: { en: 'Open leaflet library', pa: 'ਲੀਫਲੈਟ ਲਾਇਬ੍ਰੇਰੀ ਖੋਲ੍ਹੋ' },
    hubUrl: 'https://www.basicsofsikhi.com/resources',
  },
  panjPyare: [
    {
      id: 1,
      imagePath: '/assets/images/IMG_3268.jpeg',
      silhouettePath: '/assets/images/singh-silhouette.svg',
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
      lessons: {
        en: 'Bhai Daya Singh Ji\'s life teaches that true courage means being the first to answer a call others hesitate before, and that steadfast loyalty can carry a person from a merchant\'s ledger to the Guru\'s own emissary. His delivery of the Zafarnama also shows that speaking uncomfortable truth to power, done with dignity, is itself an act of faith.',
        pa: 'ਭਾਈ ਦਯਾ ਸਿੰਘ ਜੀ ਦਾ ਜੀਵਨ ਸਿਖਾਉਂਦਾ ਹੈ ਕਿ ਸੱਚੀ ਹਿੰਮਤ ਦਾ ਮਤਲਬ ਹੈ ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਪੁਕਾਰ ਦਾ ਜਵਾਬ ਦੇਣਾ, ਅਤੇ ਅਡੋਲ ਵਫ਼ਾਦਾਰੀ ਇੱਕ ਵਪਾਰੀ ਨੂੰ ਗੁਰੂ ਦਾ ਭਰੋਸੇਯੋਗ ਦੂਤ ਬਣਾ ਸਕਦੀ ਹੈ।',
      },
      language: {
        en: 'As a Khatri merchant from Lahore, Bhai Daya Singh Ji would have grown up speaking Punjabi. Given his documented role carrying the Persian-language Zafarnama to Emperor Aurangzeb\'s court, he likely also had working knowledge of Persian, the administrative and diplomatic language of the Mughal era.',
        pa: 'ਲਾਹੌਰ ਦੇ ਇੱਕ ਖੱਤਰੀ ਵਪਾਰੀ ਵਜੋਂ, ਭਾਈ ਦਯਾ ਸਿੰਘ ਜੀ ਪੰਜਾਬੀ ਬੋਲਦੇ ਹੋਏ ਵੱਡੇ ਹੋਏ ਹੋਣਗੇ। ਔਰੰਗਜ਼ੇਬ ਦੇ ਦਰਬਾਰ ਵਿੱਚ ਫ਼ਾਰਸੀ ਭਾਸ਼ਾ ਦਾ ਜ਼ਫ਼ਰਨਾਮਾ ਲੈ ਕੇ ਜਾਣ ਦੀ ਭੂਮਿਕਾ ਤੋਂ ਲੱਗਦਾ ਹੈ ਕਿ ਉਹ ਫ਼ਾਰਸੀ ਵੀ ਜਾਣਦੇ ਸਨ।',
      },
      qualities: {
        en: 'Compassion, courage, eloquence, and unwavering loyalty.', pa: 'ਦਇਆ, ਹਿੰਮਤ, ਸੁਭਾਸ਼ਿਤਾ ਅਤੇ ਅਡੋਲ ਵਫ਼ਾਦਾਰੀ।',
      },
    },
    {
      id: 2,
      imagePath: '/assets/images/IMG_3269.jpeg',
      silhouettePath: '/assets/images/singh-silhouette.svg',
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
      lessons: {
        en: 'Bhai Dharam Singh Ji\'s life shows that righteousness (dharam) is proven not by birth or title but by the willingness to cross a room and stand beside someone the world calls different from you. His steadfastness in farming life and in the Guru\'s presence teaches that ordinary daily discipline prepares a person for extraordinary moments.',
        pa: 'ਭਾਈ ਧਰਮ ਸਿੰਘ ਜੀ ਦਾ ਜੀਵਨ ਦਿਖਾਉਂਦਾ ਹੈ ਕਿ ਧਰਮ ਜਨਮ ਜਾਂ ਖ਼ਿਤਾਬ ਨਾਲ ਨਹੀਂ ਸਗੋਂ ਉਸ ਵਿਅਕਤੀ ਦੇ ਨਾਲ ਖੜੇ ਹੋਣ ਦੀ ਇੱਛਾ ਨਾਲ ਸਾਬਤ ਹੁੰਦਾ ਹੈ ਜਿਸਨੂੰ ਸੰਸਾਰ ਵੱਖਰਾ ਸਮਝਦਾ ਹੈ।',
      },
      language: {
        en: 'As a Jat farmer from Hastinapur in present-day Uttar Pradesh, Bhai Dharam Singh Ji would most likely have spoken a regional dialect close to Hindi or Brajbhasha natively, alongside the Punjabi used in Guru Gobind Singh Ji\'s Anandpur Sahib sangat.',
        pa: 'ਹਸਤਿਨਾਪੁਰ (ਅੱਜ ਦੇ ਉੱਤਰ ਪ੍ਰਦੇਸ਼) ਦੇ ਇੱਕ ਜੱਟ ਕਿਸਾਨ ਵਜੋਂ, ਭਾਈ ਧਰਮ ਸਿੰਘ ਜੀ ਸ਼ਾਇਦ ਹਿੰਦੀ ਜਾਂ ਬ੍ਰਜਭਾਸ਼ਾ ਦੇ ਨੇੜੇ ਇੱਕ ਖੇਤਰੀ ਬੋਲੀ ਬੋਲਦੇ ਸਨ, ਨਾਲ ਹੀ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਦੀ ਸੰਗਤ ਵਿੱਚ ਪੰਜਾਬੀ ਵੀ।',
      },
      qualities: {
        en: 'Righteousness, humility, quiet discipline, and steadfast resolve.', pa: 'ਧਰਮ, ਨਿਮਰਤਾ, ਸ਼ਾਂਤ ਅਨੁਸ਼ਾਸਨ ਅਤੇ ਅਡੋਲ ਦ੍ਰਿੜਤਾ।',
      },
    },
    {
      id: 3,
      imagePath: '/assets/images/IMG_3270.jpeg',
      silhouettePath: '/assets/images/singh-silhouette.svg',
      mapPoint: { x: '68%', y: '54%' },
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
      lessons: {
        en: 'Bhai Himmat Singh Ji\'s life teaches that no service is too humble to lead to greatness, and that dignity is not granted by occupation but claimed through courage. A man who carried water for others was the same man who stood, unflinching, as one of the founders of a new Panth.',
        pa: 'ਭਾਈ ਹਿੰਮਤ ਸਿੰਘ ਜੀ ਦਾ ਜੀਵਨ ਸਿਖਾਉਂਦਾ ਹੈ ਕਿ ਕੋਈ ਵੀ ਸੇਵਾ ਮਹਾਨਤਾ ਵੱਲ ਲੈ ਜਾਣ ਲਈ ਬਹੁਤ ਨਿਮਾਣੀ ਨਹੀਂ, ਅਤੇ ਸਨਮਾਨ ਕਿੱਤੇ ਨਾਲ ਨਹੀਂ ਸਗੋਂ ਹਿੰਮਤ ਨਾਲ ਹਾਸਲ ਹੁੰਦਾ ਹੈ।',
      },
      language: {
        en: 'Having traveled from Jagannath Puri in present-day Odisha, Bhai Himmat Singh Ji would most likely have spoken Odia natively before learning the Punjabi of Guru Gobind Singh Ji\'s Anandpur Sahib sangat.',
        pa: 'ਅੱਜ ਦੇ ਉੜੀਸਾ ਦੇ ਜਗਨਨਾਥ ਪੁਰੀ ਤੋਂ ਆਉਣ ਕਾਰਨ, ਭਾਈ ਹਿੰਮਤ ਸਿੰਘ ਜੀ ਸ਼ਾਇਦ ਮੂਲ ਰੂਪ ਵਿੱਚ ਉੜੀਆ ਬੋਲਦੇ ਸਨ, ਬਾਅਦ ਵਿੱਚ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਦੀ ਸੰਗਤ ਦੀ ਪੰਜਾਬੀ ਸਿੱਖੀ।',
      },
      qualities: {
        en: 'Courage, humility, fearlessness, and selfless service.', pa: 'ਹਿੰਮਤ, ਨਿਮਰਤਾ, ਨਿਰਭੈਤਾ ਅਤੇ ਨਿਸ਼ਕਾਮ ਸੇਵਾ।',
      },
    },
    {
      id: 4,
      imagePath: '/assets/images/IMG_3271.jpeg',
      silhouettePath: '/assets/images/singh-silhouette.svg',
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
      lessons: {
        en: 'Bhai Mohkam Singh Ji\'s life shows that skill practiced with devotion — whether in cloth or in character — builds the steadiness a person needs when called to something greater. His journey from Dwarka to Anandpur Sahib is a reminder that sincere seeking can cross any distance.',
        pa: 'ਭਾਈ ਮੋਹਕਮ ਸਿੰਘ ਜੀ ਦਾ ਜੀਵਨ ਦਿਖਾਉਂਦਾ ਹੈ ਕਿ ਸ਼ਰਧਾ ਨਾਲ ਅਭਿਆਸ ਕੀਤਾ ਹੁਨਰ — ਭਾਵੇਂ ਕੱਪੜੇ ਵਿੱਚ ਹੋਵੇ ਜਾਂ ਕਿਰਦਾਰ ਵਿੱਚ — ਉਹ ਅਡੋਲਤਾ ਬਣਾਉਂਦਾ ਹੈ ਜਿਸਦੀ ਲੋੜ ਕਿਸੇ ਵੱਡੀ ਪੁਕਾਰ ਦੇ ਸਮੇਂ ਪੈਂਦੀ ਹੈ।',
      },
      language: {
        en: 'As a craftsman from Dwarka in present-day Gujarat, Bhai Mohkam Singh Ji would most likely have spoken Gujarati natively, in addition to the Punjabi of Guru Gobind Singh Ji\'s sangat.',
        pa: 'ਅੱਜ ਦੇ ਗੁਜਰਾਤ ਦੇ ਦਵਾਰਕਾ ਤੋਂ ਇੱਕ ਕਾਰੀਗਰ ਵਜੋਂ, ਭਾਈ ਮੋਹਕਮ ਸਿੰਘ ਜੀ ਸ਼ਾਇਦ ਮੂਲ ਰੂਪ ਵਿੱਚ ਗੁਜਰਾਤੀ ਬੋਲਦੇ ਸਨ, ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੀ ਸੰਗਤ ਦੀ ਪੰਜਾਬੀ ਦੇ ਨਾਲ।',
      },
      qualities: {
        en: 'Steadfastness, skillfulness, discipline, and quiet loyalty.', pa: 'ਅਡੋਲਤਾ, ਹੁਨਰਮੰਦੀ, ਅਨੁਸ਼ਾਸਨ ਅਤੇ ਸ਼ਾਂਤ ਵਫ਼ਾਦਾਰੀ।',
      },
    },
    {
      id: 5,
      imagePath: '/assets/images/IMG_3272.jpeg',
      silhouettePath: '/assets/images/singh-silhouette.svg',
      mapPoint: { x: '46%', y: '60%' },
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
      lessons: {
        en: 'Bhai Sahib Singh Ji\'s life teaches that service, however socially undervalued, is a form of devotion — and that the final person to complete a circle can matter as much as the first. His journey from Bidar to Anandpur Sahib completed a living map of a Panth meant for all of India, not one region alone.',
        pa: 'ਭਾਈ ਸਾਹਿਬ ਸਿੰਘ ਜੀ ਦਾ ਜੀਵਨ ਸਿਖਾਉਂਦਾ ਹੈ ਕਿ ਸੇਵਾ, ਭਾਵੇਂ ਸਮਾਜਿਕ ਤੌਰ ਤੇ ਘੱਟ ਸਮਝੀ ਜਾਵੇ, ਭਗਤੀ ਦਾ ਇੱਕ ਰੂਪ ਹੈ — ਅਤੇ ਚੱਕਰ ਪੂਰਾ ਕਰਨ ਵਾਲਾ ਆਖਰੀ ਵਿਅਕਤੀ ਵੀ ਪਹਿਲੇ ਜਿੰਨਾ ਹੀ ਮਹੱਤਵਪੂਰਨ ਹੋ ਸਕਦਾ ਹੈ।',
      },
      language: {
        en: 'Coming from Bidar in present-day Karnataka, Bhai Sahib Singh Ji would most likely have grown up speaking Kannada and the Deccani vernacular common to the region, in addition to the Punjabi of Guru Gobind Singh Ji\'s sangat.',
        pa: 'ਅੱਜ ਦੇ ਕਰਨਾਟਕ ਦੇ ਬੀਦਰ ਤੋਂ ਆਉਣ ਕਾਰਨ, ਭਾਈ ਸਾਹਿਬ ਸਿੰਘ ਜੀ ਸ਼ਾਇਦ ਕੰਨੜ ਅਤੇ ਖੇਤਰ ਦੀ ਦੱਖਣੀ ਬੋਲੀ ਬੋਲਦੇ ਹੋਏ ਵੱਡੇ ਹੋਏ, ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੀ ਸੰਗਤ ਦੀ ਪੰਜਾਬੀ ਦੇ ਨਾਲ।',
      },
      qualities: {
        en: 'Service, humility, devotion, and quiet perseverance.', pa: 'ਸੇਵਾ, ਨਿਮਰਤਾ, ਭਗਤੀ ਅਤੇ ਸ਼ਾਂਤ ਦ੍ਰਿੜਤਾ।',
      },
    },
  ],
  takhts: [
    {
      id: 'akal_takht',
      imagePath: '/assets/images/IMG_3192.jpeg',
      silhouettePath: '/assets/images/gurdwara-silhouette.svg',
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
      gurusVisited: {
        en: 'Amritsar\'s sacred pool was founded by Guru Ram Das Ji (4th Guru); Guru Arjan Dev Ji (5th Guru) completed Sri Harmandir Sahib beside it and compiled the Adi Granth here; Guru Hargobind Sahib Ji (6th Guru) built the Akal Takht itself in 1606. Later Gurus\' direct visits to the Akal Takht specifically are less documented, as the seat of Guruship moved elsewhere for several generations following Guru Hargobind Sahib Ji.',
        pa: 'ਅੰਮ੍ਰਿਤਸਰ ਦੇ ਪਵਿੱਤਰ ਸਰੋਵਰ ਦੀ ਸਥਾਪਨਾ ਗੁਰੂ ਰਾਮ ਦਾਸ ਜੀ (ਚੌਥੇ ਗੁਰੂ) ਨੇ ਕੀਤੀ; ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ (ਪੰਜਵੇਂ ਗੁਰੂ) ਨੇ ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਪੂਰਾ ਕੀਤਾ ਅਤੇ ਆਦਿ ਗ੍ਰੰਥ ਇੱਥੇ ਤਿਆਰ ਕੀਤਾ; ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ (ਛੇਵੇਂ ਗੁਰੂ) ਨੇ 1606 ਵਿੱਚ ਅਕਾਲ ਤਖ਼ਤ ਖ਼ੁਦ ਬਣਾਇਆ।',
      },
      areaHistory: {
        en: 'Amritsar grew up around the sacred pool founded circa 1577 by Guru Ram Das Ji, developing into Punjab\'s foremost Sikh pilgrimage and trading city. It endured repeated invasions and desecrations through the 18th century, including attacks by Ahmad Shah Durrani, before flourishing as a cultural and political center under the Sikh Misls and later the Sikh Empire of Maharaja Ranjit Singh.',
        pa: 'ਅੰਮ੍ਰਿਤਸਰ ਗੁਰੂ ਰਾਮ ਦਾਸ ਜੀ ਦੁਆਰਾ ਲਗਭਗ 1577 ਵਿੱਚ ਸਥਾਪਿਤ ਪਵਿੱਤਰ ਸਰੋਵਰ ਦੇ ਆਲੇ-ਦੁਆਲੇ ਵਧਿਆ, ਪੰਜਾਬ ਦਾ ਪ੍ਰਮੁੱਖ ਸਿੱਖ ਤੀਰਥ ਅਤੇ ਵਪਾਰਕ ਸ਼ਹਿਰ ਬਣ ਗਿਆ। ਇਸਨੇ 18ਵੀਂ ਸਦੀ ਦੌਰਾਨ ਵਾਰ-ਵਾਰ ਹਮਲੇ ਸਹੇ, ਬਾਅਦ ਵਿੱਚ ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦੇ ਸਿੱਖ ਸਾਮਰਾਜ ਹੇਠ ਵਧਿਆ-ਫੁੱਲਿਆ।',
      },
      localImpact: {
        en: 'The Akal Takht anchors Amritsar\'s identity as the spiritual and political capital of the Sikh world, drawing millions of pilgrims annually whose visits sustain the city\'s langar (community kitchen) tradition, local economy, and civic life around the twin principles of Miri-Piri.',
        pa: 'ਅਕਾਲ ਤਖ਼ਤ ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਪਹਿਚਾਣ ਨੂੰ ਸਿੱਖ ਜਗਤ ਦੀ ਅਧਿਆਤਮਿਕ ਅਤੇ ਰਾਜਨੀਤਿਕ ਰਾਜਧਾਨੀ ਵਜੋਂ ਸਥਾਪਿਤ ਕਰਦਾ ਹੈ, ਹਰ ਸਾਲ ਲੱਖਾਂ ਸ਼ਰਧਾਲੂਆਂ ਨੂੰ ਖਿੱਚਦਾ ਹੈ।',
      },
    },
    {
      id: 'kesgarh_sahib',
      imagePath: '/assets/images/IMG_3194.jpeg',
      silhouettePath: '/assets/images/gurdwara-silhouette.svg',
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
      gurusVisited: {
        en: 'Guru Tegh Bahadur Ji (9th Guru) founded the town, then called Chak Nanaki, in 1665. His son Guru Gobind Singh Ji (10th Guru) grew up here, established the Khalsa on Vaisakhi 1699, and made Anandpur Sahib his primary seat until 1704.',
        pa: 'ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ (9ਵੇਂ ਗੁਰੂ) ਨੇ 1665 ਵਿੱਚ ਇਸ ਨਗਰ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ, ਉਦੋਂ ਇਸਨੂੰ ਚੱਕ ਨਾਨਕੀ ਕਿਹਾ ਜਾਂਦਾ ਸੀ। ਉਨ੍ਹਾਂ ਦੇ ਪੁੱਤਰ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ (10ਵੇਂ ਗੁਰੂ) ਇੱਥੇ ਵੱਡੇ ਹੋਏ ਅਤੇ ਵਿਸਾਖੀ 1699 ਨੂੰ ਖ਼ਾਲਸੇ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ।',
      },
      areaHistory: {
        en: 'Founded in 1665 at the foothills of the Shivalik range, Anandpur Sahib grew into a fortified town after Guru Gobind Singh Ji built a ring of forts — including Anandgarh, Lohgarh, Fatehgarh, and Holgarh — to protect the young Khalsa community from hill-state rajas and Mughal forces. It was the site of repeated sieges before the Guru\'s forced evacuation in December 1704.',
        pa: '1665 ਵਿੱਚ ਸ਼ਿਵਾਲਿਕ ਪਹਾੜੀਆਂ ਦੀ ਤਲਹਟੀ ਵਿੱਚ ਸਥਾਪਿਤ, ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੁਆਰਾ ਬਣਾਏ ਕਿਲ੍ਹਿਆਂ ਦੇ ਘੇਰੇ ਨਾਲ ਇੱਕ ਕਿਲ੍ਹਾਬੰਦ ਨਗਰ ਬਣ ਗਿਆ। ਦਸੰਬਰ 1704 ਵਿੱਚ ਗੁਰੂ ਜੀ ਦੀ ਮਜਬੂਰੀ ਦੀ ਨਿਕਾਸੀ ਤੋਂ ਪਹਿਲਾਂ ਇਹ ਵਾਰ-ਵਾਰ ਘੇਰਾਬੰਦੀ ਦਾ ਸਥਾਨ ਰਿਹਾ।',
      },
      localImpact: {
        en: 'Anandpur Sahib remains one of Sikhi\'s most important pilgrimage towns, hosting the large annual Hola Mohalla festival, and its fort-building history shaped defensive settlement patterns across the Shivalik foothill region.',
        pa: 'ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਸਿੱਖੀ ਦੇ ਸਭ ਤੋਂ ਮਹੱਤਵਪੂਰਨ ਤੀਰਥ ਨਗਰਾਂ ਵਿੱਚੋਂ ਇੱਕ ਬਣਿਆ ਰਹਿੰਦਾ ਹੈ, ਹਰ ਸਾਲ ਵੱਡਾ ਹੋਲਾ ਮਹੱਲਾ ਤਿਉਹਾਰ ਮਨਾਉਂਦਾ ਹੈ।',
      },
    },
    {
      id: 'damdama_sahib',
      imagePath: '/assets/images/IMG_3200.jpeg',
      silhouettePath: '/assets/images/gurdwara-silhouette.svg',
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
      gurusVisited: {
        en: 'Guru Gobind Singh Ji (10th Guru) is the Guru documented at this specific site, residing here for approximately nine months in 1705–06 after the battles of Chamkaur and the loss of his family.',
        pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ (10ਵੇਂ ਗੁਰੂ) ਇਸ ਖ਼ਾਸ ਅਸਥਾਨ ਨਾਲ ਦਸਤਾਵੇਜ਼ੀ ਤੌਰ ਤੇ ਜੁੜੇ ਗੁਰੂ ਹਨ, ਜਿੱਥੇ ਉਹ 1705–06 ਵਿੱਚ ਲਗਭਗ ਨੌਂ ਮਹੀਨੇ ਰਹੇ।',
      },
      areaHistory: {
        en: 'Talwandi Sabo sits in the semi-arid Malwa region near present-day Bathinda. It was a modest settlement before Guru Gobind Singh Ji\'s extended residency, after which it became renowned as a center of Gurbani scholarship and study, earning the name "Guru Ki Kashi."',
        pa: 'ਤਲਵੰਡੀ ਸਾਬੋ ਅੱਜ ਦੇ ਬਠਿੰਡਾ ਦੇ ਨੇੜੇ ਅਰਧ-ਸੁੱਕੇ ਮਾਲਵਾ ਖੇਤਰ ਵਿੱਚ ਸਥਿਤ ਹੈ। ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਲੰਬੇ ਨਿਵਾਸ ਤੋਂ ਬਾਅਦ ਇਹ ਗੁਰਬਾਣੀ ਵਿਦਵਤਾ ਦਾ ਕੇਂਦਰ ਬਣ ਗਿਆ, "ਗੁਰੂ ਕੀ ਕਾਸ਼ੀ" ਦਾ ਨਾਮ ਕਮਾਇਆ।',
      },
      localImpact: {
        en: 'The Takht\'s scholarly legacy shaped Talwandi Sabo and the wider Bathinda area into a center of Sikh religious education, with institutions such as Guru Kashi University, named for the site\'s epithet, continuing that tradition of learning today.',
        pa: 'ਤਖ਼ਤ ਦੀ ਵਿਦਵਤਾ ਪਰੰਪਰਾ ਨੇ ਤਲਵੰਡੀ ਸਾਬੋ ਅਤੇ ਬਠਿੰਡਾ ਖੇਤਰ ਨੂੰ ਸਿੱਖ ਧਾਰਮਿਕ ਸਿੱਖਿਆ ਦਾ ਕੇਂਦਰ ਬਣਾ ਦਿੱਤਾ, ਗੁਰੂ ਕਾਸ਼ੀ ਯੂਨੀਵਰਸਿਟੀ ਵਰਗੀਆਂ ਸੰਸਥਾਵਾਂ ਅੱਜ ਵੀ ਇਹ ਪਰੰਪਰਾ ਜਾਰੀ ਰੱਖਦੀਆਂ ਹਨ।',
      },
    },
    {
      id: 'patna_sahib',
      imagePath: '/assets/images/IMG_3197.jpeg',
      silhouettePath: '/assets/images/gurdwara-silhouette.svg',
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
      gurusVisited: {
        en: 'Guru Nanak Dev Ji (1st Guru) is traditionally held to have visited Patna during his travels (udasis). Guru Tegh Bahadur Ji (9th Guru) had his family, including his wife Mata Gujri Ji, reside in Patna while he traveled through eastern India; his son, Guru Gobind Singh Ji (10th Guru), was born here in December 1666.',
        pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ (ਪਹਿਲੇ ਗੁਰੂ) ਦੇ ਆਪਣੀਆਂ ਉਦਾਸੀਆਂ ਦੌਰਾਨ ਪਟਨਾ ਆਉਣ ਦੀ ਪਰੰਪਰਾ ਹੈ। ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ (9ਵੇਂ ਗੁਰੂ) ਦਾ ਪਰਿਵਾਰ, ਮਾਤਾ ਗੁਜਰੀ ਜੀ ਸਮੇਤ, ਪਟਨਾ ਵਿੱਚ ਰਿਹਾ; ਉਨ੍ਹਾਂ ਦੇ ਪੁੱਤਰ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ (10ਵੇਂ ਗੁਰੂ) ਦਾ ਜਨਮ ਦਸੰਬਰ 1666 ਵਿੱਚ ਇੱਥੇ ਹੋਇਆ।',
      },
      areaHistory: {
        en: 'Patna (ancient Pataliputra) is among the oldest continuously inhabited cities in the world, once the capital of the Magadha and Mauryan empires. By the 17th century it was a major Mughal-era trading city on the Ganges with an established Sikh sangat.',
        pa: 'ਪਟਨਾ (ਪ੍ਰਾਚੀਨ ਪਾਟਲੀਪੁੱਤਰ) ਸੰਸਾਰ ਦੇ ਸਭ ਤੋਂ ਪੁਰਾਣੇ ਲਗਾਤਾਰ ਵਸੇ ਸ਼ਹਿਰਾਂ ਵਿੱਚੋਂ ਹੈ, ਕਦੇ ਮਗਧ ਅਤੇ ਮੌਰੀਆ ਸਾਮਰਾਜਾਂ ਦੀ ਰਾਜਧਾਨੀ ਸੀ। 17ਵੀਂ ਸਦੀ ਤੱਕ ਇਹ ਗੰਗਾ ਕੰਢੇ ਇੱਕ ਵੱਡਾ ਮੁਗਲ-ਕਾਲੀ ਵਪਾਰਕ ਸ਼ਹਿਰ ਸੀ ਜਿੱਥੇ ਇੱਕ ਸਥਾਪਿਤ ਸਿੱਖ ਸੰਗਤ ਸੀ।',
      },
      localImpact: {
        en: 'Takht Sri Patna Sahib anchors a small but historic Sikh community within a city where Sikhs are a minority, drawing pilgrims especially for Guru Gobind Singh Ji\'s Prakash Utsav and marking the geographic reach of Sikh heritage into eastern India.',
        pa: 'ਤਖ਼ਤ ਸ੍ਰੀ ਪਟਨਾ ਸਾਹਿਬ ਇੱਕ ਛੋਟੇ ਪਰ ਇਤਿਹਾਸਕ ਸਿੱਖ ਭਾਈਚਾਰੇ ਨੂੰ ਸੰਭਾਲਦਾ ਹੈ, ਖ਼ਾਸ ਕਰਕੇ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਪ੍ਰਕਾਸ਼ ਉਤਸਵ ਲਈ ਸ਼ਰਧਾਲੂਆਂ ਨੂੰ ਖਿੱਚਦਾ ਹੈ।',
      },
    },
    {
      id: 'hazur_sahib',
      imagePath: '/assets/images/IMG_3196.jpeg',
      silhouettePath: '/assets/images/gurdwara-silhouette.svg',
      name: { en: 'Takht Sri Hazur Sahib', pa: 'ਤਖ਼ਤ ਸ੍ਰੀ ਹਜ਼ੂਰ ਸਾਹਿਬ' },
      location: { en: 'Nanded, Maharashtra, India', pa: 'ਨਾਂਦੇੜ, ਮਹਾਰਾਸ਼ਟਰ, ਭਾਰਤ' },
      establishedBy: { en: 'Site of Guru Gobind Singh Ji\'s jyoti jot (1708 CE); Gurdwara built by Maharaja Ranjit Singh (1832–39)', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੀ ਜੋਤੀ ਜੋਤ ਦਾ ਅਸਥਾਨ (1708 ਈ.); ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦੁਆਰਾ ਗੁਰਦੁਆਰਾ ਉਸਾਰਿਆ (1832–39)' },
      significance: { en: 'The sacred site where Guru Gobind Singh Ji spent his final days, declared Guru Granth Sahib Ji as the eternal living Guru, and attained jyoti jot in October 1708.', pa: 'ਉਹ ਪਵਿੱਤਰ ਅਸਥਾਨ ਜਿੱਥੇ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਆਪਣੇ ਅੰਤਿਮ ਦਿਨ ਬਿਤਾਏ, ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਨੂੰ ਸਦੀਵੀ ਜੀਵੰਤ ਗੁਰੂ ਘੋਸ਼ਿਤ ਕੀਤਾ ਅਤੇ ਅਕਤੂਬਰ 1708 ਵਿੱਚ ਜੋਤੀ ਜੋਤ ਸਮਾਏ।' },
      details: { en: 'Hazur Sahib carries the profound sense of completion — where the line of human Gurus ended and the eternal Guru Granth Sahib Ji was proclaimed as the living, eternal Guru of the Sikhs forever.', pa: 'ਹਜ਼ੂਰ ਸਾਹਿਬ ਪੂਰਨਤਾ ਦੀ ਗਹਿਰੀ ਭਾਵਨਾ ਰੱਖਦਾ ਹੈ — ਜਿੱਥੇ ਮਨੁੱਖੀ ਗੁਰੂਆਂ ਦੀ ਲੜੀ ਸਮਾਪਤ ਹੋਈ ਅਤੇ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਨੂੰ ਸਿੱਖਾਂ ਦੇ ਸਦੀਵੀ ਜੀਵੰਤ ਗੁਰੂ ਵਜੋਂ ਘੋਸ਼ਿਤ ਕੀਤਾ ਗਿਆ।' },
      mapPoint: { x: '46%', y: '56%' },
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
      gurusVisited: {
        en: 'Guru Gobind Singh Ji (10th Guru) is the Guru documented at this site, spending his final months here in 1708 after journeying south following his reconciliation with Emperor Bahadur Shah I.',
        pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ (10ਵੇਂ ਗੁਰੂ) ਇਸ ਅਸਥਾਨ ਨਾਲ ਦਸਤਾਵੇਜ਼ੀ ਤੌਰ ਤੇ ਜੁੜੇ ਗੁਰੂ ਹਨ, ਜਿੱਥੇ ਉਨ੍ਹਾਂ ਨੇ 1708 ਵਿੱਚ ਆਪਣੇ ਅੰਤਿਮ ਮਹੀਨੇ ਬਿਤਾਏ।',
      },
      areaHistory: {
        en: 'Nanded sits on the banks of the Godavari River in the Deccan, in present-day Maharashtra. It was under Mughal administration in the early 18th century when Guru Gobind Singh Ji camped there in 1708, where he was fatally wounded by an assailant.',
        pa: 'ਨਾਂਦੇੜ ਦੱਖਣ ਦੇ ਗੋਦਾਵਰੀ ਨਦੀ ਕੰਢੇ, ਅੱਜ ਦੇ ਮਹਾਰਾਸ਼ਟਰ ਵਿੱਚ ਸਥਿਤ ਹੈ। 18ਵੀਂ ਸਦੀ ਦੇ ਸ਼ੁਰੂ ਵਿੱਚ ਇਹ ਮੁਗਲ ਪ੍ਰਸ਼ਾਸਨ ਹੇਠ ਸੀ ਜਦੋਂ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ 1708 ਵਿੱਚ ਇੱਥੇ ਠਹਿਰੇ।',
      },
      localImpact: {
        en: 'Hazur Sahib transformed Nanded into a major Sikh pilgrimage destination in the Deccan, drawing devotees from across India and sustaining a distinctive local Sikh community, including a long-standing Nihang Singh custodial tradition, far from Punjab.',
        pa: 'ਹਜ਼ੂਰ ਸਾਹਿਬ ਨੇ ਨਾਂਦੇੜ ਨੂੰ ਦੱਖਣ ਵਿੱਚ ਇੱਕ ਵੱਡਾ ਸਿੱਖ ਤੀਰਥ ਸਥਾਨ ਬਣਾ ਦਿੱਤਾ, ਪੰਜਾਬ ਤੋਂ ਦੂਰ ਇੱਕ ਵਿਲੱਖਣ ਸਥਾਨਕ ਸਿੱਖ ਭਾਈਚਾਰੇ ਨੂੰ ਕਾਇਮ ਰੱਖਦਾ ਹੈ।',
      },
    },
  ],
  learnSikhi: {
    title: { en: 'Learn About Sikhi', pa: 'ਸਿੱਖੀ ਬਾਰੇ ਜਾਣੋ' },
    intro: {
      en: 'A foundational introduction to gurdwara spaces, etiquette, the Ten Gurus, the Char Sahibzaade, the Panj Kakaar, and Gurbani — for visitors of any background.',
      pa: 'ਗੁਰਦੁਆਰਾ ਸਥਾਨਾਂ, ਮਰਯਾਦਾ, ਦਸ ਗੁਰੂ ਸਾਹਿਬਾਨ, ਚਾਰ ਸਾਹਿਬਜ਼ਾਦਿਆਂ, ਪੰਜ ਕਕਾਰਾਂ ਅਤੇ ਗੁਰਬਾਣੀ ਬਾਰੇ ਇੱਕ ਬੁਨਿਆਦੀ ਜਾਣ-ਪਛਾਣ — ਹਰ ਪਿਛੋਕੜ ਦੇ ਸੈਲਾਨੀਆਂ ਲਈ।',
    },
    gurdwaraRoomsTitle: { en: 'Gurdwara rooms', pa: 'ਗੁਰਦੁਆਰੇ ਦੇ ਸਥਾਨ' },
    gurdwaraRooms: [
      {
        name: { en: 'Diwan Hall', pa: 'ਦੀਵਾਨ ਹਾਲ' },
        description: {
          en: 'The main congregation hall where Sri Guru Granth Sahib Ji is enthroned. Kirtan and katha take place here, and the sangat sits together on the floor as equals, regardless of status, facing the Guru.',
          pa: 'ਮੁੱਖ ਸੰਗਤ ਹਾਲ ਜਿੱਥੇ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦਾ ਪ੍ਰਕਾਸ਼ ਹੁੰਦਾ ਹੈ। ਇੱਥੇ ਕੀਰਤਨ ਅਤੇ ਕਥਾ ਹੁੰਦੀ ਹੈ, ਅਤੇ ਸੰਗਤ ਬਰਾਬਰੀ ਨਾਲ ਫ਼ਰਸ਼ ਤੇ ਬੈਠਦੀ ਹੈ।',
        },
      },
      {
        name: { en: 'Sachkhand', pa: 'ਸਚਖੰਡ' },
        description: {
          en: '"Realm of Truth" — the inner sanctum where Sri Guru Granth Sahib Ji rests overnight (Sukhasan) after the day\'s prakash. It is treated with the same reverence given to a living Guru\'s private chamber, and access is often restricted.',
          pa: '"ਸੱਚ ਦਾ ਖੇਤਰ" — ਅੰਦਰੂਨੀ ਪਵਿੱਤਰ ਅਸਥਾਨ ਜਿੱਥੇ ਦਿਨ ਦੇ ਪ੍ਰਕਾਸ਼ ਤੋਂ ਬਾਅਦ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਰਾਤ ਨੂੰ ਸੁਖਾਸਨ ਕਰਦੇ ਹਨ। ਇਸਨੂੰ ਜੀਵੰਤ ਗੁਰੂ ਦੇ ਨਿੱਜੀ ਕਮਰੇ ਵਾਂਗ ਹੀ ਸਤਿਕਾਰਿਆ ਜਾਂਦਾ ਹੈ।',
        },
      },
      {
        name: { en: 'Langar Hall', pa: 'ਲੰਗਰ ਹਾਲ' },
        description: {
          en: 'The community dining hall where free vegetarian meals are served to every visitor, regardless of faith, caste, or background — a living expression of equality and selfless service (seva).',
          pa: 'ਸਾਂਝਾ ਭੋਜਨ ਹਾਲ ਜਿੱਥੇ ਹਰ ਸੈਲਾਨੀ ਨੂੰ, ਧਰਮ, ਜਾਤ ਜਾਂ ਪਿਛੋਕੜ ਦੀ ਪਰਵਾਹ ਕੀਤੇ ਬਿਨਾਂ, ਮੁਫ਼ਤ ਸ਼ਾਕਾਹਾਰੀ ਭੋਜਨ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ — ਬਰਾਬਰੀ ਅਤੇ ਸੇਵਾ ਦਾ ਜੀਵੰਤ ਪ੍ਰਗਟਾਵਾ।',
        },
      },
      {
        name: { en: 'Shoe room', pa: 'ਜੋੜਾ ਘਰ' },
        description: {
          en: 'The area near the entrance (Joda Ghar) where visitors remove and store their footwear before entering the gurdwara, as a sign of respect and cleanliness.',
          pa: 'ਪ੍ਰਵੇਸ਼ ਦੁਆਰ ਦੇ ਨੇੜੇ ਦਾ ਸਥਾਨ (ਜੋੜਾ ਘਰ) ਜਿੱਥੇ ਸੈਲਾਨੀ ਗੁਰਦੁਆਰੇ ਵਿੱਚ ਦਾਖਲ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਆਪਣੇ ਜੁੱਤੇ ਉਤਾਰਦੇ ਹਨ।',
        },
      },
    ],
    etiquetteTitle: { en: 'Etiquette', pa: 'ਮਰਯਾਦਾ' },
    etiquette: [
      {
        title: { en: 'Dress modestly', pa: 'ਸਾਦਗੀ ਨਾਲ ਪਹਿਰਾਵਾ' },
        description: { en: 'Cover shoulders and legs; avoid overly casual, tight, or revealing clothing.', pa: 'ਮੋਢੇ ਅਤੇ ਲੱਤਾਂ ਢੱਕੋ; ਬਹੁਤ ਜ਼ਿਆਦਾ ਆਮ, ਤੰਗ ਜਾਂ ਖੁੱਲ੍ਹੇ ਕੱਪੜਿਆਂ ਤੋਂ ਬਚੋ।' },
      },
      {
        title: { en: 'Remove socks in the Darbar Sahib', pa: 'ਦਰਬਾਰ ਸਾਹਿਬ ਵਿੱਚ ਜ਼ੁਰਾਬਾਂ ਉਤਾਰੋ' },
        description: { en: 'In the main Diwan Hall, shoes and socks are typically both removed; practice can vary slightly by gurdwara, so follow local signage.', pa: 'ਮੁੱਖ ਦੀਵਾਨ ਹਾਲ ਵਿੱਚ ਆਮ ਤੌਰ ਤੇ ਜੁੱਤੇ ਅਤੇ ਜ਼ੁਰਾਬਾਂ ਦੋਵੇਂ ਉਤਾਰੇ ਜਾਂਦੇ ਹਨ; ਇਹ ਗੁਰਦੁਆਰੇ ਅਨੁਸਾਰ ਥੋੜ੍ਹਾ ਵੱਖਰਾ ਹੋ ਸਕਦਾ ਹੈ।' },
      },
      {
        title: { en: 'Wash hands before langar and before seconds', pa: 'ਲੰਗਰ ਤੋਂ ਪਹਿਲਾਂ ਅਤੇ ਦੁਬਾਰਾ ਲੈਣ ਤੋਂ ਪਹਿਲਾਂ ਹੱਥ ਧੋਵੋ' },
        description: { en: 'Wash your hands before eating in the langar hall, and again before returning for a second helping.', pa: 'ਲੰਗਰ ਹਾਲ ਵਿੱਚ ਖਾਣ ਤੋਂ ਪਹਿਲਾਂ ਹੱਥ ਧੋਵੋ, ਅਤੇ ਦੁਬਾਰਾ ਭੋਜਨ ਲੈਣ ਤੋਂ ਪਹਿਲਾਂ ਵੀ।' },
      },
      {
        title: { en: 'Wash hands after the washroom', pa: 'ਵਾਸ਼ਰੂਮ ਤੋਂ ਬਾਅਦ ਹੱਥ ਧੋਵੋ' },
        description: { en: 'Wash hands thoroughly after using the washroom, before returning to any communal area.', pa: 'ਵਾਸ਼ਰੂਮ ਵਰਤਣ ਤੋਂ ਬਾਅਦ ਕਿਸੇ ਵੀ ਸਾਂਝੇ ਸਥਾਨ ਤੇ ਵਾਪਸ ਆਉਣ ਤੋਂ ਪਹਿਲਾਂ ਚੰਗੀ ਤਰ੍ਹਾਂ ਹੱਥ ਧੋਵੋ।' },
      },
      {
        title: { en: 'Remove shoes in the shoe room', pa: 'ਜੋੜਾ ਘਰ ਵਿੱਚ ਜੁੱਤੇ ਉਤਾਰੋ' },
        description: { en: 'Remove and store footwear in the designated shoe room before entering the gurdwara premises.', pa: 'ਗੁਰਦੁਆਰੇ ਦੇ ਪਰਿਸਰ ਵਿੱਚ ਦਾਖਲ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਨਿਯਤ ਜੋੜਾ ਘਰ ਵਿੱਚ ਜੁੱਤੇ ਉਤਾਰੋ।' },
      },
      {
        title: { en: 'Cover your head throughout the premises', pa: 'ਪੂਰੇ ਪਰਿਸਰ ਵਿੱਚ ਸਿਰ ਢੱਕੋ' },
        description: { en: 'Head covering is required throughout the entire gurdwara premises, not just the Diwan Hall. Head coverings are usually available for visitors who don\'t bring their own.', pa: 'ਸਿਰ ਢੱਕਣਾ ਪੂਰੇ ਗੁਰਦੁਆਰਾ ਪਰਿਸਰ ਵਿੱਚ ਜ਼ਰੂਰੀ ਹੈ, ਸਿਰਫ਼ ਦੀਵਾਨ ਹਾਲ ਵਿੱਚ ਨਹੀਂ। ਜਿਨ੍ਹਾਂ ਕੋਲ ਆਪਣਾ ਨਹੀਂ ਹੈ ਉਨ੍ਹਾਂ ਲਈ ਆਮ ਤੌਰ ਤੇ ਸਿਰ ਢੱਕਣ ਵਾਲੇ ਕੱਪੜੇ ਉਪਲਬਧ ਹੁੰਦੇ ਹਨ।' },
      },
    ],
    gurusTitle: { en: 'The Ten Gurus', pa: 'ਦਸ ਗੁਰੂ ਸਾਹਿਬਾਨ' },
    gurus: [
      { order: 1, name: { en: 'Guru Nanak Dev Ji', pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ' }, years: '1469 – 1539', summary: { en: 'Founder of Sikhi. Born in Talwandi (now Nankana Sahib, Pakistan), he taught belief in one formless God, rejected empty ritual and caste distinction, and undertook long journeys (udasis) sharing this message. He established the twin institutions of sangat (congregation) and langar (community kitchen).', pa: 'ਸਿੱਖੀ ਦੇ ਬਾਨੀ। ਤਲਵੰਡੀ (ਹੁਣ ਨਨਕਾਣਾ ਸਾਹਿਬ) ਵਿੱਚ ਜਨਮੇ, ਉਨ੍ਹਾਂ ਨੇ ਇੱਕ ਨਿਰਾਕਾਰ ਪਰਮਾਤਮਾ ਦੀ ਸਿੱਖਿਆ ਦਿੱਤੀ ਅਤੇ ਜਾਤ-ਭੇਦ ਨੂੰ ਰੱਦ ਕੀਤਾ। ਉਨ੍ਹਾਂ ਨੇ ਸੰਗਤ ਅਤੇ ਲੰਗਰ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ।' } },
      { order: 2, name: { en: 'Guru Angad Dev Ji', pa: 'ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ' }, years: '1504 – 1552', summary: { en: 'The second Guru formalized the Gurmukhi script used to write Gurbani, strengthened the langar tradition, and promoted physical fitness and education among Sikhs.', pa: 'ਦੂਜੇ ਗੁਰੂ ਨੇ ਗੁਰਮੁਖੀ ਲਿਪੀ ਨੂੰ ਰਸਮੀ ਰੂਪ ਦਿੱਤਾ, ਲੰਗਰ ਪਰੰਪਰਾ ਨੂੰ ਮਜ਼ਬੂਤ ਕੀਤਾ, ਅਤੇ ਸਰੀਰਕ ਤੰਦਰੁਸਤੀ ਅਤੇ ਸਿੱਖਿਆ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕੀਤਾ।' } },
      { order: 3, name: { en: 'Guru Amar Das Ji', pa: 'ਗੁਰੂ ਅਮਰ ਦਾਸ ਜੀ' }, years: '1479 – 1574', summary: { en: 'The third Guru institutionalized langar so firmly that, according to Sikh tradition, even the Mughal Emperor Akbar sat on the floor to eat before receiving an audience. He opposed sati and purdah, composed Anand Sahib, and organized the growing Sikh community into 22 preaching districts (manjis).', pa: 'ਤੀਜੇ ਗੁਰੂ ਨੇ ਲੰਗਰ ਨੂੰ ਪੱਕੀ ਸੰਸਥਾ ਬਣਾਇਆ। ਉਨ੍ਹਾਂ ਨੇ ਸਤੀ ਅਤੇ ਪਰਦੇ ਦੀ ਪ੍ਰਥਾ ਦਾ ਵਿਰੋਧ ਕੀਤਾ, ਅਨੰਦ ਸਾਹਿਬ ਦੀ ਰਚਨਾ ਕੀਤੀ, ਅਤੇ ਸੰਗਤ ਨੂੰ 22 ਮੰਜੀਆਂ ਵਿੱਚ ਸੰਗਠਿਤ ਕੀਤਾ।' } },
      { order: 4, name: { en: 'Guru Ram Das Ji', pa: 'ਗੁਰੂ ਰਾਮ ਦਾਸ ਜੀ' }, years: '1534 – 1581', summary: { en: 'The fourth Guru founded the city of Amritsar and excavated its sacred pool, around which Sri Harmandir Sahib would later be built. He composed the Lavan hymns used in the Anand Karaj, the Sikh wedding ceremony.', pa: 'ਚੌਥੇ ਗੁਰੂ ਨੇ ਅੰਮ੍ਰਿਤਸਰ ਸ਼ਹਿਰ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ ਅਤੇ ਇਸਦਾ ਪਵਿੱਤਰ ਸਰੋਵਰ ਪੁੱਟਿਆ। ਉਨ੍ਹਾਂ ਨੇ ਲਾਵਾਂ ਦੀ ਰਚਨਾ ਕੀਤੀ, ਜੋ ਅਨੰਦ ਕਾਰਜ ਵਿੱਚ ਵਰਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ।' } },
      { order: 5, name: { en: 'Guru Arjan Dev Ji', pa: 'ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ' }, years: '1563 – 1606', summary: { en: 'The fifth Guru compiled the Adi Granth in 1604 — the first version of what would become Guru Granth Sahib Ji — and completed the construction of Sri Harmandir Sahib. He became the first Sikh martyr, executed by Mughal Emperor Jahangir in 1606.', pa: 'ਪੰਜਵੇਂ ਗੁਰੂ ਨੇ 1604 ਵਿੱਚ ਆਦਿ ਗ੍ਰੰਥ ਤਿਆਰ ਕੀਤਾ ਅਤੇ ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਦੀ ਉਸਾਰੀ ਪੂਰੀ ਕੀਤੀ। ਉਹ ਪਹਿਲੇ ਸਿੱਖ ਸ਼ਹੀਦ ਬਣੇ, 1606 ਵਿੱਚ ਬਾਦਸ਼ਾਹ ਜਹਾਂਗੀਰ ਦੁਆਰਾ ਸ਼ਹੀਦ ਕੀਤੇ ਗਏ।' } },
      { order: 6, name: { en: 'Guru Hargobind Sahib Ji', pa: 'ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ' }, years: '1595 – 1644', summary: { en: 'The sixth Guru introduced the principle of Miri-Piri — temporal and spiritual authority held together — wearing two swords and building the Akal Takht, in direct response to Mughal persecution of his father.', pa: 'ਛੇਵੇਂ ਗੁਰੂ ਨੇ ਮੀਰੀ-ਪੀਰੀ ਦਾ ਸਿਧਾਂਤ ਪੇਸ਼ ਕੀਤਾ, ਦੋ ਤਲਵਾਰਾਂ ਪਹਿਨੀਆਂ ਅਤੇ ਅਕਾਲ ਤਖ਼ਤ ਬਣਾਇਆ।' } },
      { order: 7, name: { en: 'Guru Har Rai Ji', pa: 'ਗੁਰੂ ਹਰਿ ਰਾਇ ਜੀ' }, years: '1630 – 1661', summary: { en: 'The seventh Guru was known for compassion, maintained a large but non-aggressive army, and established herbal medicine dispensaries, while carefully avoiding direct conflict with the Mughal state.', pa: 'ਸੱਤਵੇਂ ਗੁਰੂ ਦਇਆ ਲਈ ਜਾਣੇ ਜਾਂਦੇ ਸਨ, ਇੱਕ ਵੱਡੀ ਪਰ ਗ਼ੈਰ-ਹਮਲਾਵਰ ਫ਼ੌਜ ਰੱਖੀ, ਅਤੇ ਜੜੀ-ਬੂਟੀਆਂ ਦੇ ਦਵਾਖ਼ਾਨੇ ਸਥਾਪਿਤ ਕੀਤੇ।' } },
      { order: 8, name: { en: 'Guru Har Krishan Ji', pa: 'ਗੁਰੂ ਹਰਿ ਕ੍ਰਿਸ਼ਨ ਜੀ' }, years: '1656 – 1664', summary: { en: 'The eighth Guru became Guru at age five, the youngest of the ten. He is remembered for serving and healing the sick during a smallpox epidemic in Delhi, before succumbing to the illness himself at age eight.', pa: 'ਅੱਠਵੇਂ ਗੁਰੂ ਪੰਜ ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਗੁਰੂ ਬਣੇ। ਦਿੱਲੀ ਵਿੱਚ ਚੇਚਕ ਦੀ ਮਹਾਂਮਾਰੀ ਦੌਰਾਨ ਬਿਮਾਰਾਂ ਦੀ ਸੇਵਾ ਕਰਦੇ ਹੋਏ, ਅੱਠ ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਖ਼ੁਦ ਇਸ ਬਿਮਾਰੀ ਨਾਲ ਜੋਤੀ ਜੋਤ ਸਮਾ ਗਏ।' } },
      { order: 9, name: { en: 'Guru Tegh Bahadur Ji', pa: 'ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ' }, years: '1621 – 1675', summary: { en: 'The ninth Guru, known as "Hind di Chadar" (Shield of India), sacrificed his life to defend the religious freedom of Kashmiri Pandits who sought his protection. He was executed by Emperor Aurangzeb in Delhi in 1675 for refusing to convert to Islam and for upholding others\' right to practice their own faith.', pa: 'ਨੌਵੇਂ ਗੁਰੂ, "ਹਿੰਦ ਦੀ ਚਾਦਰ" ਵਜੋਂ ਜਾਣੇ ਜਾਂਦੇ, ਨੇ ਕਸ਼ਮੀਰੀ ਪੰਡਿਤਾਂ ਦੀ ਧਾਰਮਿਕ ਆਜ਼ਾਦੀ ਦੀ ਰਾਖੀ ਲਈ ਆਪਣੀ ਜਾਨ ਵਾਰੀ। 1675 ਵਿੱਚ ਦਿੱਲੀ ਵਿੱਚ ਬਾਦਸ਼ਾਹ ਔਰੰਗਜ਼ੇਬ ਦੁਆਰਾ ਸ਼ਹੀਦ ਕੀਤੇ ਗਏ।' } },
      { order: 10, name: { en: 'Guru Gobind Singh Ji', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ' }, years: '1666 – 1708', summary: { en: 'The tenth Guru founded the Khalsa on Vaisakhi 1699, gave Sikhs the Panj Kakaar and the names Singh and Kaur, and compiled the final version of Guru Granth Sahib Ji at Damdama Sahib. Before his passing in 1708, he declared Guru Granth Sahib Ji the eternal, living Guru of the Sikhs.', pa: 'ਦਸਵੇਂ ਗੁਰੂ ਨੇ ਵਿਸਾਖੀ 1699 ਨੂੰ ਖ਼ਾਲਸੇ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ, ਸਿੱਖਾਂ ਨੂੰ ਪੰਜ ਕਕਾਰ ਅਤੇ ਸਿੰਘ-ਕੌਰ ਨਾਮ ਦਿੱਤੇ। 1708 ਵਿੱਚ ਆਪਣੇ ਜੋਤੀ ਜੋਤ ਸਮਾਉਣ ਤੋਂ ਪਹਿਲਾਂ, ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਨੂੰ ਸਦੀਵੀ ਜੀਵੰਤ ਗੁਰੂ ਐਲਾਨਿਆ।' } },
    ],
    sahibzaadeTitle: { en: 'The Four Sahibzaade', pa: 'ਚਾਰ ਸਾਹਿਬਜ਼ਾਦੇ' },
    sahibzaade: [
      { name: { en: 'Baba Ajit Singh Ji', pa: 'ਬਾਬਾ ਅਜੀਤ ਸਿੰਘ ਜੀ' }, years: '1687 – 1704', summary: { en: 'The eldest son of Guru Gobind Singh Ji, he attained shaheedi fighting at the Battle of Chamkaur Sahib in December 1704, alongside his younger brother.', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਸਭ ਤੋਂ ਵੱਡੇ ਪੁੱਤਰ, ਦਸੰਬਰ 1704 ਵਿੱਚ ਚਮਕੌਰ ਸਾਹਿਬ ਦੀ ਜੰਗ ਵਿੱਚ ਸ਼ਹੀਦੀ ਪਾਈ।' } },
      { name: { en: 'Baba Jujhar Singh Ji', pa: 'ਬਾਬਾ ਜੁਝਾਰ ਸਿੰਘ ਜੀ' }, years: '1691 – 1704', summary: { en: 'The second son, he fought and attained shaheedi at the Battle of Chamkaur Sahib alongside his elder brother, facing overwhelming Mughal forces.', pa: 'ਦੂਜੇ ਪੁੱਤਰ, ਆਪਣੇ ਵੱਡੇ ਭਰਾ ਦੇ ਨਾਲ ਚਮਕੌਰ ਸਾਹਿਬ ਦੀ ਜੰਗ ਵਿੱਚ ਲੜਦੇ ਹੋਏ ਸ਼ਹੀਦੀ ਪਾਈ।' } },
      { name: { en: 'Baba Zorawar Singh Ji', pa: 'ਬਾਬਾ ਜ਼ੋਰਾਵਰ ਸਿੰਘ ਜੀ' }, years: '1696 – 1705', summary: { en: 'The third son, separated from Guru Gobind Singh Ji during the evacuation of Anandpur Sahib, was captured along with his younger brother and grandmother Mata Gujri Ji. Sikh tradition holds that he was martyred at Sirhind in December 1705, at age nine, for refusing to renounce his faith.', pa: 'ਤੀਜੇ ਪੁੱਤਰ, ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਦੀ ਨਿਕਾਸੀ ਦੌਰਾਨ ਵੱਖ ਹੋ ਗਏ, ਆਪਣੇ ਛੋਟੇ ਭਰਾ ਅਤੇ ਦਾਦੀ ਮਾਤਾ ਗੁਜਰੀ ਜੀ ਨਾਲ ਫੜੇ ਗਏ। ਸਿੱਖ ਪਰੰਪਰਾ ਅਨੁਸਾਰ, ਦਸੰਬਰ 1705 ਵਿੱਚ ਸਰਹਿੰਦ ਵਿਖੇ 9 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਸ਼ਹੀਦ ਕੀਤੇ ਗਏ।' } },
      { name: { en: 'Baba Fateh Singh Ji', pa: 'ਬਾਬਾ ਫ਼ਤਿਹ ਸਿੰਘ ਜੀ' }, years: '1699 – 1705', summary: { en: 'The youngest son, captured alongside his brother and grandmother, was martyred with Baba Zorawar Singh Ji at Sirhind at age six, also for refusing to renounce his faith.', pa: 'ਸਭ ਤੋਂ ਛੋਟੇ ਪੁੱਤਰ, ਆਪਣੇ ਭਰਾ ਅਤੇ ਦਾਦੀ ਨਾਲ ਫੜੇ ਗਏ, ਬਾਬਾ ਜ਼ੋਰਾਵਰ ਸਿੰਘ ਜੀ ਦੇ ਨਾਲ ਸਰਹਿੰਦ ਵਿਖੇ 6 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਸ਼ਹੀਦ ਕੀਤੇ ਗਏ।' } },
    ],
    kakaarsTitle: { en: 'The Five Kakaar', pa: 'ਪੰਜ ਕਕਾਰ' },
    kakaarsIntro: {
      en: 'The five articles of faith given by Guru Gobind Singh Ji to every initiated Khalsa Sikh on Vaisakhi 1699, worn at all times.',
      pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੁਆਰਾ ਵਿਸਾਖੀ 1699 ਨੂੰ ਹਰ ਅੰਮ੍ਰਿਤਧਾਰੀ ਖ਼ਾਲਸਾ ਸਿੱਖ ਨੂੰ ਦਿੱਤੀਆਂ ਪੰਜ ਨਿਸ਼ਾਨੀਆਂ, ਜੋ ਹਰ ਸਮੇਂ ਪਹਿਨੀਆਂ ਜਾਂਦੀਆਂ ਹਨ।',
    },
    kakaars: [
      { name: { en: 'ਕੇਸ', pa: 'ਕੇਸ' }, meaning: { en: 'Uncut hair', pa: 'ਬਿਨਾਂ ਕੱਟੇ ਵਾਲ' }, description: { en: 'Symbolizes acceptance of God\'s will and the Creator\'s natural design, and a life of spiritual devotion.', pa: 'ਪਰਮਾਤਮਾ ਦੀ ਰਜ਼ਾ ਅਤੇ ਕੁਦਰਤੀ ਸਿਰਜਣਾ ਨੂੰ ਸਵੀਕਾਰ ਕਰਨ ਦਾ ਪ੍ਰਤੀਕ।' } },
      { name: { en: 'ਕੰਘਾ', pa: 'ਕੰਘਾ' }, meaning: { en: 'Wooden comb', pa: 'ਲੱਕੜ ਦੀ ਕੰਘੀ' }, description: { en: 'Symbolizes cleanliness and discipline, used to keep the kesh tidy.', pa: 'ਸਫ਼ਾਈ ਅਤੇ ਅਨੁਸ਼ਾਸਨ ਦਾ ਪ੍ਰਤੀਕ, ਕੇਸਾਂ ਨੂੰ ਸੰਵਾਰਨ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।' } },
      { name: { en: 'ਕੜਾ', pa: 'ਕੜਾ' }, meaning: { en: 'Steel bracelet', pa: 'ਸਟੀਲ ਦਾ ਕੜਾ' }, description: { en: 'Symbolizes restraint from wrongdoing and an unbroken bond with the Guru.', pa: 'ਗ਼ਲਤ ਕੰਮਾਂ ਤੋਂ ਸੰਜਮ ਅਤੇ ਗੁਰੂ ਨਾਲ ਅਟੁੱਟ ਸੰਬੰਧ ਦਾ ਪ੍ਰਤੀਕ।' } },
      { name: { en: 'ਕਛਹਿਰਾ', pa: 'ਕਛਹਿਰਾ' }, meaning: { en: 'Cotton undergarment', pa: 'ਸੂਤੀ ਅੰਦਰੂਨੀ ਵਸਤਰ' }, description: { en: 'Symbolizes self-control, moral character, and readiness for action.', pa: 'ਸੰਜਮ, ਨੈਤਿਕ ਕਿਰਦਾਰ ਅਤੇ ਕਾਰਵਾਈ ਲਈ ਤਿਆਰੀ ਦਾ ਪ੍ਰਤੀਕ।' } },
      { name: { en: 'ਕਿਰਪਾਨ', pa: 'ਕਿਰਪਾਨ' }, meaning: { en: 'Ceremonial sword', pa: 'ਰਸਮੀ ਤਲਵਾਰ' }, description: { en: 'Symbolizes the duty to defend justice, the oppressed, and righteousness (ਧਰਮ).', pa: 'ਨਿਆਂ, ਦੱਬੇ-ਕੁਚਲਿਆਂ ਅਤੇ ਧਰਮ ਦੀ ਰਾਖੀ ਦੇ ਫ਼ਰਜ਼ ਦਾ ਪ੍ਰਤੀਕ।' } },
    ],
    introTitle: { en: 'Introduction to Sikhi', pa: 'ਸਿੱਖੀ ਦੀ ਜਾਣ-ਪਛਾਣ' },
    whatIsSikhi: {
      en: 'Sikhi is a distinct, monotheistic faith centered on belief in one formless God (ੴ, Ik Onkar) and the teachings of Guru Nanak Dev Ji and the nine Gurus who followed him, culminating in the eternal Guru Granth Sahib Ji.',
      pa: 'ਸਿੱਖੀ ਇੱਕ ਵੱਖਰਾ, ਇੱਕ-ਈਸ਼ਵਰਵਾਦੀ ਧਰਮ ਹੈ, ਜੋ ਇੱਕ ਨਿਰਾਕਾਰ ਪਰਮਾਤਮਾ (ੴ, ਇੱਕ ਓਅੰਕਾਰ) ਅਤੇ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਤੋਂ ਲੈ ਕੇ ਨੌਂ ਹੋਰ ਗੁਰੂ ਸਾਹਿਬਾਨ ਦੀਆਂ ਸਿੱਖਿਆਵਾਂ ਤੇ ਕੇਂਦ੍ਰਿਤ ਹੈ, ਜੋ ਸਦੀਵੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਸਮਾਪਤ ਹੁੰਦਾ ਹੈ।',
    },
    founding: {
      en: 'Sikhi was founded in the Punjab region of South Asia in 1469, with the birth and teachings of Guru Nanak Dev Ji in Talwandi (now Nankana Sahib, Pakistan).',
      pa: 'ਸਿੱਖੀ ਦੀ ਸਥਾਪਨਾ 1469 ਵਿੱਚ ਦੱਖਣੀ ਏਸ਼ੀਆ ਦੇ ਪੰਜਾਬ ਖੇਤਰ ਵਿੱਚ, ਤਲਵੰਡੀ (ਹੁਣ ਨਨਕਾਣਾ ਸਾਹਿਬ, ਪਾਕਿਸਤਾਨ) ਵਿੱਚ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੇ ਜਨਮ ਅਤੇ ਸਿੱਖਿਆਵਾਂ ਨਾਲ ਹੋਈ।',
    },
    sevaSimran: {
      en: 'Seva (selfless service) and simran (remembrance of God through meditation) sit at the heart of daily Sikh practice. Seva dissolves ego by serving others without expectation of reward; simran keeps the mind anchored to the Divine amid worldly life. Together they are considered inseparable — service without remembrance can become mere activity, and remembrance without service can become mere withdrawal.',
      pa: 'ਸੇਵਾ (ਨਿਸ਼ਕਾਮ ਸੇਵਾ) ਅਤੇ ਸਿਮਰਨ (ਸਿਮਰਨ ਰਾਹੀਂ ਪਰਮਾਤਮਾ ਦੀ ਯਾਦ) ਰੋਜ਼ਾਨਾ ਸਿੱਖ ਅਭਿਆਸ ਦੇ ਕੇਂਦਰ ਵਿੱਚ ਹਨ। ਸੇਵਾ ਬਿਨਾਂ ਕਿਸੇ ਇਨਾਮ ਦੀ ਆਸ ਤੋਂ ਦੂਜਿਆਂ ਦੀ ਸੇਵਾ ਕਰਕੇ ਹਉਮੈ ਨੂੰ ਖ਼ਤਮ ਕਰਦੀ ਹੈ; ਸਿਮਰਨ ਮਨ ਨੂੰ ਪਰਮਾਤਮਾ ਨਾਲ ਜੋੜੀ ਰੱਖਦਾ ਹੈ। ਦੋਵੇਂ ਇੱਕ-ਦੂਜੇ ਤੋਂ ਅਟੁੱਟ ਮੰਨੇ ਜਾਂਦੇ ਹਨ।',
    },
    pillarsTitle: { en: 'The Three Pillars', pa: 'ਤਿੰਨ ਥੰਮ੍ਹ' },
    pillars: [
      {
        term: { en: 'ਨਾਮ ਜਪਣਾ', pa: 'ਨਾਮ ਜਪਣਾ' },
        description: { en: 'Naam Japna — meditating on and remembering God\'s name, keeping the Divine present in every thought and action.', pa: 'ਨਾਮ ਜਪਣਾ — ਪਰਮਾਤਮਾ ਦੇ ਨਾਮ ਦਾ ਸਿਮਰਨ ਕਰਨਾ, ਹਰ ਸੋਚ ਅਤੇ ਕਾਰਜ ਵਿੱਚ ਪਰਮਾਤਮਾ ਨੂੰ ਹਾਜ਼ਰ ਰੱਖਣਾ।' },
      },
      {
        term: { en: 'ਵੰਡ ਕੇ ਛਕਣਾ', pa: 'ਵੰਡ ਕੇ ਛਕਣਾ' },
        description: { en: 'Vand Ke Chhakna — sharing what one has with others, most visibly expressed through langar.', pa: 'ਵੰਡ ਕੇ ਛਕਣਾ — ਆਪਣੀ ਕਮਾਈ ਦੂਜਿਆਂ ਨਾਲ ਵੰਡਣਾ, ਜੋ ਸਭ ਤੋਂ ਵੱਧ ਲੰਗਰ ਰਾਹੀਂ ਦਿਖਾਈ ਦਿੰਦਾ ਹੈ।' },
      },
      {
        term: { en: 'ਕਿਰਤ ਕਰਨੀ', pa: 'ਕਿਰਤ ਕਰਨੀ' },
        description: { en: 'Kirat Karni — earning an honest living through honest work, rejecting exploitation or dependence.', pa: 'ਕਿਰਤ ਕਰਨੀ — ਇਮਾਨਦਾਰ ਮਿਹਨਤ ਰਾਹੀਂ ਸੱਚੀ ਕਮਾਈ ਕਰਨੀ, ਸ਼ੋਸ਼ਣ ਜਾਂ ਨਿਰਭਰਤਾ ਨੂੰ ਰੱਦ ਕਰਨਾ।' },
      },
    ],
    gurbaniTitle: { en: 'Gurbani', pa: 'ਗੁਰਬਾਣੀ' },
    gurbaniIntro: {
      en: 'Four widely-known shabad from Sri Guru Granth Sahib Ji, chosen for their universally standardized text and Ang across printed editions. This display could not reach the live BaniDB API for programmatic cross-verification in this environment — the text below should still be checked against banidb.com by a scholar reviewer before being treated as authoritative.',
      pa: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਤੋਂ ਚਾਰ ਵਿਆਪਕ ਤੌਰ ਤੇ ਜਾਣੇ-ਪਛਾਣੇ ਸ਼ਬਦ, ਜੋ ਛਾਪੇ ਸੰਸਕਰਣਾਂ ਵਿੱਚ ਸਰਵ ਵਿਆਪਕ ਤੌਰ ਤੇ ਮਿਆਰੀ ਪਾਠ ਅਤੇ ਅੰਗ ਲਈ ਚੁਣੇ ਗਏ ਹਨ। ਇਸ ਵਾਤਾਵਰਣ ਵਿੱਚ BaniDB ਨਾਲ ਸਿੱਧੀ ਪੁਸ਼ਟੀ ਸੰਭਵ ਨਹੀਂ ਸੀ — ਹੇਠਲਾ ਪਾਠ ਵਿਦਵਤ ਸਮੀਖਿਅਕ ਦੁਆਰਾ banidb.com ਨਾਲ ਜਾਂਚਿਆ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ।',
    },
    shabads: [
      {
        gurmukhi: 'ੴ ਸਤਿ ਨਾਮੁ ਕਰਤਾ ਪੁਰਖੁ ਨਿਰਭਉ ਨਿਰਵੈਰੁ ਅਕਾਲ ਮੂਰਤਿ ਅਜੂਨੀ ਸੈਭੰ ਗੁਰ ਪ੍ਰਸਾਦਿ ॥',
        translation: { en: 'One Universal Creator. Truth is the Name. Creative Being, without fear, without hatred. Image of the Undying, beyond birth, self-existent. Known by the Guru\'s grace.', pa: 'ਇੱਕ ਸਰਬ-ਵਿਆਪਕ ਸਿਰਜਣਹਾਰ। ਸਤਿ ਹੀ ਨਾਮ ਹੈ। ਸਿਰਜਣਹਾਰ, ਭੈ ਤੋਂ ਰਹਿਤ, ਵੈਰ ਤੋਂ ਰਹਿਤ। ਅਕਾਲ ਮੂਰਤਿ, ਜਨਮ ਤੋਂ ਪਰ੍ਹੇ, ਸੈਭੰ। ਗੁਰੂ ਦੀ ਕਿਰਪਾ ਨਾਲ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ।' },
        ang: 1,
        raag: 'None (Mool Mantar, opening of Japji Sahib)',
        author: { en: 'Guru Nanak Dev Ji', pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ' },
        verificationNote: {
          en: 'The Mool Mantar universally opens every printed edition of Guru Granth Sahib Ji at Ang 1 — pending final BaniDB cross-check.',
          pa: 'ਮੂਲ ਮੰਤਰ ਹਰ ਛਾਪੇ ਸੰਸਕਰਣ ਵਿੱਚ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੇ ਅੰਗ 1 ਤੇ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ — ਅੰਤਿਮ BaniDB ਜਾਂਚ ਬਾਕੀ ਹੈ।',
        },
      },
      {
        gurmukhi: 'ਸੋ ਦਰੁ ਤੇਰਾ ਕੇਹਾ ਸੋ ਘਰੁ ਕੇਹਾ ਜਿਤੁ ਬਹਿ ਸਰਬ ਸਮਾਲੇ ॥',
        translation: { en: 'Where is that Gate of Yours, and where is that Home, in which You sit and take care of all?', pa: 'ਉਹ ਦਰਵਾਜ਼ਾ ਕਿਹੋ ਜਿਹਾ ਹੈ, ਉਹ ਘਰ ਕਿਹੋ ਜਿਹਾ ਹੈ, ਜਿੱਥੇ ਬੈਠ ਕੇ ਤੂੰ ਸਭ ਦੀ ਸੰਭਾਲ ਕਰਦਾ ਹੈਂ?' },
        ang: 8,
        raag: 'Raag Asa',
        author: { en: 'Guru Nanak Dev Ji', pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ' },
        verificationNote: {
          en: 'Opening line of So Dar, part of the daily Rehras Sahib recitation — pending final BaniDB cross-check.',
          pa: 'ਸੋ ਦਰੁ ਦੀ ਪਹਿਲੀ ਪੰਕਤੀ, ਰੋਜ਼ਾਨਾ ਰਹਿਰਾਸ ਸਾਹਿਬ ਦਾ ਹਿੱਸਾ — ਅੰਤਿਮ BaniDB ਜਾਂਚ ਬਾਕੀ ਹੈ।',
        },
      },
      {
        gurmukhi: 'ਜੈ ਘਰਿ ਕੀਰਤਿ ਆਖੀਐ ਕਰਤੇ ਕਾ ਹੋਇ ਬੀਚਾਰੋ ॥ ਤਿਤੁ ਘਰਿ ਗਾਵਹੁ ਸੋਹਿਲਾ ਸਿਵਰਿਹੁ ਸਿਰਜਣਹਾਰੋ ॥੧॥',
        translation: { en: 'In that house where the Creator\'s praises are spoken and reflected upon — in that house, sing the song of joy, and remember the Creator Lord. ||1||', pa: 'ਜਿਸ ਘਰ ਵਿੱਚ ਕਰਤੇ ਦੀ ਕੀਰਤੀ ਆਖੀ ਅਤੇ ਵਿਚਾਰੀ ਜਾਵੇ — ਉਸ ਘਰ ਵਿੱਚ ਸੋਹਿਲਾ ਗਾਓ, ਸਿਰਜਣਹਾਰ ਨੂੰ ਯਾਦ ਕਰੋ। ॥੧॥' },
        ang: 12,
        raag: 'Raag Gauri Deepki',
        author: { en: 'Guru Nanak Dev Ji', pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ' },
        verificationNote: {
          en: 'Opening verse of Kirtan Sohila, the evening prayer recited before sleep — pending final BaniDB cross-check.',
          pa: 'ਕੀਰਤਨ ਸੋਹਿਲਾ ਦੀ ਪਹਿਲੀ ਤੁਕ, ਸੌਣ ਤੋਂ ਪਹਿਲਾਂ ਪੜ੍ਹੀ ਜਾਂਦੀ ਸ਼ਾਮ ਦੀ ਅਰਦਾਸ — ਅੰਤਿਮ BaniDB ਜਾਂਚ ਬਾਕੀ ਹੈ।',
        },
      },
      {
        gurmukhi: 'ਅਨੰਦੁ ਭਇਆ ਮੇਰੀ ਮਾਏ ਸਤਿਗੁਰੂ ਮੈ ਪਾਇਆ ॥ ਸਤਿਗੁਰੁ ਤ ਪਾਇਆ ਸਹਜ ਸੇਤੀ ਮਨਿ ਵਜੀਆ ਵਾਧਾਈਆ ॥',
        translation: { en: 'I am in bliss, O my mother, for I have found my True Guru. I have found the True Guru with intuitive ease, and my mind vibrates with the music of celebration.', pa: 'ਅਨੰਦ ਹੋਇਆ ਹੈ, ਮੇਰੀਏ ਮਾਏ, ਮੈਂ ਸਤਿਗੁਰੂ ਪਾ ਲਿਆ ਹੈ। ਸਤਿਗੁਰੂ ਸਹਿਜ ਨਾਲ ਪਾਇਆ, ਮਨ ਵਿੱਚ ਵਧਾਈਆਂ ਵੱਜੀਆਂ।' },
        ang: 917,
        raag: 'Raag Ramkali',
        author: { en: 'Guru Amar Das Ji', pa: 'ਗੁਰੂ ਅਮਰ ਦਾਸ ਜੀ' },
        verificationNote: {
          en: 'Opening verse of Anand Sahib — pending final BaniDB cross-check.',
          pa: 'ਅਨੰਦ ਸਾਹਿਬ ਦੀ ਪਹਿਲੀ ਤੁਕ — ਅੰਤਿਮ BaniDB ਜਾਂਚ ਬਾਕੀ ਹੈ।',
        },
      },
    ],
  },
  quiz: {
    intro: { en: 'Quick, polished recall rounds help visitors reinforce names, places, and significance before moving on.', pa: 'ਛੋਟੇ ਨਿੱਖਰੇ ਯਾਦਗਾਰੀ ਰਾਊਂਡ ਨਾਮਾਂ, ਥਾਵਾਂ ਅਤੇ ਮਹੱਤਵ ਨੂੰ ਅੱਗੇ ਵਧਣ ਤੋਂ ਪਹਿਲਾਂ ਮਜ਼ਬੂਤ ਕਰਦੇ ਹਨ।' },
    questionsPerRound: 5,
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
      {
        prompt: { en: 'What is the name of the initiation ceremony created on Vaisakhi 1699?', pa: '1699 ਦੀ ਵਿਸਾਖੀ ਨੂੰ ਸ਼ੁਰੂ ਕੀਤੇ ਦੀਖਿਆ ਸਮਾਰੋਹ ਦਾ ਨਾਮ ਕੀ ਹੈ?' },
        options: [
          { en: 'Anand Karaj', pa: 'ਅਨੰਦ ਕਾਰਜ' },
          { en: 'Khande-di-Pahul', pa: 'ਖੰਡੇ ਦੀ ਪਾਹੁਲ' },
          { en: 'Ardas', pa: 'ਅਰਦਾਸ' },
        ],
        correctIndex: 1,
        insight: { en: 'Khande-di-Pahul is the Amrit ceremony where double-edged sword (khanda) stirs Amrit in an iron bowl.', pa: 'ਖੰਡੇ ਦੀ ਪਾਹੁਲ ਅੰਮ੍ਰਿਤ ਸਮਾਰੋਹ ਹੈ ਜਿੱਥੇ ਦੋ-ਧਾਰੀ ਖੰਡਾ ਲੋਹੇ ਦੇ ਬਾਟੇ ਵਿੱਚ ਅੰਮ੍ਰਿਤ ਨੂੰ ਹਿਲਾਉਂਦਾ ਹੈ।' },
      },
      {
        prompt: { en: 'Bhai Himmat Singh Ji came from which city?', pa: 'ਭਾਈ ਹਿੰਮਤ ਸਿੰਘ ਜੀ ਕਿਸ ਸ਼ਹਿਰ ਤੋਂ ਆਏ ਸਨ?' },
        options: [
          { en: 'Lahore', pa: 'ਲਾਹੌਰ' },
          { en: 'Dwarka', pa: 'ਦਵਾਰਕਾ' },
          { en: 'Jagannath Puri', pa: 'ਜਗਨਨਾਥ ਪੁਰੀ' },
        ],
        correctIndex: 2,
        insight: { en: 'Bhai Himmat Singh Ji traveled from Jagannath Puri in Odisha to serve at Guru Ka Langar in Anandpur Sahib.', pa: 'ਭਾਈ ਹਿੰਮਤ ਸਿੰਘ ਜੀ ਉੜੀਸਾ ਦੇ ਜਗਨਨਾਥ ਪੁਰੀ ਤੋਂ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਵਿੱਚ ਗੁਰੂ ਕੇ ਲੰਗਰ ਦੀ ਸੇਵਾ ਕਰਨ ਲਈ ਆਏ ਸਨ।' },
      },
      {
        prompt: { en: 'What letters did Guru Gobind Singh Ji send to Emperor Aurangzeb?', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਔਰੰਗਜ਼ੇਬ ਬਾਦਸ਼ਾਹ ਨੂੰ ਕਿਹੜਾ ਪੱਤਰ ਭੇਜਿਆ?' },
        options: [
          { en: 'Zafarnama', pa: 'ਜ਼ਫ਼ਰਨਾਮਾ' },
          { en: 'Hukamnama', pa: 'ਹੁਕਮਨਾਮਾ' },
          { en: 'Ardas', pa: 'ਅਰਦਾਸ' },
        ],
        correctIndex: 0,
        insight: { en: 'The Zafarnama (Letter of Victory) was carried by Bhai Daya Singh Ji to Aurangzeb in the Deccan.', pa: 'ਜ਼ਫ਼ਰਨਾਮਾ (ਜਿੱਤ ਦਾ ਪੱਤਰ) ਭਾਈ ਦਯਾ ਸਿੰਘ ਜੀ ਦੁਆਰਾ ਦੱਖਣ ਵਿੱਚ ਔਰੰਗਜ਼ੇਬ ਤੱਕ ਪਹੁੰਚਾਇਆ ਗਿਆ।' },
      },
      {
        prompt: { en: 'Which Pyara represented the south of India?', pa: 'ਕਿਹੜੇ ਪਿਆਰੇ ਨੇ ਭਾਰਤ ਦੇ ਦੱਖਣ ਦੀ ਪ੍ਰਤੀਨਿਧਤਾ ਕੀਤੀ?' },
        options: [
          { en: 'Bhai Dharam Singh Ji', pa: 'ਭਾਈ ਧਰਮ ਸਿੰਘ ਜੀ' },
          { en: 'Bhai Mohkam Singh Ji', pa: 'ਭਾਈ ਮੋਹਕਮ ਸਿੰਘ ਜੀ' },
          { en: 'Bhai Sahib Singh Ji', pa: 'ਭਾਈ ਸਾਹਿਬ ਸਿੰਘ ਜੀ' },
        ],
        correctIndex: 2,
        insight: { en: 'Bhai Sahib Singh Ji came from Bidar in Karnataka, representing the southern regions of India.', pa: 'ਭਾਈ ਸਾਹਿਬ ਸਿੰਘ ਜੀ ਕਰਨਾਟਕ ਦੇ ਬੀਦਰ ਤੋਂ ਆਏ, ਭਾਰਤ ਦੇ ਦੱਖਣੀ ਖੇਤਰਾਂ ਦੀ ਪ੍ਰਤੀਨਿਧਤਾ ਕਰਦੇ ਹੋਏ।' },
      },
      {
        prompt: { en: 'Takht Sri Keshgarh Sahib is located in which city?', pa: 'ਤਖ਼ਤ ਸ੍ਰੀ ਕੇਸਗੜ੍ਹ ਸਾਹਿਬ ਕਿਸ ਸ਼ਹਿਰ ਵਿੱਚ ਸਥਿਤ ਹੈ?' },
        options: [
          { en: 'Amritsar', pa: 'ਅੰਮ੍ਰਿਤਸਰ' },
          { en: 'Anandpur Sahib', pa: 'ਅਨੰਦਪੁਰ ਸਾਹਿਬ' },
          { en: 'Nanded', pa: 'ਨਾਂਦੇੜ' },
        ],
        correctIndex: 1,
        insight: { en: 'Keshgarh Sahib is in Anandpur Sahib, the fortress-city where the Khalsa was created.', pa: 'ਕੇਸਗੜ੍ਹ ਸਾਹਿਬ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਵਿੱਚ ਹੈ, ਉਹ ਕਿਲ੍ਹਾ-ਨਗਰੀ ਜਿੱਥੇ ਖ਼ਾਲਸੇ ਦੀ ਸਿਰਜਣਾ ਹੋਈ।' },
      },
      {
        prompt: { en: 'What was Bhai Daya Singh Ji\'s birth name?', pa: 'ਭਾਈ ਦਯਾ ਸਿੰਘ ਜੀ ਦਾ ਜਨਮ ਨਾਮ ਕੀ ਸੀ?' },
        options: [
          { en: 'Daya Ram', pa: 'ਦਇਆ ਰਾਮ' },
          { en: 'Dharam Das', pa: 'ਧਰਮ ਦਾਸ' },
          { en: 'Himmat Rai', pa: 'ਹਿੰਮਤ ਰਾਏ' },
        ],
        correctIndex: 0,
        insight: { en: 'Bhai Daya Singh Ji was born as Daya Ram in Lahore. The Guru gave him the name Daya Singh Ji.', pa: 'ਭਾਈ ਦਯਾ ਸਿੰਘ ਜੀ ਦਾ ਜਨਮ ਲਾਹੌਰ ਵਿੱਚ ਦਇਆ ਰਾਮ ਵਜੋਂ ਹੋਇਆ। ਗੁਰੂ ਜੀ ਨੇ ਉਨ੍ਹਾਂ ਨੂੰ ਦਯਾ ਸਿੰਘ ਜੀ ਦਾ ਨਾਮ ਦਿੱਤਾ।' },
      },
      {
        prompt: { en: 'Which Takht is the birthplace of Guru Gobind Singh Ji?', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦਾ ਜਨਮ ਅਸਥਾਨ ਕਿਹੜਾ ਤਖ਼ਤ ਹੈ?' },
        options: [
          { en: 'Takht Sri Hazur Sahib', pa: 'ਤਖ਼ਤ ਸ੍ਰੀ ਹਜ਼ੂਰ ਸਾਹਿਬ' },
          { en: 'Takht Sri Damdama Sahib', pa: 'ਤਖ਼ਤ ਸ੍ਰੀ ਦਮਦਮਾ ਸਾਹਿਬ' },
          { en: 'Takht Sri Patna Sahib', pa: 'ਤਖ਼ਤ ਸ੍ਰੀ ਪਟਨਾ ਸਾਹਿਬ' },
        ],
        correctIndex: 2,
        insight: { en: 'Guru Gobind Singh Ji (born Gobind Rai) was born in Patna, Bihar in December 1666.', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ (ਜਨਮ ਨਾਮ ਗੋਬਿੰਦ ਰਾਏ) ਦਾ ਜਨਮ ਦਸੰਬਰ 1666 ਵਿੱਚ ਪਟਨਾ, ਬਿਹਾਰ ਵਿੱਚ ਹੋਇਆ।' },
      },
      {
        prompt: { en: 'What occupation did Bhai Mohkam Singh Ji have before joining the Khalsa?', pa: 'ਖ਼ਾਲਸੇ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਭਾਈ ਮੋਹਕਮ ਸਿੰਘ ਜੀ ਦਾ ਕਿੱਤਾ ਕੀ ਸੀ?' },
        options: [
          { en: 'Farmer', pa: 'ਕਿਸਾਨ' },
          { en: 'Calico printer and tailor', pa: 'ਛਾਪਾਕਾਰ ਅਤੇ ਦਰਜ਼ੀ' },
          { en: 'Water carrier', pa: 'ਪਾਣੀ ਢੋਣ ਵਾਲਾ' },
        ],
        correctIndex: 1,
        insight: { en: 'Bhai Mohkam Singh Ji was a craftsman — a calico printer and tailor — from Dwarka, Gujarat.', pa: 'ਭਾਈ ਮੋਹਕਮ ਸਿੰਘ ਜੀ ਗੁਜਰਾਤ ਦੇ ਦਵਾਰਕਾ ਤੋਂ ਇੱਕ ਕਾਰੀਗਰ — ਛਾਪਾਕਾਰ ਅਤੇ ਦਰਜ਼ੀ — ਸਨ।' },
      },
      {
        prompt: { en: 'What does the word "Takht" mean in Punjabi?', pa: 'ਪੰਜਾਬੀ ਵਿੱਚ "ਤਖ਼ਤ" ਸ਼ਬਦ ਦਾ ਕੀ ਅਰਥ ਹੈ?' },
        options: [
          { en: 'Sacred river', pa: 'ਪਵਿੱਤਰ ਦਰਿਆ' },
          { en: 'Throne or seat of authority', pa: 'ਸਿੰਘਾਸਣ ਜਾਂ ਅਧਿਕਾਰ ਦਾ ਆਸਣ' },
          { en: 'Holy scripture', pa: 'ਪਵਿੱਤਰ ਗ੍ਰੰਥ' },
        ],
        correctIndex: 1,
        insight: { en: 'Takht means throne or seat of authority. The five Takhts are the supreme seats of Sikh institutional authority.', pa: 'ਤਖ਼ਤ ਦਾ ਅਰਥ ਹੈ ਸਿੰਘਾਸਣ ਜਾਂ ਅਧਿਕਾਰ ਦਾ ਆਸਣ। ਪੰਜ ਤਖ਼ਤ ਸਿੱਖ ਸੰਸਥਾਗਤ ਅਧਿਕਾਰ ਦੇ ਸਰਵੋੱਚ ਆਸਣ ਹਨ।' },
      },
      {
        prompt: { en: 'Bhai Dharam Singh Ji came from which ancient city associated with the Mahabharata?', pa: 'ਭਾਈ ਧਰਮ ਸਿੰਘ ਜੀ ਮਹਾਭਾਰਤ ਨਾਲ ਸੰਬੰਧਿਤ ਕਿਸ ਪੁਰਾਤਨ ਨਗਰੀ ਤੋਂ ਆਏ ਸਨ?' },
        options: [
          { en: 'Hastinapur', pa: 'ਹਸਤਿਨਾਪੁਰ' },
          { en: 'Dwarka', pa: 'ਦਵਾਰਕਾ' },
          { en: 'Puri', pa: 'ਪੁਰੀ' },
        ],
        correctIndex: 0,
        insight: { en: 'Bhai Dharam Singh Ji was from Hastinapur, the legendary capital of the Kaurava kingdom from the Mahabharata.', pa: 'ਭਾਈ ਧਰਮ ਸਿੰਘ ਜੀ ਹਸਤਿਨਾਪੁਰ ਤੋਂ ਸਨ, ਮਹਾਭਾਰਤ ਦੀ ਕੌਰਵ ਰਾਜਧਾਨੀ ਵਜੋਂ ਪ੍ਰਸਿੱਧ ਨਗਰੀ।' },
      },
      {
        prompt: { en: 'What twin principles does Sri Akal Takht Sahib embody?', pa: 'ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ ਕਿਹੜੇ ਦੋਹਰੇ ਸਿਧਾਂਤਾਂ ਦਾ ਰੂਪ ਹੈ?' },
        options: [
          { en: 'Courage and Equality', pa: 'ਹਿੰਮਤ ਅਤੇ ਬਰਾਬਰੀ' },
          { en: 'Miri-Piri (Worldly and Spiritual Authority)', pa: 'ਮੀਰੀ-ਪੀਰੀ (ਸੰਸਾਰਕ ਅਤੇ ਅਧਿਆਤਮਿਕ ਅਧਿਕਾਰ)' },
          { en: 'Prayer and Service', pa: 'ਅਰਦਾਸ ਅਤੇ ਸੇਵਾ' },
        ],
        correctIndex: 1,
        insight: { en: 'Guru Hargobind Sahib Ji established Akal Takht to embody Miri-Piri — the union of worldly sovereignty and spiritual authority.', pa: 'ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ ਨੇ ਮੀਰੀ-ਪੀਰੀ ਦੇ ਰੂਪ ਵਜੋਂ ਅਕਾਲ ਤਖ਼ਤ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ — ਸੰਸਾਰਕ ਪ੍ਰਭੁਸੱਤਾ ਅਤੇ ਅਧਿਆਤਮਿਕ ਅਧਿਕਾਰ ਦਾ ਸੰਯੋਗ।' },
      },
      {
        prompt: { en: 'Which battle did Bhai Himmat Singh Ji attain shaheedi in?', pa: 'ਭਾਈ ਹਿੰਮਤ ਸਿੰਘ ਜੀ ਨੇ ਕਿਹੜੀ ਜੰਗ ਵਿੱਚ ਸ਼ਹੀਦੀ ਪਾਈ?' },
        options: [
          { en: 'Battle of Muktsar', pa: 'ਮੁਕਤਸਰ ਦੀ ਜੰਗ' },
          { en: 'Battle of Chamkaur Sahib', pa: 'ਚਮਕੌਰ ਸਾਹਿਬ ਦੀ ਜੰਗ' },
          { en: 'Battle of Bhangani', pa: 'ਭੰਗਾਣੀ ਦੀ ਜੰਗ' },
        ],
        correctIndex: 1,
        insight: { en: 'Bhai Himmat Singh Ji attained shaheedi at the Battle of Chamkaur Sahib on December 7, 1705.', pa: 'ਭਾਈ ਹਿੰਮਤ ਸਿੰਘ ਜੀ ਨੇ 7 ਦਸੰਬਰ 1705 ਨੂੰ ਚਮਕੌਰ ਸਾਹਿਬ ਦੀ ਜੰਗ ਵਿੱਚ ਸ਼ਹੀਦੀ ਪਾਈ।' },
      },
      {
        prompt: { en: 'Who built the golden-domed structure at Takht Sri Hazur Sahib?', pa: 'ਤਖ਼ਤ ਸ੍ਰੀ ਹਜ਼ੂਰ ਸਾਹਿਬ ਦੀ ਸੁਨਹਿਰੀ-ਗੁੰਬਦ ਵਾਲੀ ਇਮਾਰਤ ਕਿਸਨੇ ਬਣਾਈ?' },
        options: [
          { en: 'Guru Gobind Singh Ji', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ' },
          { en: 'Maharaja Ranjit Singh', pa: 'ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ' },
          { en: 'Banda Singh Bahadur', pa: 'ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ' },
        ],
        correctIndex: 1,
        insight: { en: 'Maharaja Ranjit Singh (Lion of Punjab) commissioned Hazur Sahib between 1832 and 1839.', pa: 'ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ (ਸ਼ੇਰ-ਏ-ਪੰਜਾਬ) ਨੇ 1832 ਤੋਂ 1839 ਦੇ ਵਿਚਕਾਰ ਹਜ਼ੂਰ ਸਾਹਿਬ ਬਣਵਾਇਆ।' },
      },
      {
        prompt: { en: 'What does Damdama Sahib mean?', pa: 'ਦਮਦਮਾ ਸਾਹਿਬ ਦਾ ਕੀ ਅਰਥ ਹੈ?' },
        options: [
          { en: 'Seat of power', pa: 'ਸੱਤਾ ਦਾ ਆਸਣ' },
          { en: 'Resting or breathing place', pa: 'ਵਿਸ਼ਰਾਮ ਜਾਂ ਸਾਹ ਲੈਣ ਦਾ ਸਥਾਨ' },
          { en: 'Birthplace', pa: 'ਜਨਮ ਅਸਥਾਨ' },
        ],
        correctIndex: 1,
        insight: { en: 'Damdama means a resting or breathing place. Guru Gobind Singh Ji rested and restored his sangat here after the devastating battles of 1704-05.', pa: 'ਦਮਦਮਾ ਦਾ ਅਰਥ ਹੈ ਵਿਸ਼ਰਾਮ ਜਾਂ ਸਾਹ ਲੈਣ ਦਾ ਸਥਾਨ। ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ 1704-05 ਦੀਆਂ ਵਿਨਾਸ਼ਕਾਰੀ ਲੜਾਈਆਂ ਤੋਂ ਬਾਅਦ ਇੱਥੇ ਵਿਸ਼ਰਾਮ ਕੀਤਾ।' },
      },
      {
        prompt: { en: 'The Khanda symbol consists of how many elements?', pa: 'ਖੰਡਾ ਚਿੰਨ੍ਹ ਕਿੰਨੇ ਤੱਤਾਂ ਦਾ ਬਣਿਆ ਹੈ?' },
        options: [
          { en: 'Two', pa: 'ਦੋ' },
          { en: 'Three', pa: 'ਤਿੰਨ' },
          { en: 'Four', pa: 'ਚਾਰ' },
        ],
        correctIndex: 2,
        insight: { en: 'The Khanda symbol has four elements: the double-edged khanda in the center, a chakkar (circle), and two kirpans on either side.', pa: 'ਖੰਡਾ ਚਿੰਨ੍ਹ ਦੇ ਚਾਰ ਤੱਤ ਹਨ: ਵਿਚਕਾਰ ਦੋ-ਧਾਰੀ ਖੰਡਾ, ਇੱਕ ਚੱਕਰ, ਅਤੇ ਦੋਵੇਂ ਪਾਸੇ ਦੋ ਕਿਰਪਾਨਾਂ।' },
      },
    ],
  },
  faq: [
    { question: { en: 'What is the Khalsa?', pa: 'ਖ਼ਾਲਸਾ ਕੀ ਹੈ?' }, answer: { en: 'The Khalsa is the initiated Sikh community created by Guru Gobind Singh Ji on Vaisakhi 1699. Members commit to a disciplined, egalitarian spiritual-warrior way of life, wearing five articles of faith (Panj Kakars).', pa: 'ਖ਼ਾਲਸਾ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੁਆਰਾ ਵਿਸਾਖੀ 1699 ਨੂੰ ਬਣਾਈ ਗਈ ਅੰਮ੍ਰਿਤਧਾਰੀ ਸਿੱਖ ਸੰਗਤ ਹੈ।' } },
    { question: { en: 'What is Amrit Sanchar?', pa: 'ਅੰਮ੍ਰਿਤ ਸੰਚਾਰ ਕੀ ਹੈ?' }, answer: { en: 'Amrit Sanchar (also called Khande-di-Pahul) is the Sikh initiation ceremony, where the initiate receives sacred Amrit prepared with the double-edged khanda and Panj Banis.', pa: 'ਅੰਮ੍ਰਿਤ ਸੰਚਾਰ (ਖੰਡੇ ਦੀ ਪਾਹੁਲ) ਸਿੱਖ ਦੀਖਿਆ ਸਮਾਰੋਹ ਹੈ।' } },
    { question: { en: 'What are the Panj Kakars?', pa: 'ਪੰਜ ਕਕਾਰ ਕੀ ਹਨ?' }, answer: { en: 'The five articles of faith worn by initiated Sikhs: Kesh (uncut hair), Kara (steel bracelet), Kanga (wooden comb), Kachera (cotton undergarment), and Kirpan (steel sword).', pa: 'ਅੰਮ੍ਰਿਤਧਾਰੀ ਸਿੱਖਾਂ ਦੁਆਰਾ ਪਹਿਨੇ ਜਾਣ ਵਾਲੇ ਪੰਜ ਵਿਸ਼ਵਾਸ ਦੇ ਲੇਖ: ਕੇਸ, ਕੜਾ, ਕੰਘਾ, ਕਛਹਿਰਾ, ਕਿਰਪਾਨ।' } },
    { question: { en: 'What is a Hukamnama?', pa: 'ਹੁਕਮਨਾਮਾ ਕੀ ਹੈ?' }, answer: { en: 'A Hukamnama is an official edict or religious decree issued by the Jathedar of Sri Akal Takht Sahib, binding on all Sikhs worldwide.', pa: 'ਹੁਕਮਨਾਮਾ ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ ਦੇ ਜਥੇਦਾਰ ਦੁਆਰਾ ਜਾਰੀ ਕੀਤਾ ਅਧਿਕਾਰਕ ਧਾਰਮਿਕ ਫ਼ੈਸਲਾ ਹੈ।' } },
    { question: { en: 'Who is Guru Granth Sahib Ji?', pa: 'ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਕੌਣ ਹਨ?' }, answer: { en: 'Guru Granth Sahib Ji is the eternal, living Guru of the Sikhs — the sacred scripture declared as the permanent and undying Guru by Guru Gobind Singh Ji before his passing in 1708.', pa: 'ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਸਿੱਖਾਂ ਦੇ ਸਦੀਵੀ ਜੀਵੰਤ ਗੁਰੂ ਹਨ।' } },
    { question: { en: 'What is Miri-Piri?', pa: 'ਮੀਰੀ-ਪੀਰੀ ਕੀ ਹੈ?' }, answer: { en: 'Miri-Piri is the Sikh principle of dual sovereignty — Miri (temporal/worldly authority) and Piri (spiritual authority) held together, represented by the two swords worn by Guru Hargobind Sahib Ji.', pa: 'ਮੀਰੀ-ਪੀਰੀ ਦੋਹਰੀ ਪ੍ਰਭੂਸੱਤਾ ਦਾ ਸਿੱਖ ਸਿਧਾਂਤ ਹੈ।' } },
  ],
  timeline: [
    { year: '1469', title: { en: 'Birth of Guru Nanak Dev Ji', pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦਾ ਜਨਮ' }, description: { en: 'The first Sikh Guru is born in Talwandi (now Nankana Sahib, Pakistan), founding the Sikh faith.', pa: 'ਪਹਿਲੇ ਸਿੱਖ ਗੁਰੂ ਦਾ ਤਲਵੰਡੀ ਵਿੱਚ ਜਨਮ ਹੋਇਆ।' }, mapPoint: { x: '38%', y: '18%' } },
    { year: '1606', title: { en: 'Sri Akal Takht Sahib founded', pa: 'ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ ਦੀ ਸਥਾਪਨਾ' }, description: { en: 'Guru Hargobind Sahib Ji establishes the Akal Takht in Amritsar, embodying the principle of Miri-Piri.', pa: 'ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ ਅੰਮ੍ਰਿਤਸਰ ਵਿੱਚ ਅਕਾਲ ਤਖ਼ਤ ਦੀ ਸਥਾਪਨਾ ਕਰਦੇ ਹਨ।' }, mapPoint: { x: '42%', y: '21%' } },
    { year: '1666', title: { en: 'Birth of Guru Gobind Singh Ji', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦਾ ਜਨਮ' }, description: { en: 'The 10th Guru is born in Patna, Bihar as Gobind Rai.', pa: 'ਦਸਵੇਂ ਗੁਰੂ ਦਾ ਜਨਮ ਪਟਨਾ, ਬਿਹਾਰ ਵਿੱਚ ਗੋਬਿੰਦ ਰਾਏ ਵਜੋਂ ਹੋਇਆ।' }, mapPoint: { x: '63%', y: '34%' } },
    { year: '1699', title: { en: 'Creation of the Khalsa', pa: 'ਖ਼ਾਲਸੇ ਦੀ ਸਿਰਜਣਾ' }, description: { en: 'Guru Gobind Singh Ji creates the Panj Pyare and the Khalsa Panth at Anandpur Sahib on Vaisakhi.', pa: 'ਵਿਸਾਖੀ ਨੂੰ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਵਿੱਚ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਪੰਜ ਪਿਆਰੇ ਅਤੇ ਖ਼ਾਲਸਾ ਪੰਥ ਦੀ ਸਿਰਜਣਾ ਕਰਦੇ ਹਨ।' }, mapPoint: { x: '45%', y: '22%' } },
    { year: '1705', title: { en: 'Battle of Chamkaur Sahib', pa: 'ਚਮਕੌਰ ਸਾਹਿਬ ਦੀ ਜੰਗ' }, description: { en: 'A historic battle where the Guru and a handful of Sikhs faced a massive Mughal army. Several Panj Pyare attain shaheedi.', pa: 'ਇੱਕ ਇਤਿਹਾਸਕ ਜੰਗ ਜਿੱਥੇ ਗੁਰੂ ਅਤੇ ਕੁਝ ਸਿੱਖਾਂ ਨੇ ਵੱਡੀ ਮੁਗਲ ਫ਼ੌਜ ਦਾ ਸਾਹਮਣਾ ਕੀਤਾ।' }, mapPoint: { x: '44%', y: '23%' } },
    { year: '1708', title: { en: 'Guru Granth Sahib Ji declared eternal Guru', pa: 'ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਸਦੀਵੀ ਗੁਰੂ ਘੋਸ਼ਿਤ' }, description: { en: 'At Hazur Sahib in Nanded, Guru Gobind Singh Ji declares the Guru Granth Sahib Ji as the eternal, living Guru of the Sikhs.', pa: 'ਨਾਂਦੇੜ ਵਿੱਚ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਨੂੰ ਸਦੀਵੀ ਜੀਵੰਤ ਗੁਰੂ ਘੋਸ਼ਿਤ ਕਰਦੇ ਹਨ।' }, mapPoint: { x: '46%', y: '56%' } },
  ],
  onboarding: {
    welcomeTitle: { en: 'Welcome. Sat Sri Akal.', pa: 'ਜੀ ਆਇਆਂ ਨੂੰ। ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ।' },
    welcomeSubtitle: { en: 'Choose where to begin your journey.', pa: 'ਆਪਣੀ ਯਾਤਰਾ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਚੁਣੋ।' },
    modeTitle: { en: 'What would you like to explore?', pa: 'ਤੁਸੀਂ ਕੀ ਜਾਣਨਾ ਚਾਹੁੰਦੇ ਹੋ?' },
    modes: [
      { id: 'start-here', icon: '☬', title: { en: 'Start Here', pa: 'ਇੱਥੋਂ ਸ਼ੁਰੂ ਕਰੋ' }, description: { en: 'A guided first look at Sikh history and the Khalsa.', pa: 'ਸਿੱਖ ਇਤਿਹਾਸ ਅਤੇ ਖ਼ਾਲਸੇ ਬਾਰੇ ਮਾਰਗਦਰਸ਼ਿਤ ਪਹਿਲੀ ਝਲਕ।' } },
      { id: 'pyare', icon: '⚔️', title: { en: 'Who were the Panj Pyare?', pa: 'ਪੰਜ ਪਿਆਰੇ ਕੌਣ ਸਨ?' }, description: { en: 'Five brave souls who gave their heads for the Khalsa.', pa: 'ਪੰਜ ਦਲੇਰ ਆਤਮਾਵਾਂ ਜਿਨ੍ਹਾਂ ਨੇ ਖ਼ਾਲਸੇ ਲਈ ਸਿਰ ਦਿੱਤਾ।' } },
      { id: 'takhts', icon: '🕌', title: { en: 'What are the Panj Takht?', pa: 'ਪੰਜ ਤਖ਼ਤ ਕੀ ਹਨ?' }, description: { en: 'Five sacred seats of Sikh authority across South Asia.', pa: 'ਦੱਖਣੀ ਏਸ਼ੀਆ ਵਿੱਚ ਸਿੱਖ ਅਧਿਕਾਰ ਦੇ ਪੰਜ ਪਵਿੱਤਰ ਅਸਥਾਨ।' } },
    ],
  },
};

export default displayContent;
