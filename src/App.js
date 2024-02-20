import React, { useState } from 'react';
import './App.css'


function App(){
      
      let time = new Date().toLocaleTimeString();
      const [currentTime,setCurrentTime] = useState(time);
      const updateTime = () =>{
        time = new Date().toLocaleTimeString();
        setCurrentTime(time)
      }

      setInterval(updateTime,1000)
   
   return(
    <>
     <div className='body'>
       <img src="https://images.unsplash.com/photo-1595950206452-00a91aa79ed6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
     </div>
       <h1>Digital Clock</h1>
      <h3>{currentTime}</h3>
    </>
   );
}

export default App;