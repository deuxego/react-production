import { X } from 'lucide-react';
import {
  createContext,
  Dispatch,
  FC,
  HTMLAttributes,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from 'react';
import { createPortal } from 'react-dom';

type DialogContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const dialogContext = createContext({} as DialogContextType);
const useDialogContext = () => useContext(dialogContext);

export const Dialog = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <dialogContext.Provider
      value={{
        isOpen,
        setIsOpen
      }}
    >
      {children}
    </dialogContext.Provider>
  );
};

export const DialogTrigger: FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const { setIsOpen } = useDialogContext();

  return <div {...props} onClick={() => setIsOpen((prev) => !prev)} />;
};

export const DialogContent: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  const { isOpen, setIsOpen } = useDialogContext();

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  return (
    isOpen &&
    createPortal(
      <div
        onClick={handleClickOutside}
        className="absolute w-screen h-screen top-0 left-0 bg-black/80"
      >
        <div
          className="absolute min-w-96 min-h-44 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background rounded-md border border-solid border-input shadow-lg p-6"
          {...props}
          onClick={e => e.stopPropagation()}
        >
          <X
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 w-5 h-5 text-muted-foreground cursor-pointer hover:text-white"
          />
          {children}
        </div>
      </div>,
      document.getElementById('root')!
    )
  );
};
