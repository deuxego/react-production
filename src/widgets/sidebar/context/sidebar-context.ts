import { createContext, Dispatch, SetStateAction, useContext } from 'react';

type SidebarContextType = {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
};

export const sidebarContext = createContext({} as SidebarContextType);
export const useSidebarContext = () => useContext(sidebarContext);
