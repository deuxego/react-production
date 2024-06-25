import {
  createContext,
  Dispatch,
  FC,
  forwardRef,
  HTMLAttributes,
  ReactNode,
  SetStateAction,
  useContext,
  useRef,
  useState
} from 'react';
import { useClickOutside } from '../hooks/useClickOutside';
import { cn } from '../utils/cn';
import { useChildrenTypes } from '../hooks/useChidlrenTypes';

type DropdownContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const dropdownContext = createContext({} as DropdownContextType);

const useDropdownContext = () => useContext(dropdownContext);

const DisplayNames = {
  DropdownMenu: ['DropdownMenuTrigger', 'DropdownMenuContent']
};

export const DropdownMenu = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useChildrenTypes('DropdownMenu', children, DisplayNames.DropdownMenu);

  return (
    <dropdownContext.Provider
      value={{
        isOpen,
        setIsOpen
      }}
    >
      <div className={cn('', className)} ref={ref} {...props}>
        {children}
      </div>
    </dropdownContext.Provider>
  );
});

export const DropdownMenuTrigger = ({ children }: { children?: ReactNode }) => {
  const { setIsOpen } = useDropdownContext();

  return <div onClick={() => setIsOpen((prev) => !prev)}>{children}</div>;
};
DropdownMenuTrigger.displayName = 'DropdownMenuTrigger';

export const DropdownMenuContent = ({ children }: { children?: ReactNode }) => {
  const { isOpen, setIsOpen } = useDropdownContext();
  const divRef = useRef<HTMLDivElement>(null);

  useClickOutside<HTMLDivElement>(divRef, () => setIsOpen(false));

  return (
    isOpen && (
      <div
        ref={divRef}
        className="absolute bg-background min-w-28 -translate-x-1/3 border border-solid dark:border-border p-1 rounded-md mt-1 space-y-2"
      >
        {children}
      </div>
    )
  );
};

DropdownMenuContent.displayName = 'DropdownMenuContent';

export const DropdownMenuItem: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  onClick,
  ...props
}) => {
  const { setIsOpen } = useDropdownContext();

  return (
    <div
      className={cn(
        'py-1 px-2 rounded-md cursor-pointer hover:bg-secondary',
        className
      )}
      {...props}
      onClick={(event) => {
        if (onClick) {
          onClick(event);
          setIsOpen(false);
        }
      }}
    />
  );
};
DropdownMenuItem.displayName = 'DropdownMenuItem';
