import { useEffect } from 'react';
import { useLocalStorage } from '@/shared/hooks/useLocalStorage';

enum THEMES {
  DARK = 'dark',
  LIGHT = 'light'
}

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage('theme', THEMES.DARK);

  useEffect(() => {
    document.documentElement.classList.remove(THEMES.DARK, THEMES.DARK);
    document.documentElement.classList.add(theme);
  }, [theme]);

  return {
    theme,
    setTheme
  };
};
