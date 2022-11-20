import React, {useState, useEffect} from "react";
import FinishScreen from "./FinishScreen";

function MathTest() {
  const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
  const [num1, setNum1] = useState(randomNum(10,99))
  const [num2, setNum2] = useState(randomNum(10,99))
  const [count, setCount] =useState(0)
  const [input, setInput] = useState('')
  const [started, setStarted] = useState(false)
  const [timesUp, setTimesUp] = useState(false)
  const [timerAnimation, setTimerAnimation] = useState('')

  const refreshQuestion = () =>{
    setNum1(randomNum(10,99))
    setNum2(randomNum(10,99))
  }

  const startGame = () =>{
    setStarted(true)
    setTimerAnimation('animate-[shrink_2s_linear_forwards]')
    setTimeout(()=>{
      setTimesUp(true)
      console.log("Time's up!")
    }, 2000)
    
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if (!started) {
      startGame()
    }

    if (Number(input)===num1+num2){
      setCount(count+1)
    }
    refreshQuestion()
    setInput('')
  }

  const handleChange = (e) =>{
    setInput(e.target.value)
  }

  console.log(num1+num2)

  useEffect(()=>{
    console.log('start')
  },[])

  return (  
      timesUp ? 
        <div className=" text-center">
          <h2>Math</h2>
          <h2 className="mt-16 text-xl">Correct answers: {count}</h2>
          {timesUp && <p>Stop!</p>}
          <div className=" w-1/3 mx-auto mt-5">
            <div className={` bg-red-500 h-1 w-full ${timerAnimation}`}></div>
            <div className=" bg-white p-4 rounded-md h-36 flex items-center justify-center">
              <h2 className=" text-4xl">{num1} + {num2}</h2> 
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className=" w-1/3 mx-auto mt-5 border border-slate-400">
            <input type="text" name="answer" value={input} onChange={handleChange} className="w-full"/>
          </form>
        </div> : <FinishScreen score={count}/>
    
  )
}

export default MathTest