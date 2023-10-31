import { useState } from 'react'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Home from './Pages/Home'


function App() {

  return (
   <>
   <Router>

    <Navbar/>
    <Routes>
      <Route path={"/"} index element={<Home/>}></Route>
    </Routes>
   </Router>
    
    
   
   </>
  )
}

export default App
