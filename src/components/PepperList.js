import React from "react";
import { NavLink, Link } from "react-router-dom";



function PepperList({pepperList}) {
    
    
    
   

  return (
    <div className= "body">
        <h1>
            Pepper List
        </h1>
        <div className='grid-container'>
            {pepperList.map((pepper)=>{
              
                return(
                  <div className='pepper'>
                    <Link key={pepper.id} to={`/peppers/${pepper.id}`}>
                      <h2>
                        {pepper.name} 
                        <img className='pepperImage' src={pepper.image}>
                        </img>
                      </h2> 
                    </Link>
                  </div>
                )
                })
            }
        </div>
    </div>
  );
}

export default PepperList;
