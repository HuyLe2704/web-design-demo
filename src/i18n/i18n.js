import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HEADER_EN from 'src/i18n/locales/en/translation.json';
import HEADER_VI from 'src/i18n/locales/vi/translation.json';

export const locales = {
    en: 'English',
    vi: 'Tiếng Việt',
};

const resources = {
    en: {
        content: HEADER_EN,
    },
    vi: {
        content: HEADER_VI,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'vi',
    ns: ['content'],
    fallbackLng: 'vi',
    interpolation: {
        escapeValue: false,
    },
});
