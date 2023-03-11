import React, {lazy, Suspense} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BsInstagram } from "react-icons/bs"
import "./style.css"
import Login from './Pages/Login'

const Home = lazy(() => import('./Pages/Home'))
const Landingpage = lazy(() => import('./Pages/Landingpage'))
const Register = lazy(() => import('./Pages/Register'))



function App() {
  return (
    <Suspense fallback={
    <BsInstagram 
    className='position-absolute top-50 start-50 translate-middle'
    size={32}
    color="red"
    />
    }>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App