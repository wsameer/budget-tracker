import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const AppRouter = () => {
  const router = createBrowserRouter([{
    path: '/',
    element: <div>hello world!</div>
  }])

  return <RouterProvider router={router} />
}

const App = () => {
  return (
    <div>
      <AppRouter />
    </div>
  )
}

export default App