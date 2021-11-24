import React, {useEffect, useState} from "react";
import Home from "./Home";
import { Route } from "react-router-dom";
import PepperList from "./PepperList";
import NavBar from "./NavBar";
import PepperDetail from "./PepperDetail";
import EmailSignUp from "./EmailSignUp";

function App() {
const [pepperList, setPepperList]=useState([])

let URL = 'http://localhost:3000'

if(process.env.NODE_ENV == 'production'){
  URL = process.env.REACT_APP_API_URL
}

console.log(URL)
  useEffect(()=>{
    fetch(`${URL}peppers`)
    .then((response)=>response.json())
    .then((data)=>setPepperList(data))
    
  },[])

  
  return (
    <div className='main'>
      <div className='sidenav'>
        <NavBar/> 
      </div>
      <div className='body'>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/peppers'>
          <PepperList pepperList={pepperList}/>
        </Route>
        <Route exact path='/peppers/:id'>
          <PepperDetail pepperList={pepperList}/>
        </Route>
        <Route exact path='/sign-up'>
          <EmailSignUp pepperList={pepperList}/>
        </Route>
      </div>
    </div>
  );
}

export default App;
