import React, {useState, useRef, useEffect} from "react";
import FinishScreen from "./FinishScreen";

function MathTest() {
  const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
  const time = 30

  const [num1, setNum1] = useState(randomNum(10,99))
  const [num2, setNum2] = useState(randomNum(10,99))
  const [count, setCount] =useState(0)
  const [input, setInput] = useState('')
  const [started, setStarted] = useState(false)
  const [timesUp, setTimesUp] = useState(false)
  const [timerAnimation, setTimerAnimation] = useState('')
  const [inputAnimation, setInputAnimation] = useState('')
  
  const ref = useRef()

  const refreshQuestion = () =>{
    setNum1(randomNum(10,99))
    setNum2(randomNum(10,99))
  }

  const startGame = () =>{
    setStarted(true)
    setTimerAnimation('animate-[shrink_30s_linear_forwards]')
    setTimeout(()=>{
      setTimesUp(true)
    }, time*1000)
    
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if (!started) {
      startGame()
    }

    if (Number(input)===num1+num2){
      setCount(count+1)
    } else {
      setInputAnimation('focus:border-2 focus:border-red-600 animate-[wobble_0.2s_ease-in-out]')
    }
    refreshQuestion()
    setInput('')
  }

  const handleChange = (e) =>{
    setInput(e.target.value)
  }

  const resetInputAnimation = (e) => {
    setInputAnimation('')
  }

  useEffect(()=>{
    ref.current.focus()
  }, [])

  return (  
      !timesUp ? 
      // timesUp ? 
        <div className=" text-center">
          <h2 className="mt-24 text-xl">Correct answers: {count}</h2>
          <div className=" w-96 mx-auto mt-5">
            <div className={ 'bg-red-500 h-1 w-full '+ timerAnimation}></div>
            <div className=" bg-white p-4 rounded-md h-36 flex items-center justify-center">
              <h2 className=" text-4xl">{num1} + {num2}</h2> 
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className={`w-96 mx-auto mt-5 border`}>
            <input type="text" name="answer" value={input} ref={ref} onChange={handleChange} autoComplete="off" className={`w-full focus:outline-0 border border-gray-400 ${inputAnimation}`} onAnimationEnd={resetInputAnimation}/>
          </form>
          
          {!started && 
            <p className="w-96 mx-auto mt-5"> You have 30 seconds. The timer will start after your first answer. </p>
          }

        </div> 
        : 
        <FinishScreen score={count}/>
    
  )
}

export default MathTest