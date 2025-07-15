import React from "react";

function Greeting(props) {
 return(
    <>
        <h3>Welcome to our React Course!</h3>
      <p>We're excited to have you on board.{props.name}</p>
       <p>{props.message}</p>
    </>
 );
}

export default Greeting;