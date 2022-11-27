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

  const getSeries = () => {
    const newSeries = []
    const indexes = [...coordinateIndexes]
    for (let i = 0; i < 9; i++) {
      const randomMetaIndex = randomNum(0, indexes.length-1)
      const randomIndex = indexes[randomMetaIndex]
      newSeries.push(allCoordinates[randomIndex])
      indexes.slice(randomMetaIndex, 1)         
    }
    return newSeries
  }

  const [series, setSeries] = useState(getSeries())
  const [grid, setGrid] = useState([...gridData])
  const [started, setStarted] = useState(false)

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
    console.log(newGrid);
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
    console.log('start game');
    setStarted(true)
    hideDigits()
  }
  
  const handleClick = () => {
    if (!started) {
      startGame()
    }
  }

  useEffect(() => {
    setGrid(makeGrid())
  }, [series])

  return ( 
    <>
    <div className=" mt-24 flex flex-col items-center">
      <div className="  bg-gray-700 p-1">
        {grid.map((row,i)=>
          <div key={i} className="flex">
            {row.map((item, i)=>{
              return <div key={i} onClick = {handleClick} className=" w-10 h-10 border m-1 text-white text-xl flex items-center justify-center cursor-pointer" style={item.style} > <span> {item.digit} </span> </div>}
              )}
          </div>)
        }
      </div>
    </div>
    </>
   )
}
 
export default MemoryTest;