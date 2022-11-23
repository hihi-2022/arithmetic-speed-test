
import React, {useEffect, useState} from "react";

function Snake() {
  const [snake, setSnake] = useState([[4,4]])
  const [food, setFood] = useState([4,3])
  const cell = {
    backgroundColor: 'blue'
  }
  //create a matrix
  const gridData = Array(8).fill().map(()=>Array(8).fill({...cell}))
  const [grid, setGrid] = useState(gridData)

  const makeGrid = () =>{
    const newGrid = [...gridData]
    snake.forEach(snakePart => {
      const row = snakePart[0]
      const col = snakePart[1]
      newGrid[row][col]={backgroundColor:'red'}
    });
    const row = food[0]
    const col = food[1]
    newGrid[row][col] = {backgroundColor:'green'}

    return newGrid
  }

  const moveSnake = (direction) =>{
    switch (direction) {
      case 'up':
        snake[0][0]--
        setSnake([...snake])
        break;
      case 'down':
        snake[0][0]++
        setSnake([...snake])
        break;
      case 'left':
        snake[0][1]--
        setSnake([...snake])
    
        break;
      case 'right':
        snake[0][1]++
        setSnake([...snake])
        break;    
      default:
        break;
    }
  }

  const handleKeyDown = (e) =>{
    console.log(e.keyCode);
  }
  
  const handleClick = () =>{
    moveSnake(snake,'up')
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
      <button onClick={()=>{moveSnake('up')}}>Up</button>
      <button onClick={()=>{moveSnake('down')}}>down</button>
      <button onClick={()=>{moveSnake('right')}}>right</button>
      <button onClick={()=>{moveSnake('left')}}>left</button>
    </div>
  )
}

export default Snake