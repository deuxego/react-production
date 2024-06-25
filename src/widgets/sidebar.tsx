import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils/cn';
import { ChevronRight, LayoutGrid } from 'lucide-react';
import { useState } from 'react';

type Props = {
  className?: string;
};

// const SidebarItems = [
//   {
//     label: 'Label',
//     icon: <div> </div>
//   }
// ];

export const Sidebar = ({ className }: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        'h-screen bg-[var(--sidebar-background)] lg:w-2/12 max-sm:hidden duration-300',
        className,
        { 'lg:w-[60px]': collapsed }
      )}
    >
      <div className="space-y-4 py-4">
        <div className="relative flex justify-center">
          {!collapsed && (
            <h2 className="flex items-center gap-2 text-xl font-bold whitespace-nowrap">
              <LayoutGrid className="h-5 w-5" />
              React Production
            </h2>
          )}

          <Button
            onClick={() => setCollapsed((prev) => !prev)}
            variant={'outline'}
            size={'icon'}
            className={cn(
              'absolute bg-[var(--sidebar-background)] top-0 -right-3 duration-500',
              { 'rotate-180': collapsed }
            )}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
