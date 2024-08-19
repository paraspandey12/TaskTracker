import React, { useState } from 'react'

const Stopwatch = () => {
  const [time, setTime]= useState(0);
  const [running , setRunning]= useState(0);
  
  useEffect(()=>{
    let interval;
    if(running){
      interval= setInterval(()=>{
        setTime((prevTime)=> prevTime+10);
      },10)
    }else if(!running){
      clearInterval(interval);
    }
    return ()=> clearInterval(interval);
   }, [running]);
  return (
    <>
    <div>
        <span>{("0"+ Math.floor((time/60000)%60)).slice(-2)}:</span>
        <span>{("0"+ Math.floor((time/1000)%60)).slice(-2)}:</span>
        <span>{("0"+ Math.floor((time/10)%60)).slice(-2)}</span>
      </div>
      <div>
      {running ? (<button onClick={()=>{setRunning(false)}}>pause</button>):(<button onClick={()=>{ setRunning(true)}}>start</button>) 
     }
      <button onClick={()=>{ setTime(0)}}>end</button>
    </div>
    </>
  )
}

export default Stopwatch