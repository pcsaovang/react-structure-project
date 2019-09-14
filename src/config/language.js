import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en, vi } from '../locale'

const initOptions = {
  resources: {
    en,
    vi,
  },
  load: 'languageOnly',
  defaultNS: ['chatbowl'],
  ns: 'translation',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: true,
  },
  react: {
    useSuspense: true,
  },
}

export default function languageInstance({ lng }) {
  i18n.use(initReactI18next).init({
    ...initOptions,
    lng
  })
}
