import { useTranslation } from 'react-i18next';

export const useLanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const switchLanguage = (languageCode: string) =>
    i18n.changeLanguage(languageCode);

  return {
    switchLanguage
  };
};
