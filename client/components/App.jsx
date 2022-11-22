import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import '../index.css'
import MathTest from './MathTest'
import Home from './Home'
import LeaderBoard from './LeaderBoard'
import TypingTest from './TypingTest'
import Game from './Game'

function App() {
  return (
    <div className='bg-slate-100 absolute h-full w-full'>
      <Link to="/">Go to Home</Link>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/mathtest' element={<MathTest/>}/>
      <Route path='/leaderboard' element={<LeaderBoard />}/>
      <Route path='/typingtest' element={<TypingTest />}/>
      <Route path='/game' element={<Game />}/>
    </Routes>
    </div>
  )
}

export default App
