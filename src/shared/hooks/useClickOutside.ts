import { RefObject, useEffect } from 'react';

export const useClickOutside = <T extends Node>(
  ref: RefObject<T>,
  cb: () => void
) => {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (ref.current && !ref.current.contains(target)) {
        cb();
      }
    };

    document.addEventListener('click', listener, true);
    return () => {
      document.removeEventListener('click', listener, true);
    };
  }, [ref, cb]);
};
