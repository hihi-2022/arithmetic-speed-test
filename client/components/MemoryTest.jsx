import React, {useEffect, useState} from "react";

const MemoryTest = () => {
  const rowNum = 5
  const colNum = 8
  const hiddenCell = {backgroundColor: 'white'}
  const cell ={
    digit: null,
    style: {}
  }

  const gridData = Array(rowNum).fill().map(()=>Array(colNum).fill({...cell}))
  // const gridDigits = Array(rowNum).fill().map(()=>Array(colNum).fill(null))
  // const gridStyle = Array(rowNum).fill().map(()=>Array(colNum).fill({}))

  const allCoordinates = []
  const coordinateIndexes = []
  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      allCoordinates.push([row, col])
      coordinateIndexes.push(row*colNum + col)
    }
  }
  const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

  const [level, setLevel] = useState(4)

  const getSeries = () => {
    const newSeries = []
    const indexes = [...coordinateIndexes]
    for (let i = 0; i < level; i++) {
      const randomMetaIndex = randomNum(0, indexes.length-1)
      const randomIndex = indexes[randomMetaIndex]
      newSeries.push(allCoordinates[randomIndex])
      indexes.splice(randomMetaIndex, 1) 
    }
    return newSeries
  }

  const [series, setSeries] = useState(getSeries())
  const [grid, setGrid] = useState([...gridData])
  const [started, setStarted] = useState(false)
  const [currentDigit, setCurrentDigit] = useState(1)

  const makeGrid = () => {
    const newGrid = [...gridData]
    // const newGrid = [...gridDigits]
    // const newGridStyle = [...gridStyle]
    series.forEach((item, i) => {
      const row = item[0]
      const col = item[1]
      newGrid[row][col] = {...cell}
      newGrid[row][col].digit = i + 1
      // gridStyle[row][col] = {...hiddenCell}
      
    })
    return newGrid
  }

  const hideDigits = () => {
    series.forEach(item => {
      const row = item[0]
      const col = item[1]
      grid[row][col].style = {...hiddenCell}
    })
  }

  const startGame = () => {
    setStarted(true)
    hideDigits()
  }
  
  const handleClick = (digit, row, col) => {
    console.log(currentDigit);
    if (!started) {
      startGame()
    }

    if (digit === currentDigit) {
      setCurrentDigit (digit => digit + 1)
      grid[row][col].style = {opacity: 0}
    } else {
      console.log('game over');

    }

  }

  useEffect(() => {
    console.log(series);
    setGrid(makeGrid())
  }, [series])

  return ( 
    <>
    <div className=" mt-24 flex flex-col items-center">
      <h2 className=" text-xl"> Level: {level - 3} </h2>
      <div className="  bg-gray-700 p-1">
        {grid.map((row, iRow) =>
          <div key={iRow} className="flex">
            {row.map((cell, iCol) => {
              return <div key={iCol} onClick = {() => {handleClick(cell.digit, iRow, iCol)}} className=" w-10 h-10 border m-1 text-white text-2xl flex items-center justify-center cursor-pointer" style={cell.style} > <span> {cell.digit} </span> </div>}
              )}
          </div>)
        }
      </div>
    </div>
    </>
   )
}
 
export default MemoryTest;