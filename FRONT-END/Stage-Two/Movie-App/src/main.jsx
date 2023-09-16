import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Homepage from './Pages/HomePage/Homepage.jsx'
import MovieDetails from './Pages/MovieDetails/MovieDetails.jsx'

import MovieContext from './Context/MovieContext.jsx'

import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>

      <Route index element={<Homepage></Homepage>}></Route>

      <Route path='movies/:id' element={<MovieDetails></MovieDetails>}></Route>

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <MovieContext>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </MovieContext>
  // </React.StrictMode>,
)
