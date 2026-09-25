import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [uname,setUname]=useState("");
    const [pass,setPass]=useState("");

    function handleSubmit(){
       if (uname=="admin"){
        useNavigate("/admin")
       }
       else if (uname=="user"){
        Navigate("/user")

       }
       else{
        alert("Bakkkkkkk");
       }
    }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" 
               name="Uname"
               placeholder='Enter UserName'
               value={uname}
               onChange={(e)=>setUname(e.target.value)
               }></input>
      
               <br></br>
      
        <label>Password</label>
      
        <input type="password" 
               name="pass"
               placeholder='Enter Password'
               value={pass}
               onChange={(e)=>setPass(e.target.value)
               }></input>
               <br></br>
            <button type="submit" onClick={handleSubmit}>Submit</button>
            <button type="reset">Reset</button>

        
      </form>
      

      
      
    </div>
  )
}

export default Login
