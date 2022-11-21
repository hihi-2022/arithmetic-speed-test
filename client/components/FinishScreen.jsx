import React, {useState, useEffect} from "react";
import { saveAnonymousScore, saveScore } from "../apiClient";
import { useNavigate } from "react-router-dom"

function FinishScreen({score}) {
  const navigate = useNavigate()
  const [scoreId, setScoreId] = useState(0)
  const [showSaveForm, setShowSaveForm] = useState(false)

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
  },[])

  return (
    <div className=" bg-blue-300 w-1/2 mx-auto mt-24 h-60 flex justify-center flex-col items-center">
      <h2>Your score: {score}</h2>
      <p>Would you like to save your score?</p>
      <button onClick={yesClick} className=" bg-pink-400">Yes</button>
      <button onClick={noClick}>No</button>
      {showSaveForm && 
        <form onSubmit={handleNameSubmit}>
          <input type="text" name="name"/>
          <button>Submit</button>
        </form>}
    </div>
  )
}

export default FinishScreen