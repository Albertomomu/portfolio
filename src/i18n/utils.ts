import { text, defaultLang } from './info';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in text) return lang as keyof typeof text;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof text) {
  return function t(key: keyof typeof text[typeof defaultLang]) {
    return text[lang][key] || text[defaultLang][key];
  }
}