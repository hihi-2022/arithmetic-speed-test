import React, {useState, useEffect} from "react";
import request from "superagent";

function FinishScreen({score}) {
  const [scoreId, setScoreId] = useState(0)
  const [showSaveForm, setShowSaveForm] = useState(false)
  const handleSaveClick = () =>{
    setShowSaveForm(true)
    console.log(scoreId);
  }
  const handleNameSubmit = async (e)=>{
    e.preventDefault()
    const name = e.target.name.value
    console.log(name);
    console.log(scoreId);
    await request.patch('/api/v1/scores/'+scoreId).send({name})
  }

  useEffect(async ()=>{
    const response = await request.post('/api/v1/scores').send({name:'anonymous', score})
    const id = await response.body.id[0]
    setScoreId(id)
  },[])

  return (
    <div className=" bg-blue-300 w-1/2 mx-auto mt-24 h-60 flex justify-center flex-col items-center">
      <h2>Your score: {score}</h2>
      <button onClick={handleSaveClick} className=" bg-pink-400">Save score</button>
      {showSaveForm && 
        <form onSubmit={handleNameSubmit}>
          <input type="text" name="name"/>
          <button>Submit</button>
        </form>}
    </div>
  )
}

export default FinishScreen