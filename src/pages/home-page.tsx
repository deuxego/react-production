import { lazy } from 'react';

export default function HomePage() {
  return <div className="px-4"></div>;
}

export const HomePageLazy = lazy(() => import('./home-page'));
