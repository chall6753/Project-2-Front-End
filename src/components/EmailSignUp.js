import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

function EmailSignUp() {
const [name,setName]=useState('')
const[email,setEmail]=useState('')

function handleName(event){
    setName(event.target.value)
}
function handleEmail(event){
    setEmail(event.target.value)
}

fetch('http://localhost:3000/emailList')
    .then((response)=>response.json())
    .then((data)=>console.log(data))
    

function handleSubmit(event){
    event.preventDefault()
    fetch('http://localhost:3000/emailList',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
            
          },
        body: JSON.stringify({id:uuidv4(), name:name, email:email})
    })
    
     
}
console.log(name)
  return (
    <div className='body'>
      <h1>
        Sign Up For Weekly Email
     </h1>
     <p>Enter your information below to sign up for our monthly newsletter</p>
     <form onSubmit={handleSubmit}>
         <input type='text'defaultValue='Name' onChange={handleName}/>
         <input type='text' defaultValue='Email' onChange={handleEmail}/>
         <button type='submit'>Submit</button>
     </form>
    </div>
  );
}

export default EmailSignUp;
