import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router'
import './index.css'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import About from './components/About/About.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<ContactUs/>}/>
      <Route path='contactUs' element={<About/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
