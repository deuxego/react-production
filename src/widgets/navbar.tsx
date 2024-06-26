import { LanguageSwitcher } from '@/features/language';
import { ThemeSwitcher } from '@/features/theme';

export const Navbar = () => {
  return (
    <header className="flex items-center justify-end w-full h-[--navbar-height] px-12 border-b border-solid border-border/40">
      <div className="flex gap-2">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </header>
  );
};
