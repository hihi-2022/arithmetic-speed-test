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
    console.log(scoreId);
  }

  const noClick = () =>{
    navigate('/')
  }
  const handleNameSubmit = async (e)=>{
    e.preventDefault()
    const name = e.target.name.value
    console.log(name);
    console.log(scoreId);
    if (name) {
      await saveScore(name, scoreId)
      navigate('/leaderboard')
    }
  }

  useEffect(async ()=>{
    const id = await saveAnonymousScore(score)
    setScoreId(id)
    const topScores = await getTopScore(20)
    const findScoreResult = topScores.find(topScore => {
      console.log(topScore.score, score)
      return topScore.score < score
    })
    console.log(findScoreResult)
    setIsHighScore(Boolean(findScoreResult))
  },[])

  return (
    <div className=" bg-blue-300 w-1/2 mx-auto mt-24 h-60 flex justify-center flex-col items-center">
      <h2>Your score: {score}</h2>
      {isHighScore && 
        <div>
          <p>You got high score! Would you like to save it?</p>
          <button onClick={yesClick} className=" bg-pink-400">Yes</button>
          <button onClick={noClick}>No</button>
        </div>}
      
      {showSaveForm && 
        <form onSubmit={handleNameSubmit}>
          <input type="text" name="name"/>
          <button>Submit</button>
        </form>}
    </div>
  )
}

export default FinishScreen