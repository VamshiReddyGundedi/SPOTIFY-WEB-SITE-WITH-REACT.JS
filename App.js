import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Download from './Components/Download'
import Search from './Components/Search'
import Help from './Components/Help'
import Login from './Components/Login'
import Navbar from './Navbar'
import Error from './Components/Error'
export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Download' element={<Download/>}></Route>
      <Route path='/Search' element={<Search/>}></Route>
      <Route path='/Help' element={<Help/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='*' element={<Error/>} ></Route>
    </Routes>
    </BrowserRouter>
  )
}
