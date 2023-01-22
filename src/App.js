import React, {lazy, Suspense} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BsInstagram } from "react-icons/bs"
import "./style.css"

const Home = lazy(() => import('./Pages/Home'))
const Landingpage = lazy(() => import('./Pages/Landingpage'))



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
      </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App