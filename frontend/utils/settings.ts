export function getCurrLangFromCode(langCode, i18nDefaults) {
  const { languageData } = i18nDefaults;
  if (!langCode) return languageData[0].subtitle;
  const idx = languageData.findIndex((curr) => curr.langCode === langCode);
  return languageData[idx].subtitle;
}
