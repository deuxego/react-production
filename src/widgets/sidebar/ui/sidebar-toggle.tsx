import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils/cn';
import { ChevronLeft } from 'lucide-react';
import { useSidebarContext } from '../context/sidebar-context';

type Props = {
  className?: string;
};

export const SidebarToggle = ({ className }: Props) => {
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <Button
      onClick={() => setCollapsed((prev) => !prev)}
      variant={'outline'}
      size={'icon'}
      className={cn(
        'absolute bg-[var(--sidebar-background)] top-3 -right-4',
        className
      )}
    >
      <ChevronLeft
        className={cn('h-5 w-5 duration-500', {
          'rotate-180': collapsed
        })}
      />
    </Button>
  );
};
