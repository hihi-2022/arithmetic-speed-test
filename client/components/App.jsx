import React from 'react'
import { Routes, Route } from 'react-router-dom'
import '../index.css'
import Math from './Math'
import Home from './Home'

function App() {
  return (
    <div className='text-blue-700'>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/math' element={<Math/>}></Route>
    </Routes>
    </div>
  )
}

export default App
