import React from "react";
import {Link} from "react-router-dom"
import Card from "./Card";

function Home() {
  return (
    <div className=" mt-10">
      {/* <h2>Home</h2> */}
      {/* <Link to='/mathtest'>  */}
      <Card title="Test your math Speed" /> 
      {/* </Link> <br></br> */}
      <Link to='/typingtest'>Go to typing test</Link> <br></br>
      <Link to='/game'>Go to game</Link> <br></br>
      <Link to='/snake'>Go to snake</Link>
    </div>
  )
}

export default Home