
import React, {useEffect, useState} from "react";

function Snake() {
  const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
  const [snake, setSnake] = useState([[4,4]])
  const [food, setFood] = useState([0,0])
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
    const head = [...snake[0]]
    switch (direction) {
      case 'up':
        head[0]--
        // setSnake([...snake])
        break;
      case 'down':
        head[0]++
        // setSnake([...snake])
        break;
      case 'left':
        head[1]--
        // setSnake([...snake])
    
        break;
      case 'right':
        head[1]++
        // setSnake([...snake])
        break;    
      default:
        break;
      }
    snake.unshift(head)
    const hitFood = head.every((cordinate, index)=> cordinate === food[index])
    if (!hitFood) {
      snake.pop()
    setSnake([...snake])
  }
  }

  const makeFood = () =>{
    const row = randomNum(0,7)
    const col = randomNum (0,7)
    setFood([row, col])
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

  useEffect(()=>{
    makeFood()
  },[])

  
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