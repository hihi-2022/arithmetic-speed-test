import React from 'react'
import { Routes, Route } from 'react-router-dom'
import '../index.css'
import Game from './Game'

function App() {
  return (
    <div className='text-blue-700'>
      <h1>Widgets for the win!</h1>
    <Routes>
      <Route path='/' element={<Game/>}></Route>
    </Routes>
    </div>
  )
}

export default App
