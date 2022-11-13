import React, {useState, useEffect} from "react";

function MathTest() {
  const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
  const [num1, setNum1] = useState(randomNum(10,99))
  const [num2, setNum2] = useState(randomNum(10,99))
  const [count, setCount] =useState(0)

  const refreshQuestion = () =>{
    setNum1(randomNum(10,99))
    setNum2(randomNum(10,99))
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    const answer = e.target.elements.answer.value
    if (Number(answer)===num1+num2){
      setCount(count+1)
    }
    refreshQuestion()
  }
  console.log(num1+num2)
  // useEffect(()=>{
  //   console.log('start')
  // },[])

  return (
    <div>
      <div className=" text-center">
        <h2>Math</h2>
          <h2 className="mt-16 text-xl">Correct answers: {count}</h2>
          <div className=" bg-white w-1/3 mx-auto mt-5 p-4 rounded-md h-36 flex items-center justify-center">
          <h2 className=" text-4xl">{num1} + {num2}</h2>
        </div>
        
        <form onSubmit={handleSubmit} className=" w-1/3 mx-auto mt-5 border border-slate-400">
          <input type="text" name="answer" className="w-full"/>
          {/* <input type="submit" hidden/> */}
        </form>
      </div>
    </div>
  )
}

export default MathTest