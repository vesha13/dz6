
import React from "react";
import { useState, useEffect } from 'react';
export const Time =({item} ) => {

 
  const [date, setDate] = useState(new Date());
 
  function refreshClock() {
    setDate(new Date());
  }


  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
    
  }, []);

 const handleSubmi =(e) =>{
  e.preventDefault()
  item.completed = true
 }

    if (item.completed===false)
    {
  return (
    <div onSubmit={handleSubmi}>
      <div>{item.name} {item.hour}:{date.getMinutes()}:{date.getSeconds()}</div>
        <button  onClick = {(e)=>handleSubmi(e)}><h5>DEEEEL</h5></button>
      </div>
    )
  }
}
