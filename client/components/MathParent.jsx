import React, {useEffect, useState} from "react";
import MathTest from "./MathTest";
import FinishScreen from "./FinishScreen";

function MathParent() {
  const [timeDone, setTimeDone] = useState(false)
    //start timer
    useEffect(()=>{
      setTimeout(()=>{
        setTimeDone(true)
      }, 1000)
    },[])
  return (
    <div>
      {/* {!timeDone && <MathTest />}
      {timeDone && <FinishScreen />} */}
      <FinishScreen />
    </div>
  )
}

export default MathParent