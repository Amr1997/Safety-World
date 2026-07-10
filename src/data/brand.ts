export const brand = {
  name: {
    en: "Safety World",
    ar: "سيفتي وورلد",
  },
  legalName: {
    en: "The Egyptian Company for Import, Export & Supplies (Safety World)",
    ar: "الشركة المصرية للاستيراد والتصدير والتوريدات (سيفتي وورلد)",
  },
  email: "Safetyworld450@gmail.com",
  phones: ["+201018161113", "+201275531892"],
} as const;

export const capabilities = [
  { key: "suits" },
  { key: "hoses" },
  { key: "nozzles" },
  { key: "pumps" },
  { key: "searchlights" },
  { key: "breeching" },
  { key: "chainsaws" },
  { key: "foam" },
] as const;

export const directorates = [
  { key: "general" },
  { key: "cairoGiza" },
  { key: "qalyubia" },
  { key: "monufia" },
  { key: "sharqia" },
  { key: "gharbia" },
  { key: "dakahlia" },
  { key: "beheira" },
  { key: "portSaid" },
  { key: "ismailia" },
  { key: "beniSuef" },
  { key: "minya" },
  { key: "sohag" },
  { key: "luxor" },
] as const;
