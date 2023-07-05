// Code Keypad Component Here
import React from "react";    
//getting react from react. basic set 

//here we want to create an event listener function. 
//create a function called handleChange, that will do the think we want after the event is triggered 
// in the return we have the event listener 
// we always need to return a JSX value 
function Keypad (){
    const handleChange = () => {
        console.log("Entering password...")
    }
    
    return (
        <div>
             <input type="password" onChange= {handleChange} />
        </div>   
    );
}

export default Keypad;



