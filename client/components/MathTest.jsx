import React, {useState, useEffect} from "react";

function MathTest() {
  const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
  const [num1, setNum1] = useState(randomNum(10,99))
  const [num2, setNum2] = useState(randomNum(10,99))
  const [sum, setSum] = useState(num1+num2)

  const refreshQuestion = () =>{
    setNum1(randomNum(10,99))
    setNum2(randomNum(10,99))
    setSum(num1+num2)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    refreshQuestion()
  }
  
  // useEffect(()=>{
  //   console.log('start')
  // },[])

  return (
    <div>
      <div>
        <h2>Math</h2>
        <div className=" bg-white w-1/3 mx-auto mt-16 p-4 rounded-md h-36 flex items-center justify-center">
          <h2 className=" text-4xl">{num1} + {num2}</h2>
        </div>
        
        <form onSubmit={handleSubmit}>
          <input type="text" />
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default MathTest