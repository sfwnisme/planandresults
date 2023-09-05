import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import translationEN from './local/en.json'
import translationAR from './local/ar.json'

const resources = {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    len: localStorage.getItem.i18nextLng || "en",
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  })
export default i18n