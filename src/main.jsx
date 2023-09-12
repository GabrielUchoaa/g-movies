import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home.jsx'
import Movies from './Pages/Movies.jsx'
import Details from './Pages/Details.jsx'
import Series from './Pages/Series.jsx'
import Layout from "./components/Layout.jsx"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} 
from "react-router-dom"



 let router = createBrowserRouter(createRoutesFromElements(
  
  <Route>
     <Route index element={<Home />} ></Route>
  <Route element={<Layout />}>
     <Route path="/movies" element={<Movies />}></Route>
     <Route path="/series" element={<Series />}></Route>
     <Route path="/details/:id/:tipo" element={<Details />}></Route>
  </Route>  
 
  </Route>
  
  
 ))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(  
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
