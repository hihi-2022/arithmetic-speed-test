import React, {useState,useEffect} from "react";
import request from "superagent";

function LeaderBoard() {
  const [scores, setScores] = useState([])
  useEffect(async()=>{
    const response = await request.get('/api/v1/scores')
    const data = await response.body
    setScores(data)
    console.log(data);
  },[])
  return (
    <div className=" bg-white w-4/6 mx-auto mt-24 text-center">
      <h2>Leader Board</h2>
      <table>
        <tbody>    
        <tr>
          <th></th>
          <th>Name</th>
          <th>Score</th>
        </tr>
      {scores.map((score,index) =>
        <tr key={score.id}>
          <td>{index+1}</td>
        <td>{score.name}</td>
          <td>{score.score}</td>
        </tr>
        )} 
        </tbody>
      </table>
    </div>
  )
}

export default LeaderBoard