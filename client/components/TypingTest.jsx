import React, {useEffect, useState} from "react";
import {getRandomParagraphs} from '../apiClient'

function TypingTest() {
  const [textToType, setTextToType] = useState('')
  const [typedText, setTypedText] = useState('')
  const [currentChar, setCurrentChar] = useState('')
  // const [input, setInput] = useState('')
  // const [lastTypedChar, setLastTypedChar] = useState()

  const handleChange = (e) =>{
    // setInput(e.target.value)
    // console.log(e.target.value);
    // const char = input.charAt(input.length-1)
    // console.log(char===textToType.charAt(0));
    const char = e.target.value.charAt(e.target.value.length-1)
    if (char===textToType.charAt(0)){
      setTextToType(textToType.substring(1))
      setTypedText(typedText+char)
    }

  }

  // const handleKeyDown = (e) =>{
  //   setInput(e.key)
  //   console.log(textToType.charAt(0), input);
  //   if (input===textToType.charAt(0)){
  //     console.log('match');
  //   } 
  // }
  
  useEffect(async () => {
    const data = await getRandomParagraphs()
    setTextToType(data)
  },[])
  
  // useEffect(async () => {
  //   // console.log(input);
  //   setInput('')
  // },[input])

  return (
    <div>
      <h2>TypingTest</h2>
      <div className=" w-1/2 mx-auto mt-5 bg-white p-4 rounded-md">
        <p> 
          <span className=" text-red-500">{typedText}</span>
          <span className=" animate-[flicker_1s_infinite]">|</span> 
          {textToType}
        </p>
      </div>
      <form className=" opacity-0">
        <input type="text" autoFocus onChange={handleChange}/>
        {/* <input type="text" autoFocus value={input} onChange={handleChange} onKeyDown={handleKeyDown}/> */}
      </form>
    </div>
  )
}

export default TypingTest