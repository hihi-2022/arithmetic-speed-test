
import React, {useEffect, useState} from "react";

function Snake() {
  const [snake, setSnake] = useState([[4,4]])
  const cell = {
    backgroundColor: 'blue'
  }
  //create a matrix
  const gridData = Array(8).fill().map(()=>Array(8).fill({...cell}))
  const [grid, setGrid] = useState(gridData)

  const handleKeyDown = (e) =>{
    console.log(e.keyCode);
  }
  
  const handleClick = () =>{
    setSnake([[3,3]])
  }

  const makeGrid = (snake) =>{
    const newGrid = [...gridData]
    snake.forEach(item => {
      const x=snake[0][0]
      const y = snake[0][1]
      newGrid[x][y]={backgroundColor:'red'}
    });
    return newGrid
  }

  useEffect(()=>{
    // console.log({snake, grid})
    // const x=snake[0][0]
    // const y = snake[0][1]
    // console.log(x,y)
    // grid[x][y]={backgroundColor:'red'}
    // setGrid([...grid])
    setGrid(makeGrid(snake))
  },[snake])

  
  return (
    <div onKeyDown={handleKeyDown} tabIndex="0" className=" flex flex-col items-center">
     {grid.map((row,i)=>
        <div key={i} className="flex">
          {row.map((item, i)=>{
            return <div key={i} className=" w-8 h-8 border " style={item}></div>}
            )}
        </div>
      )}
      <button onClick={handleClick}>change color</button>
    </div>
  )
}

export default Snake