import React, { useMemo } from 'react'
import { RouterProvider } from 'react-router-dom'
import AppProvider from './app-provider'

import { createRouter } from './routes'

const AppRouter = () => {
  const router = useMemo(() => createRouter(), []);

  return <RouterProvider router={router} />
}

const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  )
}

export default App