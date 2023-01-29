import * as React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import Tags from '../pages/tags'

export default createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/tags',
      element: <Tags />,
    },
  ],
  {
    basename: '/',
  }
)
