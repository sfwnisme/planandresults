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

// !=============[if you whant enable language detector and localStorage uncomment this block of code]
// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     resources,
//     lng: localStorage.getItem.i18nextLng || "en",

//     interpolation: {
//       escapeValue: false
//     },
//     react: {
//       useSuspense: false
//     }
//   })


// !=================[if you whant to disable language detector and localStorage enable this block of code]
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.setItem('i18nextLng', 'ar') || "ar",

    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });



export default i18n