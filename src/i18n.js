import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          colorpicker: "Color Picker",
          presentacion: "Presentation",
        }
      },
      es: {
        translation: {
          colorpicker: "Selector de Color",
          presentacion: "Presentación",
        }
      }
    },
    lng: 'es', // idioma por defecto
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // react ya se encarga de la escapación
    }
  });

export default i18n;