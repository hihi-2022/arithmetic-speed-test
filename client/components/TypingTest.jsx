import userEvent from "@testing-library/user-event";
import React, {useEffect, useState, useRef} from "react";
import {getRandomParagraphs} from '../apiClient'

function TypingTest() {
  const inputRef = useRef(null)
  const [textToType, setTextToType] = useState('')
  const [typedText, setTypedText] = useState('')
  const [time, setTime] = useState(0)


  const handleChange = (e) =>{
    const inputValue = e.target.value 
    const char = inputValue.charAt(inputValue.length-1)
    if (char===textToType.charAt(0)){
      setTextToType(textToType.substring(1))
      setTypedText(typedText+char)
    }
  }

  const handleClick = () =>{
    inputRef.current.focus()
  }

  const timerRender = (seconds) =>{
    const minute = Math.floor(seconds/60)
    const remainSeconds = seconds%60
    const minuteString = minute.toString().padStart(2,'0')
    const secondString = remainSeconds.toString().padStart(2,'0')
    return minuteString+':'+secondString
  }
  
  useEffect(async () => {
    const data = await getRandomParagraphs()
    setTextToType(data)
    const interval = setInterval(()=>{
      setTime(time=>time+1)
    },1000)
  },[])

  return (
    <div>
      <h2>TypingTest</h2>

      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="time">Set time</label>
        <input type="number" name="time"/>
      </form> */}

      <h2 className=" text-center">{timerRender(time)}</h2>
      <div className=" w-1/2 mx-auto mt-5 bg-white p-4 rounded-md" onClick={handleClick}>
        <p> 
          <span className=" text-red-500">{typedText}</span>
          <span className=" animate-[flicker_1s_infinite]">|</span> 
          {textToType}
        </p>
      </div>
      <form className=" opacity-0">
        <input type="text" autoFocus ref={inputRef} onChange={handleChange} className=" "/>
      </form>
    </div>
  )
}

export default TypingTest