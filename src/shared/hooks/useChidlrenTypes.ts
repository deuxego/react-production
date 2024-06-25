import { Children, isValidElement, ReactNode, useEffect } from 'react';

export const useChildrenTypes = (
  name: string,
  children: ReactNode,
  types: string[]
) => {
  const errorMessage = `${name} only accepts children of type ${types}`;

  useEffect(() => {
    Children.forEach(children, (child) => {
      if (
        !(
          isValidElement(child) &&
          types.includes((child.type as React.ComponentType).displayName ?? '')
        )
      ) {
        throw new Error(errorMessage);
      }
    });
  }, [children, types, errorMessage]);
};
