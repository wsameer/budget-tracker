import React, { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};