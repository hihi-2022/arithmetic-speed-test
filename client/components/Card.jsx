import React from "react";

const Card = ({title}) => {

  return ( 
    // <Link to={link}>
      <div className=" w-36">
        <h1> {title} </h1>
        <img src="https://images.twinkl.co.uk/tw1n/image/private/t_630/image_repo/66/0a/T-M-364-display-numbers-black.jpg" alt="math" className=" object-cover"/>
      </div>
    // </Link>
   );
}
 
export default Card;