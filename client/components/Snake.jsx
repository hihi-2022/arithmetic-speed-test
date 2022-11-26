
import React, {useEffect, useState} from "react";

function Snake() {
  const gridHeight = 8
  const gridWidth = 8
  const cell = {
    backgroundColor: 'blue'
  }
  //create a matrix
  const gridData = Array(gridHeight).fill().map(()=>Array(gridWidth).fill({...cell}))
  
  const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

  const [grid, setGrid] = useState(gridData)
  const [snake, setSnake] = useState([[4,4]])
  const [food, setFood] = useState(makeFood())

  const makeGrid = () =>{
    const newGrid = [...gridData]
    snake.forEach(snakePart => {
      const row = snakePart[0]
      const col = snakePart[1]
      newGrid[row][col]={backgroundColor:'red'}
    })
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
        break;
      case 'down':
        head[0]++
        break;
      case 'left':
        head[1]--
        break;
      case 'right':
        head[1]++
        break;    
      default:
        break;
      }

    snake.unshift(head)
    const hitFood = head.every((Coordinate, index)=> Coordinate === food[index])
    if (hitFood) {
      setFood(makeFood())
    } else {
      snake.pop()
    }
    setSnake([...snake])
  }

  function makeFood () {  
    const validCoordinates = []
    grid.forEach((row,iRow) => {
      row.forEach((cell, iCol)=> {
        if (cell.backgroundColor === 'blue') {
          validCoordinates.push([iRow, iCol])
        }
      })
    })
    const randomIndex = randomNum(0, validCoordinates.length-1)
    return validCoordinates[randomIndex]
    }

  const handleKeyDown = (e) =>{
    console.log(e.keyCode);
  }
  

  useEffect(()=>{
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