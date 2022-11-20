import React from "react";

function FinishScreen({score}) {
  console.log(score);
  return (
    <div className=" bg-white w-1/2 mx-auto mt-24 h-60 flex justify-center items-center">
      <h2>Your score: {score}</h2>
    </div>
  )
}

export default FinishScreen