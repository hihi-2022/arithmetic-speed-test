import React, {useEffect, useState} from "react";

const MemoryTest = () => {
  const rowNum = 5
  const colNum = 8
  const emptyGrid = Array(rowNum).fill().map(()=>Array(colNum).fill(null))

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
    for (let i = 0; i < 9; i++) {
      const randomMetaIndex = randomNum(0, coordinateIndexes.length-1)
      const randomIndex = coordinateIndexes[randomMetaIndex]
      newSeries.push(allCoordinates[randomIndex])
      coordinateIndexes.slice(randomMetaIndex, 1)         
    }
    console.log(newSeries);
    return newSeries
  }

  const [series, setSeries] = useState(getSeries())
  const [grid, setGrid] = useState([...emptyGrid])

  const makeGrid = () => {
    const newGrid = [...emptyGrid]
    series.forEach((item, i) => {
      const row = item[0]
      const col = item[1]
      newGrid[row][col] = i + 1
    })
    return newGrid
  }


  // useEffect(async () => {
  //   setSeries()
  // })

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
              return <div key={i} className=" w-10 h-10 border m-1 text-white text-xl flex items-center justify-center" > <span> {item} </span> </div>}
              )}
          </div>)
        }
      </div>
    </div>
    </>
   )
}
 
export default MemoryTest;