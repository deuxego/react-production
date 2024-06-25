import { LanguageSwitcher } from '@/features/language';
import { ThemeSwitcher } from '@/features/theme';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <header className="flex items-center justify-between w-full h-[--navbar-height] px-12 border-b border-solid border-border/40">
      <div className="space-x-4">
        <Link href="/">{t('Home')}</Link>
        <Link href="/about">{t('About')}</Link>
      </div>

      <div className="flex gap-2">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </header>
  );
};
