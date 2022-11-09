import React, {useState, useEffect} from "react";

function Math() {
  const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
  const [num1, setNum1] = useState(randomNum(10,99))
  const [num2, setNum2] = useState(randomNum(10,99))
  
  return (
    <div>
      <h2>Math</h2>
      <h2>{num1}+{num2}</h2>
    </div>
  )
}

export default Math