import { cn } from '@/shared/utils/cn';
import { LayoutGrid } from 'lucide-react';
import { useSidebarContext } from '../context/sidebar-context';

export const SidebarHeading = () => {
  const { collapsed } = useSidebarContext();

  return (
    <h2 className="flex items-center justify-center text-lg font-bold gap-2">
      <LayoutGrid
        className={cn('h-5 w-5', {
          'h-6 w-6': collapsed
        })}
      />
      {!collapsed && 'Production'}
    </h2>
  );
};
