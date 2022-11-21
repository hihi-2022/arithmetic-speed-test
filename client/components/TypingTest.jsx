import userEvent from "@testing-library/user-event";
import React, {useEffect, useState, useRef} from "react";
import {getRandomParagraphs} from '../apiClient'

function TypingTest() {
  const inputRef = useRef(null)
  const [textToType, setTextToType] = useState('')
  const [typedText, setTypedText] = useState('')
  const [time, setTime] = useState(0)
  const [myInterval, setmyInterval] = useState(0)

  const handleChange = (e) =>{
    const inputValue = e.target.value 
    const char = inputValue.charAt(inputValue.length-1)
    if (char===textToType.charAt(0)){
      setTextToType(text=>text.substring(1))
      setTypedText(typedText+char)
    }
  }

  const handleClick = () =>{
    inputRef.current.focus()
  }

  const stop = () =>{
    console.log(myInterval)
    clearInterval(myInterval)
  }

  const timerRender = (seconds) =>{
    const minute = Math.floor(seconds/60)
    const remainSeconds = seconds%60
    const minuteString = minute.toString().padStart(2,'0')
    const secondString = remainSeconds.toString().padStart(2,'0')
    return minuteString+':'+secondString
  }
  
  const typingSpeed = (text, time) =>{
    const minute = time/60
    const spaces = text.match(/([\s]+)/g)  //get all spaces
    if (spaces) {
      const wordNum = spaces.length +1
      return Math.floor(wordNum/minute)
    } else {return 0}
  }

  
  useEffect(async () => {
    const text = await getRandomParagraphs()
    setTextToType(text)

    const interval = setInterval(()=>{
      setTime(time=>time+1)
    },1000)
    setmyInterval(interval)
  },[])

  return (
    <div className=" text-center">
      <h2>TypingTest</h2>

      <h2 className=" text-center">Time: {timerRender(time)}</h2>
      <h2 className=" text-center">Your typing speed: {typingSpeed(typedText, time)}</h2>
      <div className=" w-1/2 mx-auto mt-5 bg-white p-4 rounded-md" onClick={handleClick}>
        <p> 
          <span className=" text-red-500">{typedText}</span>
          <span className=" bg-blue-300">{textToType.charAt(0)}</span>
          {textToType.substring(1)}
        </p>
      </div>

      <button onClick={stop} className=" border bg-red-400 mt-5">Stop</button>

      <form className=" opacity-0">
        <input type="text" autoFocus ref={inputRef} onChange={handleChange} className=" "/>
      </form>
    </div>
  )
}

export default TypingTest