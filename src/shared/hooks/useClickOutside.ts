import { RefObject, useEffect } from 'react';

export const useClickOutside = <T extends Node>(
  ref: RefObject<T>,
  cb: () => void
) => {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (ref.current) {
        if (target.contains(ref.current)) {
          cb();
        }
      }
    };

    document.addEventListener('click', listener);

    return () => document.removeEventListener('click', listener);
  }, [ref, cb]);
};
