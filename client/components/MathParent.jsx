import React, {useEffect, useState} from "react";
import MathTest from "./MathTest";
import FinishScreen from "./FinishScreen";

function MathParent() {
  const [timeDone, setTimeDone] = useState(false)
    //start timer
    useEffect(()=>{
      setTimeout(()=>{
        setTimeDone(true)
      }, 6000)
    },[])
  return (
    <div>
      {!timeDone && <MathTest />}
    </div>
  )
}

export default MathParent