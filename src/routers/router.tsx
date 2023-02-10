import * as React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import Results from '../pages/results'
import Tags from '../pages/tags'

export default createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/results',
      element: <Results />,
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
