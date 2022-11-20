import React from 'react'
import { Routes, Route } from 'react-router-dom'
import '../index.css'
import MathTest from './MathTest'
import Home from './Home'
import LeaderBoard from './LeaderBoard'

function App() {
  return (
    <div className='bg-slate-100 absolute h-full w-full'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/mathtest' element={<MathTest/>}/>
      <Route path='/leaderboard' element={<LeaderBoard />}/>
    </Routes>
    </div>
  )
}

export default App
