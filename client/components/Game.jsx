import React, {useState} from "react";

function Game () {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
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
          setX(x=>x-1)
          break;

        //up
        case 38:
          setY(y=>y-1)
          break;

        //right
        case 39:
          setX(x=>x+1)
          break;

          //down
        case 40:
          setY(y=>y+1)
          break;
        default:
          break;
      setX(value=>value+10)
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

  const handleKeyUp = () =>{
    // clearInterval(myInterval)
  }

  // const [style, setStyle] = useState({
  //   width: '10px',
  //   height:'10px',
  //   backgroundColor: 'black'
  // })

  const style = {
    // transform: 'translate(10px)',
    width: '10px',
    height:'10px',
    backgroundColor: 'black'
  }

  return (
    <div onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} autoFocus tabIndex={-1}>
      {/* <form>
        <input type="text" onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} tabIndex="0"/>
      </form> */}
      <h2>Game</h2>
      <div className=" w-64 h-36 bg-white mx-auto">
        <div style={{...style, transform:`translate(${x}px, ${y}px)`}}></div>
        {/* <div style={style}></div> */}
        {/* <div className={'w-2 h-2 bg-black translate-x-['+x+'px] translate-y-['+y+'px]'}></div> */}
        {/* <div className={`w-2 h-2 bg-black translate-x-[10px] translate-y-[20px]`}></div> */}
      </div>
    </div>
  )
}

export default Game 