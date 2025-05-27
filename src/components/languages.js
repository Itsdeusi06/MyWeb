import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './translations/en/translation.json';
import es from './translations/es/translation.json';
import ca from './translations/ca/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      ca: { translation: ca },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;
