import React from "react";
import {Link} from "react-router-dom"

function Home() {
  return (
    <div>
      {/* <h2>Home</h2> */}
      <Link to='/mathtest'>Go to Math</Link> <br></br>
      <Link to='typingtest'>Go to typing test</Link>
    </div>
  )
}

export default Home