import * as React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'

export default createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
    // {
    //   path: '/tags',
    //   element: <Tag />,
    // },
  ],
  {
    basename: '/',
  }
)
