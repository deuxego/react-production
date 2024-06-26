import { cn } from '@/shared/utils/cn';
import { useSidebar } from '../model/use-sidebar';
import { SidebarHeading } from '../ui/sidebar-heading';
import { SidebarToggle } from '../ui/sidebar-toggle';
import { SidebarMenu } from '../ui/sidebar-menu';
import { ReactNode } from 'react';
import { sidebarContext } from '../context/sidebar-context';

type Props = {
  action?: {
    icon: ReactNode;
    component: ReactNode;
  };
};

export const Sidebar = ({ action }: Props) => {
  const { collapsed, setCollapsed } = useSidebar();

  return (
    <sidebarContext.Provider value={{ collapsed, setCollapsed }}>
      <aside
        className={cn(
          'flex flex-col relative py-4 duration-300 border-r border-input max-sm:hidden',
          {
            'w-2/12': !collapsed,
            'w-[70px]': collapsed
          }
        )}
      >
        <SidebarHeading />
        <SidebarToggle />
        <SidebarMenu />

        <div className="flex flex-1 items-end justify-center">
          {!collapsed ? action?.component : action?.icon}
        </div>
      </aside>
    </sidebarContext.Provider>
  );
};
