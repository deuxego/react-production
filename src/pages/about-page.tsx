import { lazy } from 'react';

export default function AboutPage() {

  return (
    <div>About</div>
  );
}

export const AboutPageLazy = lazy(() => import('./about-page'));
