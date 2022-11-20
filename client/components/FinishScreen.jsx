import React, {useState, useEffect} from "react";
import request from "superagent";

function FinishScreen({score}) {
  const [showSaveForm, setShowSaveForm] = useState(false)
  const handleSaveClick = () =>{
    setShowSaveForm(true)
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
  }

  useEffect(async ()=>{
    const scoreId = await request.post('/api/v1/scores').send({name:'anonymous', score})
  },[])

  return (
    <div className=" bg-white w-1/2 mx-auto mt-24 h-60 flex justify-center flex-col items-center">
      <h2>Your score: {score}</h2>
      <button onClick={handleSaveClick}>Save score</button>
      {showSaveForm && 
        <form>
          <input type="text" onSubmit={handleSubmit}/>
        </form>}
    </div>
  )
}

export default FinishScreen