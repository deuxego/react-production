import { Home, Info } from 'lucide-react';

export const SidebarMenuItems = [
  {
    label: 'Home',
    icon: <Home className='h-5 w-5'/>,
    href: '/'
  },
  {
    label: 'About',
    icon: <Info className='h-5 w-5'/>,
    href: '/about'
  }
];
