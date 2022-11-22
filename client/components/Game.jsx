import React, {useState} from "react";

function Game () {
  const speed = 4
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [count, setCount] = useState(0)
  const [squares, setSquares] = useState([])
  // let y1 = 0
  // let startedX  = 0
  // let startedY = 0
  // const [startedX, setStartedX] = useState(0)
  // const [startedY, setStartedY] = useState(0)
  // const [myInterval, setmyInterval] = useState(0)

  const handleKeyDown = (e) =>{
    console.log('test', e.keyCode)
    // setX(x+1)
    // if (e.keyCode)
    // const interval = setInterval(
    //   ()=>{
      switch (e.keyCode) {
        //left
        case 37:
          setX(x=>x-speed)
          break;

        //up
        case 38:
          setY(y=>y-speed)
          break;

        //right
        case 39:
          setX(x=>x+speed)
          break;

          //down
        case 40:
          setY(y=>y+speed)
          break;
        case 32:
          setCount(count=>count+1)
          setY1(y)
          setSquares(squares=>[...squares, {
            top: y
          }])
          // y1 = y
          // console.log(getTop())
        default:
          break;
      }
    //   move(e.keyCode)
    // , 100)
  }

  // const move = (keyCode) =>{
  //   switch (keyCode) {
  //     //left
  //     case 37:
  //       return ()=>{setX(x=>{
  //         if (x>0){
  //           return x-1
  //         }
  //       })}

  //     //up
  //     case 38:
  //       return ()=>{setX(y=>{
  //         if (y>0){
  //           return y-1
  //         }
  //       })}

  //     //right
  //     case 39:
  //       return ()=>{setX(x=>x+1)}

  //       //down
  //     case 40:
  //       return ()=>{setY(y=>y+1)}

  //     default:
  //       return null
  //   }
  // }

  // const handleKeyUp = () =>{
    // clearInterval(myInterval)
  // }

  // const [style, setStyle] = useState({
  //   width: '10px',
  //   height:'10px',
  //   backgroundColor: 'black'
  // })

  const [y1, setY1] = useState(y)

  return (
    <div onKeyDown={handleKeyDown} tabIndex={-1}>
      {/* <form>
        <input type="text" onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} tabIndex="0"/>
      </form> */}
      <h2>Game</h2>
      <div className=" relative w-64 h-36 bg-white mx-auto" >
        <div style={{transform:`translate(${x}px, ${y}px)`}} className="w-3 h-3 bg-black"></div>
        {squares.map(square=> <div style={{top:square.top+'px'}} className="w-3 h-3 bg-black absolute animate-[goleft_5s_linear_forwards]"></div>)}
       
        {/* <div style={{...style}} className=" animate-[goleft_5s_linear_forwards]"></div> */}
        {/* <div style={style}></div> */}
        {/* <div className={'w-2 h-2 bg-black translate-x-['+x+'px] translate-y-['+y+'px]'}></div> */}
        {/* <div className={`w-2 h-2 bg-black translate-x-[10px] translate-y-[20px]`}></div> */}
      </div>
    </div>
  )
}

export default Game 