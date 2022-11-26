
import React, {useEffect, useState} from "react";

function Snake() {
  const gridHeight = 4
  const gridWidth = 4
  const cell = {
    backgroundColor: 'blue'
  }
  //create a matrix
  const gridData = Array(gridHeight).fill().map(()=>Array(gridWidth).fill({...cell}))
  
  const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

  const [grid, setGrid] = useState(gridData)
  const [snake, setSnake] = useState(null)
  const [food, setFood] = useState(null)
  const [direction, setDirection] = useState(0)

  const makeGrid = () => {
    const newGrid = [...gridData]
    snake.forEach(snakePart => {
      const row = snakePart[0]
      const col = snakePart[1]
      newGrid[row][col] = {backgroundColor:'red'}
    })
    const row = food[0]
    const col = food[1]
    newGrid[row][col] = {backgroundColor:'green'}

    return newGrid
  }

  const selfBite = (head, snake) => {
    //check if the head coordinates indentical with with any body part, except the tail
    const newSnake = [...snake]
    newSnake.pop()
    let result = false
    newSnake.forEach(snakePart => {
      console.log(snakePart[0], head[0], snakePart[1], head[1]);
      if (snakePart[0] === head[0] && snakePart[1] === head[1]) {
        result = true
      }
    })

    console.log(result);
    return result
  }

  const moveSnake = (newDirection) => {
    //not allow user to move to to the opposite direction
    if (newDirection + direction === 0) {
      return
    } 

    setDirection(newDirection)

    const head = [...snake[0]]
    let overEdge = false

    switch (newDirection) {
      //Up
      case -1:
        head[0]--
        if (head[0] < 0) {overEdge = true}
        break;
      
       //Down
      case 1:
        head[0]++
        if (head[0] > gridHeight -1) {overEdge = true}
        break;
      
      //Left
      case -2:
        head[1]--
        if (head[1] < 0) {overEdge = true}
        break;
      //Right
      case 2:
        head[1]++
        if (head[1] > gridWidth -1) {overEdge = true}
        break;    
      default:
        break;
      }
    
    //check if move is valid
    if (overEdge || selfBite(head, snake)) {
      console.log('game over');
    } 
    else {
      snake.unshift(head)
      const hitFood = head.every((Coordinate, index)=> Coordinate === food[index])
      if (hitFood) {
        setFood(makeFood())
      } else {
        snake.pop()
      }
      setSnake([...snake])
    }
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

    if (validCoordinates.length===0){
      console.log('game over');
    } else {
      const randomIndex = randomNum(0, validCoordinates.length-1)
      return validCoordinates[randomIndex]
    }
  }

  const handleKeyDown = (e) =>{
    console.log(e.keyCode);
  }
  
  useEffect(() => {
    setSnake([[0,1],[0,2],[1,2],[2,2],[3,2]])
    setFood(makeFood())
  },[])

  useEffect(() => {
    if (snake){
      setGrid(makeGrid(snake))
    }
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
      <button onClick={()=>{moveSnake(-1)}}> ^ </button>
      <button onClick={()=>{moveSnake(1)}}> v </button>
      <button onClick={()=>{moveSnake(2)}}> {'>'} </button>
      <button onClick={()=>{moveSnake(-2)}}> {'<'} </button>
    </div>
  )
}

export default Snake