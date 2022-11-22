
import React from "react";

function Snake() {
  const matrix = [[0,0,0], [0,0,0],[0,0,0]]
  const handleKeyDown = (e) =>{
    console.log(e.keyCode);
  }
  return (
    <div onKeyDown={handleKeyDown} tabIndex="0" className=" flex flex-col items-center">
     {matrix.map(row=>
        <div className="flex">
          {row.map(cell=>
            <div className=" w-10 h-10 bg-blue-400 border "></div>
            )}
        </div>
      )}
    </div>
  )
}

export default Snake