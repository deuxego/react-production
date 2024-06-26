import { Link, useLocation } from 'wouter';
import { SidebarMenuItems } from '../constants';
import { cn } from '@/shared/utils/cn';
import { useSidebarContext } from '../context/sidebar-context';

export const SidebarMenu = () => {
  const { collapsed } = useSidebarContext();
  const [location] = useLocation();

  return (
    <nav
      className={cn('pt-12', {
        'px-6': !collapsed,
        'px-2': collapsed
      })}
    >
      <div
        className={cn('text-muted-foreground text-md mb-3', {
          'text-center text-2xl': collapsed
        })}
      >
        {!collapsed ? 'Contents' : '...'}
      </div>

      <div className="space-y-4">
        {SidebarMenuItems.map(({ label, icon, href }, idx) => (
          <Link
            className={cn('flex items-center gap-4 px-4 py-2 rounded-md', {
              'bg-secondary': href === location
            })}
            href={href}
            key={idx}
          >
            {icon}
            {!collapsed && <div className="text-md font-medium">{label}</div>}
          </Link>
        ))}
      </div>
    </nav>
  );
};
