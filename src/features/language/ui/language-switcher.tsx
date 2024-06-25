import { Button } from '@/shared/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/shared/ui/dropdown-menu';
import { Languages } from 'lucide-react';
import { useLanguageSwitcher } from '../model/use-language-switcher';

export const LanguageSwitcher = () => {
  const { switchLanguage } = useLanguageSwitcher();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant={'outline'} size={'icon'}>
          <Languages className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => switchLanguage('en')}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage('ru')}>
          Russian
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
