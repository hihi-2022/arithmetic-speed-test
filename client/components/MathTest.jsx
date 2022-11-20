import React, {useState, useEffect} from "react";

function MathTest() {
  const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
  const [num1, setNum1] = useState(randomNum(10,99))
  const [num2, setNum2] = useState(randomNum(10,99))
  const [answer, setAnswer] = useState('')
  const [count, setCount] =useState(0)
  const [input, setInput] = useState('')
  const [timesUp, setTimesUp] = useState(false)

  const refreshQuestion = () =>{
    setNum1(randomNum(10,99))
    setNum2(randomNum(10,99))
  }

  const handleChange =(e) =>{
    setAnswer(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    // const answer = e.target.elements.answer.value
    if (Number(answer)===num1+num2){
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
    setTimeout(()=>{
      setTimesUp(true)
      console.log("Time's up!")
    }, 30000)
  },[])

  return (
      <div className=" text-center">
        <h2>Math</h2>
          <h2 className="mt-16 text-xl">Correct answers: {count}</h2>
          {timesUp && <p>Stop!</p>}
          <div className=" w-1/3 mx-auto mt-5">
            <div className=" bg-red-500 h-1 w-full"></div>
            <div className=" bg-white p-4 rounded-md h-36 flex items-center justify-center">
            <h2 className=" text-4xl">{num1} + {num2}</h2>

          </div>
        </div>
        
        <form onSubmit={handleSubmit} className=" w-1/3 mx-auto mt-5 border border-slate-400">
          <input type="text" name="answer" value={input} onChange={handleChange} className="w-full"/>
          {/* <input type="submit" hidden/> */}
        </form>
      </div>
  )
}

export default MathTest