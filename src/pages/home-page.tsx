import { Button } from '@/shared/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/shared/ui/dialog';
import { lazy } from 'react';

export default function HomePage() {
  return (
    <div className="px-4">
      <Dialog>
        <DialogTrigger>
          <Button>Dialog</Button>
        </DialogTrigger>
        <DialogContent>Work</DialogContent>
      </Dialog>
    </div>
  );
}

export const HomePageLazy = lazy(() => import('./home-page'));
