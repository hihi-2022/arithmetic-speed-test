
import React from "react";

function Snake() {

  const cell = {
    style: {color: 'blue'}
  }
  //create a matrix
    const grid = Array(8).fill().map(()=>Array(8).fill({...cell}))


  const handleKeyDown = (e) =>{
    console.log(e.keyCode);
  }
  return (
    <div onKeyDown={handleKeyDown} tabIndex="0" className=" flex flex-col items-center">
     {grid.map((row,i)=>
        <div key={i} className="flex">
          {row.map((item, i)=>{
            return <div key={i} className=" w-8 h-8 bg-blue-400 border "></div>}
            )}
        </div>
      )}
    </div>
  )
}

export default Snake