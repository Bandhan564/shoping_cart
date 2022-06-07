import axios from 'axios'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './components/Cart'
import Header from './components/Header'
import Home from './components/Home'

function App() {

const arr=[1,2,4,3,7,5]
  return (
     <div className='App'>
    <Header />
    <Routes>
      <Route path='/'  element={<Home/>}></Route>
      <Route path='/cart' element={<Cart/> }></Route>
    </Routes>
     </div>
  )
 
}

export default App
