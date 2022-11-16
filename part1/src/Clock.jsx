import { useState } from 'react';
export const Clock =({onChangeHour}) => {
  const [hour, setHour] = useState(0)
  const[userInput2, setUserInput2] = useState('')
  const [date,] = useState(new Date());


   const onHour= (e)=>{
    e.preventDefault()
    onChangeHour(date, hour, userInput2)
    setUserInput2('')
   }


  return (
    <div onSubmit={onHour}>
       <input
            
            value = {userInput2}
            type = 'text'
            onChange = {(e) =>{
                setUserInput2(e.currentTarget.value); }}
             />
        <input
        value = {hour}
        type ='number'
        onChange = {(e) =>{
            setHour(e.currentTarget.value); }}
        />
   <button className='Button' onClick={(e) => {if(Math.abs(hour)<13)onHour(e); else alert('отклонениу не может превышать 12')}}><h4>ok</h4></button>
    </div>
  );
}
