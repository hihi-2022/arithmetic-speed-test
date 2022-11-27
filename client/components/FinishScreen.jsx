import React, {useState, useEffect} from "react";
import { saveAnonymousScore, saveScore, getTopScore } from "../apiClient";
import { useNavigate } from "react-router-dom"

function FinishScreen({score}) {
  const navigate = useNavigate()
  const [scoreId, setScoreId] = useState(0)
  const [showSaveForm, setShowSaveForm] = useState(false)
  const [isHighScore, setIsHighScore] = useState(false)

  const yesClick = () =>{
    setShowSaveForm(true)
  }

  const noClick = () =>{
    navigate(0)
  }
  const handleNameSubmit = async (e)=>{
    e.preventDefault()
    const name = e.target.name.value
    if (name) {
      await saveScore(name, scoreId)
      navigate('/leaderboard')
    }
  }

  useEffect(async ()=>{
    const id = await saveAnonymousScore(score)
    setScoreId(id)
    const topScores = await getTopScore(20)
    const findScoreResult = topScores.find(topScore => topScore.score < score)
    setIsHighScore(Boolean(findScoreResult || topScores.length<20))
  },[])

  return (
    <div className=" bg-slate-200 w-1/2 mx-auto mt-24 h-60 flex justify-center flex-col items-center">
      <h2>Your score: {score}</h2>
      {isHighScore && 
        <>
          {showSaveForm ? 
            <form onSubmit={handleNameSubmit} >
              <label htmlFor="name"> Your name: </label>
              <input type="text" name="name" className=" text-gray-500 border"/>
              <button className=" px-2 py-1 border border-gray-800 bg-slate-100 ml-3"> Submit </button>
            </form>
          :

        
          <div>
            <p>You got high score! Would you like to save it?</p>
            <div className="flex justify-around mt-5">
              <button onClick={yesClick} className=" px-2 py-1 border border-gray-800 bg-slate-100"> Yes </button>
              <button onClick={noClick} className=" px-2 py-1 border border-gray-800 bg-slate-100" >No </button>
            </div>
          </div>}
        </>
      }
      
      {/* {showSaveForm && 
        <form onSubmit={handleNameSubmit}>
          <input type="text" name="name"/>
          <button>Submit</button>
        </form>} */}
    </div>
  )
}

export default FinishScreen