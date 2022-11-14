import React from 'react'
import { Routes, Route } from 'react-router-dom'
import '../index.css'
import MathParent from './MathParent'
import Home from './Home'

function App() {
  return (
    <div className='bg-slate-100 absolute h-full w-full'>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/mathtest' element={<MathParent/>}></Route>
    </Routes>
    </div>
  )
}

export default App
