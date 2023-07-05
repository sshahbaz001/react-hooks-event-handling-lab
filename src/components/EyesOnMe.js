// Code EyesOnMe Component Here
import React from "react";
 
//want to create a button that will listen to 2 events and console log 
// so i have 1 function 
// the constants are functions that will trigger when they are called, depending on the event 
function EyesOnMe() {

    const Focus = () => {      //these are const, that i have to invoke the functions of
        console.log("good")
    }

    const Blur = () => {
        console.log("Hey! Eyes on Me!")
    }

    // the return value for the overall function -> will always return a JSX. here the addlistener event is writen and is listing for it. 
    return (
        <div>
            <button onFocus={Focus} onBlur={Blur}>Eyes on me</button> 
         
       </div>
    )
}


    


export default EyesOnMe;