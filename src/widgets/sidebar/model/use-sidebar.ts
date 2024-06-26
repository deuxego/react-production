import { useState } from 'react';

export const useSidebar = (ininitialState = false) => {
  const [collapsed, setCollapsed] = useState(ininitialState);

  return {
    collapsed,
    setCollapsed
  };
};
