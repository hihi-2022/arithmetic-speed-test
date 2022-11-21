import React, {useEffect, useState} from "react";
import {getRandomParagraphs} from '../apiClient'

function TypingTest() {
  const [text, setText] = useState('')

  useEffect(async () => {
    const data = await getRandomParagraphs()
    const cleanText = data.replace(/<\/?[^>]+(>|$)/g, "")
    setText(data)
    console.log(cleanText)
  },[])
  return (
    <div>
      <h2>TypingTest</h2>
      <div dangerouslySetInnerHTML={{__html:text}} / >
    </div>
  )
}

export default TypingTest