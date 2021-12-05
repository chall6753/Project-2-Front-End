import React from "react";
import { useParams } from "react-router";

function PepperDetail({pepperList}) {
  let id = parseFloat(useParams().id)
  const pepper = pepperList.filter((pepper)=>{
    return pepper.id === id}
  )
  return (
    <div className='body'>
      <h1>
        {pepper[0].name} 
      </h1> 
      <div >
        <img className='pepperImage' src={pepper[0].image}></img>
        <div>
          <h2>About</h2>
          <p>{pepper[0].about}</p>
        </div>
      </div> 
    </div>
  );
}

export default PepperDetail;
