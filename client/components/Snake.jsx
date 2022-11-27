
import React, {useEffect, useState, useRef} from "react";

function Snake() {
  const rowNum = 20
  const colNum = 30
  const backgroundColor = 'rgb(226 232 240)'
  const snakeColor = 'rgb(51 65 85)'
  const foodColor = 'rgb(100 116 139)'
  const cell = {
    backgroundColor: backgroundColor
  }
  //create a matrix
  const gridData = Array(rowNum).fill().map(()=>Array(colNum).fill({...cell}))
  
  const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

  const [grid, setGrid] = useState(gridData)
  const [snake, setSnake] = useState(null)
  const [food, setFood] = useState(null)
  const [direction, setDirection] = useState(0)
  const [myInterval, setMyInterval] = useState(0)
  const [running, setRunning] = useState(false)
  const [gameOver, setGameOver] = useState(false)

  const ref = useRef(null)

  const makeGrid = () => {
    const newGrid = [...gridData]
    snake.forEach(snakePart => {
      const row = snakePart[0]
      const col = snakePart[1]
      newGrid[row][col] = {backgroundColor: snakeColor}
    })
    const row = food[0]
    const col = food[1]
    newGrid[row][col] = {backgroundColor: foodColor}

    return newGrid
  }

  const selfBite = (head, snake) => {
    //check if the new head coordinates indentical with with any body part, except the tail
    const newSnake = [...snake]
    newSnake.pop()
    let result = false
    newSnake.forEach(snakePart => {
      if (snakePart[0] === head[0] && snakePart[1] === head[1]) {
        result = true
      }
    })

    return result
  }


  const moveSnake = (direction) => {
    const head = [...snake[0]]
    let overEdge = false

    switch (direction) {
      //Up
      case -1:
        head[0]--
        if (head[0] < 0) {overEdge = true}
        break;
      
       //Down
      case 1:
        head[0]++
        if (head[0] > rowNum -1) {overEdge = true}
        break;
      
      //Left
      case -2:
        head[1]--
        if (head[1] < 0) {overEdge = true}
        break;

      //Right
      case 2:
        head[1]++
        if (head[1] > colNum -1) {overEdge = true}
        break;

      default:
        break;
      }
    
    //check if move is valid
    if (overEdge || selfBite(head, snake)) {
      endGame()
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
        if (cell.backgroundColor === backgroundColor) {
          validCoordinates.push([iRow, iCol])
        }
      })
    })

    if (validCoordinates.length===0){
      endGame()
    } 
    else {
      const randomIndex = randomNum(0, validCoordinates.length-1)
      return validCoordinates[randomIndex]
    }
  }

  const getDirection = (keyCode) => {
    switch (keyCode) {
      case 37:
        return -2
        case 38:
          return -1
      case 39:
        return 2
      case 40:
        return 1 
      default:
        return 0;
    }
  }

  const handleKeyDown = (e) =>{
    if (gameOver) {return}

    //spacebar to pause game
    if (e.keyCode === 32) {
      pauseGame()
      return
    }

    const newDirection = getDirection(e.keyCode)
    
    if (newDirection === 0) {return}

    //not allow switching to the opposite direction
    if (newDirection + direction === 0){return}
    setDirection(newDirection)
    
    //if the game is in progress, interval need to be clear
    if ( running ) {
      clearInterval(myInterval)
    } else {
      setRunning(true)
    }

    moveSnake(newDirection)
    const interval = setInterval(() => {
      moveSnake(newDirection)
    }, 70);
    setMyInterval(interval)
  }
  

  const pauseGame = () => {
    clearInterval(myInterval)
    setRunning(false)
  }

  const endGame = () => {
    setGameOver(true)
    setRunning(false)
    setGrid(gridData)
  }

  useEffect(() => {
    ref.current.focus()
    setSnake([[rowNum/2, colNum/2]])
    setFood(makeFood())
  },[])

  useEffect(() => {
    if (snake){
      setGrid(makeGrid(snake))
    }
  },[snake])

  
  return (
    <div ref={ref} onKeyDown={handleKeyDown} tabIndex={-1} className="  h-full w-full absolute top-0 ">
      <div className=" mt-40 text-center ">
     
        <h2 className=" mb-3 text-2xl">Score: {snake?.length - 1}</h2>
        
        <div className=" flex flex-col items-center relative ">

        {gameOver && 
          <div className=" absolute h-full z-10 flex items-center">
            <h1 className=" text-4xl">GAME OVER!</h1>
          </div>
        }

        {/********  Game play area ********/}
          <div className="  border-8 border-slate-700 flex flex-col">
            {grid.map((row,i)=>
              <div key={i} className="flex">
                {row.map((item, i)=>{
                  return <div key={i} className=" w-4 h-4 border-0 " style={item}></div>}
                  )}
              </div>)
            }
          </div>
        </div>

        {/********  Game instruction ********/}
        <div className=" mt-5 text-xl">
          {!gameOver && 
            <>
              {running  ?
                <p> Press spacebar to pause </p>
                :
                <p> Press any arrow key to start </p>
              } 
            </> 
        }
        </div>    
      </div>

    </div>
  )
}

export default Snake