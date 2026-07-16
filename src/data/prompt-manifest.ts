import type { PromptManifest } from '../types/prompt-manifest';

const promptManifest: PromptManifest = {
  outputDirectory: '/public/assets/images',
  publicPathPrefix: '/assets/images',
  recommendedModel: 'Midjourney v6.1 (or latest v6.x)',
  fallbackModel: 'DALL·E 3 with locked prompts and curated outputs',
  styleGuide: {
    primaryPalette: {
      deepRoyalNavy: '#070d19 to #0c1626',
      warmSaffronGold: '#d4af37',
      pureWhiteLightAccents: 'subtle white rim and glow accents',
    },
    atmosphere: 'Sacred, majestic, historical, and deeply respectful.',
    lighting:
      'Cinematic chiaroscuro with warm front-side golden key light and cool blue rear rim light.',
  },
  aspectRatioGuidance: {
    portraitCards: '--ar 3:4',
    landscapeBackgrounds: '--ar 16:9',
  },
  panjPyare: [
    {
      id: 'bhai_daya_singh',
      subject: 'Bhai Daya Singh Ji',
      targetFilename: 'pyara1.jpg',
      aspectRatio: '--ar 3:4',
      prompt:
        'A majestic, high-resolution portrait of Bhai Daya Singh Ji, the first of the Panj Pyare. He is depicted as a noble Sikh warrior with a compassionate yet brave expression, a neatly tied traditional round blue dastaar (turban), and a flowing black beard. He is wearing rich saffron and royal blue traditional robes. He holds a steel talwar (sword) reverently across his chest. Background is an artistic, abstract blend of deep navy blue and soft glowing gold particles, giving a premium museum-exhibit feel. Chiaroscuro studio lighting, hyper-realistic details, cinematic, 8k resolution, photorealistic oil painting texture, highly detailed fabric and steel reflections --ar 3:4',
    },
    {
      id: 'bhai_dharam_singh',
      subject: 'Bhai Dharam Singh Ji',
      targetFilename: 'pyara2.jpg',
      aspectRatio: '--ar 3:4',
      prompt:
        'A majestic, high-resolution portrait of Bhai Dharam Singh Ji, the second of the Panj Pyare. He represents righteousness and strength, depicted with a sturdy, heroic build and a serene, wise expression. He has a traditional round blue dastaar and a flowing graying-black beard, dressed in deep blue traditional warrior robes with gold trim. Background is a premium, abstract atmospheric blend of royal dark navy and warm gold dust. Strong side-lighting casting rich highlights on his face and shoulders, hyper-realistic, photorealistic digital oil painting style, museum quality, highly detailed textures --ar 3:4',
    },
    {
      id: 'bhai_himmat_singh',
      subject: 'Bhai Himmat Singh Ji',
      targetFilename: 'pyara3.jpg',
      aspectRatio: '--ar 3:4',
      prompt:
        'A majestic, high-resolution portrait of Bhai Himmat Singh Ji, the third of the Panj Pyare. He is depicted with an expression of immense courage and devotion, a traditional round blue dastaar, and a flowing black beard. He is wearing classic warrior attire in blue and saffron, holding a steel water vessel (representing his prior service and his sacrifice). The background is a premium glassmorphic dark navy blue with subtle golden light rays shining from above. Cinematic lighting, hyper-detailed, 8k, majestic and heroic digital painting style, museum quality artwork --ar 3:4',
    },
    {
      id: 'bhai_mohkam_singh',
      subject: 'Bhai Mohkam Singh Ji',
      targetFilename: 'pyara4.jpg',
      aspectRatio: '--ar 3:4',
      prompt:
        'A majestic, high-resolution portrait of Bhai Mohkam Singh Ji, the fourth of the Panj Pyare. He is depicted as a steadfast and loyal Sikh warrior, with a resolute, determined gaze, a traditional blue dastaar, and a flowing dark beard. He is dressed in traditional saffron robes. The background is an elegant, premium dark navy blue canvas with soft, warm golden bokeh lights. Professional studio rim-lighting illuminating the fabric textures and details. Photorealistic, hyper-detailed digital art, cinematic masterpiece, 8k resolution --ar 3:4',
    },
    {
      id: 'bhai_sahib_singh',
      subject: 'Bhai Sahib Singh Ji',
      targetFilename: 'pyara5.jpg',
      aspectRatio: '--ar 3:4',
      prompt:
        'A majestic, high-resolution portrait of Bhai Sahib Singh Ji, the fifth of the Panj Pyare. He is depicted as a noble and humble warrior, standing with infinite devotion, wearing a traditional round blue dastaar and traditional robes. He has a soft, faithful expression on his face. The background is a premium, high-end abstract dark navy blue panel with floating golden particles. Warm, dramatic cinematic lighting emphasizing depth and texture. Hyper-realistic, museum gallery quality, 8k digital painting, exquisite detail --ar 3:4',
    },
  ],
  panjTakht: [
    {
      id: 'sri_akal_takht_sahib',
      subject: 'Sri Akal Takht Sahib (Amritsar)',
      targetFilename: 'takht1.jpg',
      aspectRatio: '--ar 16:9',
      prompt:
        'A breathtaking, high-end architectural photograph of Sri Akal Takht Sahib at dusk. The magnificent structure is illuminated with warm, golden spiritual lights, reflecting beautifully off the dark, glassy sacred Sarovar water in the foreground. The sky is a deep, dramatic twilight blue. High-end architectural photography, long exposure, ultra-sharp focus, premium glossy finish, cinematic lighting, 8k resolution, professional color grading, museum postcard quality.',
    },
    {
      id: 'takht_sri_keshgarh_sahib',
      subject: 'Takht Sri Keshgarh Sahib (Anandpur Sahib)',
      targetFilename: 'takht2.jpg',
      aspectRatio: '--ar 16:9',
      prompt:
        'A majestic architectural photograph of Takht Sri Keshgarh Sahib, Anandpur Sahib, situated proudly atop its hill. Shot during the golden hour, with the brilliant white domes of the gurdwara glowing under a warm, saffron sunset. The surrounding landscape has soft, rolling hills. Shot on 35mm lens, high-end commercial travel photography style, crisp details, dramatic sky with soft orange and deep blue gradients, premium and pristine look, 8k.',
    },
    {
      id: 'takht_sri_damdama_sahib',
      subject: 'Takht Sri Damdama Sahib (Talwandi Sabo)',
      targetFilename: 'takht3.jpg',
      aspectRatio: '--ar 16:9',
      prompt:
        'A grand, premium architectural photograph of Takht Sri Damdama Sahib. The beautiful white building is captured on a clear, serene day under a vibrant blue sky with soft wispy clouds. Clean lines, perfect symmetrical composition, professional architectural perspective, brilliant white marble reflecting sunlight, high-end travel documentary style, ultra-detailed, 8k.',
    },
    {
      id: 'takht_sri_patna_sahib',
      subject: 'Takht Sri Patna Sahib (Bihar)',
      targetFilename: 'takht4.jpg',
      aspectRatio: '--ar 16:9',
      prompt:
        'A stunning, night-time photograph of Takht Sri Patna Sahib. The intricate white and gold structure is brightly illuminated, standing out spectacularly against a pitch-black night sky. Elegant street-level lighting casts warm glows on the marble pathways. Shot on professional camera, crisp reflections, high dynamic range (HDR), rich and premium cultural atmosphere, 8k resolution.',
    },
    {
      id: 'takht_sri_hazur_sahib',
      subject: 'Takht Sri Hazur Sahib (Nanded)',
      targetFilename: 'takht5.jpg',
      aspectRatio: '--ar 16:9',
      prompt:
        'A sacred, awe-inspiring architectural photograph of Takht Sri Hazur Sahib, Nanded. Captured at dawn, with the first light of day casting a soft, divine golden rim around the white domes and majestic arches of the Takht. Pristine, quiet, and deeply spiritual atmosphere. Soft morning mist, premium composition, professional lens flare, high-end museum quality photograph, 8k.',
    },
  ],
};

export default promptManifest;
