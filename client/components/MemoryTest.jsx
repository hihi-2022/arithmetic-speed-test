import React from "react";

const MemoryTest = () => {
  const rowNum = 5
  const colNum = 8
  const grid = Array(rowNum).fill().map(()=>Array(colNum).fill(null))

  return ( 
    <>
    <div className=" mt-24 flex flex-col items-center">
      <div className="  bg-slate-700 p-1">
        {grid.map((row,i)=>
          <div key={i} className="flex">
            {row.map((item, i)=>{
              return <div key={i} className=" w-10 h-10 border m-1" >{item}</div>}
              )}
          </div>)
        }
      </div>
    </div>
    </>
   )
}
 
export default MemoryTest;