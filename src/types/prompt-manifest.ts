export interface PromptStyleGuide {
  primaryPalette: {
    deepRoyalNavy: string;
    warmSaffronGold: string;
    pureWhiteLightAccents: string;
  };
  atmosphere: string;
  lighting: string;
}

export interface PromptEntry {
  id: string;
  subject: string;
  prompt: string;
  targetFilename: string;
  aspectRatio: string;
}

export interface PromptManifest {
  outputDirectory: string;
  publicPathPrefix: string;
  recommendedModel: string;
  fallbackModel: string;
  styleGuide: PromptStyleGuide;
  aspectRatioGuidance: {
    portraitCards: string;
    landscapeBackgrounds: string;
  };
  panjPyare: PromptEntry[];
  panjTakht: PromptEntry[];
}
