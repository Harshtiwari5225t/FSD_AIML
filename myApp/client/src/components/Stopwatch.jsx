import React from 'react'
import { useState,useEffect } from 'react';

const Stopwatch = () => {
  const [timer,setTimer]=useState(0);
  const [running,setRunning]=useState(false);

  useEffect(()=>{
    let time;
    if (running){
    time = setInterval(()=>{
      setTimer((pt)=>pt+10)
    },10)
  }
  
  return ()=>   clearInterval(time);
  
  },[running])

  function reset(){
    setTimer(0);
  }
  
  const ms=timer%1000;
  const s=Math.round(timer/1000)%60;
  const m=Math.trunc(timer/60000);

  function toggleButton(){
    if (running){
      setRunning(false)
    }
    else{
      setRunning(true)
    }
  }


  return (
    <div >
      <div className='stop'>
        {m}:{s}:{ms}
        <button onClick={toggleButton}>{running?"STOP":"START"}</button>
        <button onClick={reset}>RESET</button>
      </div>
    </div>
  )
}

export default Stopwatch
