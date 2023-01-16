import i18n, {TFunction} from 'i18next';
import {initReactI18next} from 'react-i18next';
import {en} from './Languages';
// react-i18next versions lower than 11.11.0
declare module 'react-i18next' {
  // and extend them!
  interface Resources {
    en: typeof en;
  }
}

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  //language to use if translations in user language are not available
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  react: {useSuspense: false},
  resources: {
    en: {
      translation: en,
    },
  },
});

export default i18n;
