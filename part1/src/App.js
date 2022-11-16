
import './App.css';
import React from 'react'
import { useState } from 'react';
import { Clock } from './Clock';
import { Time } from './Time';

function App() {

  const [time, SetTime] = useState([])
  

  const onChangeHour = (date, userInput, userInput2)=>{
    const newTime = {
      hour: date.getHours() -3,
      name: userInput2,
      completed: false
    }
    if (newTime.hour +  parseInt(userInput) > 23){
    newTime.hour = newTime.hour +  parseInt(userInput) - 24}
    else if (newTime.hour +  parseInt(userInput) <0)
    {newTime.hour = 24 - newTime.hour +  parseInt(userInput)}
    else 
    {newTime.hour = newTime.hour +  parseInt(userInput)}
    
      SetTime([...time, newTime])
      console.log(time)
    
   }


  
  return (
    <div className="App">
      <Clock onChangeHour={onChangeHour}/>
      { time.map((item, id) =>{
      return (<Time
        key ={id}
        item = {item}
        
        />)
      })}
    </div>
  );
}

export default App;
