import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import CONTENT from './content.js';

const resources = CONTENT;

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'DE',
    interpolation: {
      escapeValue: false
    }
  }).then(r => console.log(r));

export default i18n;