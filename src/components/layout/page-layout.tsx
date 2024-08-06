import React, { ReactNode } from 'react';
import { Input } from '../ui/input';
import { Search } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';
import { BrandLogo } from '../navigation/brand-logo';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = React.memo<PageLayoutProps>(({ children }) => {
  const { isMobile } = useResponsive();

  return (
    <div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        {isMobile
          ? <BrandLogo />
          : (
            <div className="relative ml-auto flex-1 md:grow-0">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
              />
            </div>
          )}

      </header>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        {children}
      </main>
    </div>
  );
})