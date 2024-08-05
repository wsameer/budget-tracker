import React from 'react'
import { PageLayout } from './components/ui/layout/PageLayout/PageLayout'
import { router } from './routes/router'
import { RouterProvider } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <PageLayout>
        <RouterProvider router={router} />
      </PageLayout>
    </div>
  )
}

export default App