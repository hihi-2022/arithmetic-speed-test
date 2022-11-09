import React from 'react'
import { Routes, Route } from 'react-router-dom'
import '../index.css'
import Game from './Game'
import Home from './Home'

function App() {
  return (
    <div className='text-blue-700'>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/game' element={<Game/>}></Route>
    </Routes>
    </div>
  )
}

export default App
