import React, {useEffect, useState} from "react";

const MemoryTest = () => {
  const rowNum = 5
  const colNum = 8
  const hiddenCell = {backgroundColor: 'white'}
  const activeButton = {backgroundColor: 'rgb(107 114 128)', color: 'white'}
  const cell ={
    digit: null,
    style: {}
  }

  //****** Level selection button******/
  const [digitButtons, setDigitButton] = useState([])
  const unstyleButtons = []
  for (let i = 3; i < 10; i++) {
    unstyleButtons.push({
      digit: i
    })  
  }
  // const buttonInit = () => {
  //   const arr = []
  //   for (let i = 3; i < 10; i++) {
  //     arr.push({
  //       digit: i
  //     })  
  //   }
  //   setDigitButton(arr)
  // }


  const gridData = Array(rowNum).fill().map(()=>Array(colNum).fill({...cell}))
  
  const allCoordinates = []
  const coordinateIndexes = []
  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      allCoordinates.push([row, col])
      coordinateIndexes.push(row*colNum + col)
    }
  }
  const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
  
  const [digitNum, setDigitNum] = useState(3)
  
  const getSeries = (digitNumber) => {
    console.log(digitNumber);
    const newSeries = []
    const indexes = [...coordinateIndexes]
    for (let i = 0; i < digitNumber; i++) {
      const randomMetaIndex = randomNum(0, indexes.length-1)
      const randomIndex = indexes[randomMetaIndex]
      newSeries.push(allCoordinates[randomIndex])
      indexes.splice(randomMetaIndex, 1) 
    }
    return newSeries
  }

  const [series, setSeries] = useState(getSeries(3))
  const [grid, setGrid] = useState([...gridData])
  const [started, setStarted] = useState(false)
  const [currentDigit, setCurrentDigit] = useState(1)

  const makeGrid = () => {
    const newGrid = [...gridData]
    series.forEach((item, i) => {
      const row = item[0]
      const col = item[1]
      newGrid[row][col] = {...cell}
      newGrid[row][col].digit = i + 1
      
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
    if (!started) {
      startGame()
    }
    
    if (digit === currentDigit) {
      setCurrentDigit (digit => digit + 1)
      grid[row][col].style = {opacity: 0}
      if (digit === digitNum) {
        console.log('finished');
      }
    } else {
      console.log('game over');
    }
    
  }
  
  const changeLevel = (digitNumber) => {
    setSeries(getSeries(digitNumber))
    setDigitNum(digitNumber)
    const index = digitNumber - 3
    const newButtons = [...unstyleButtons]
    newButtons[index].style = {...activeButton}
    setDigitButton(newButtons)
  }

  useEffect(() => {
    // buttonInit()
    setDigitButton(unstyleButtons)
  },[])

  useEffect(() => {
    setGrid(makeGrid())
  }, [series])

  return ( 
    <>
    <div className=" mt-24 flex flex-col items-center">
      {/* <h2 className=" text-xl mb-2"> Level {digitNum - 2} - {digitNum} digits </h2> */}
      <div className=" text-lg mb-5">
        Number of digits:
        {
          digitButtons.map(button => <button key={button.digit} onClick={() => {changeLevel(button.digit)}} style= {button.style} className= " bg-slate-200 text-gray-700 px-3 py-1 mx-1 text-xl hover:bg-gray-500 hover:text-white"> {button.digit} </button>)
        }
      </div>
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