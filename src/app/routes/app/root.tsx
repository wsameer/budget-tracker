import { PageLayout } from '@/components/layout/page-layout';
import { Spinner } from '@/components/ui/spinner';
import React, { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet, useLocation } from 'react-router-dom'

export const AppRoot = () => {
  const location = useLocation();

  return (
    <PageLayout>
      <Suspense fallback={
        <div className='flex size-full items-center justify-center'>
          <Spinner size='xl' />
        </div>
      }
      >
        <ErrorBoundary key={location.pathname} fallback={<div>Something went wrong!</div>}>

          <Outlet />
        </ErrorBoundary>
      </Suspense>
    </PageLayout>
  )
}
