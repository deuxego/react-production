import { Route, Switch } from 'wouter';
import { HomePageLazy } from '@/pages/home-page';
import { Suspense } from 'react';
import { PageFallback } from '@/shared/ui/page-fallback';
import { Navbar } from '@/widgets/navbar';
import { AboutPageLazy } from '@/pages/about-page';
import { useTheme } from '@/features/theme';
import { Sidebar } from '@/widgets/sidebar';
import { useTranslation } from 'react-i18next';
import './styles/index.css';

export const App = () => {
  const { t } = useTranslation();
  useTheme();

  return (
    <Suspense>
      <div className="flex">
        <Sidebar />

        <div className="w-full">
          <Navbar />
          <div className="bg-page-background h-[var(--height-without-navbar)]">
            <Suspense fallback={<PageFallback />}>
              <Switch>
                <Route path="/" component={HomePageLazy} />
                <Route path="/about" component={AboutPageLazy} />
                <Route>{t('404')}</Route>
              </Switch>
            </Suspense>
          </div>
        </div>
      </div>
    </Suspense>
  );
};
