import React, { createElement, useEffect, useState } from "react";
import './ChatEl.styles.css'
export const ChatEl = () =>{
    
    const[currentValue,setCurrentValue] = useState({'user':'','message':''})
    const[chatMessage,setChatMessage] = useState(()=> {
        const retrievedData = localStorage.getItem("chatHistory");
        const initialVal = JSON.parse(retrievedData);
        return initialVal || []
    })

    useEffect(()=>{
      localStorage.setItem("chatHistory",JSON.stringify(chatMessage))
    })

    function handleClick(e){
       let inputVal = document.getElementById('messageInput').value  
       document.getElementById('messageInput').value ='' //gets the input text  
       if(inputVal && inputVal !== ''){ 
           setCurrentValue({user:'you', message: `${inputVal}`})  // setting up in state so that it can be passed to chat message
           chatMessage.push(inputVal)
           //console.log(chatMessage)
           //console.log(typeof(chatMessage))
       }   
    }

  //shows typing tag when clicked on input text field
   function handleKeyUp(e){
        document.getElementById("typing").style.visibility="visible"
    }
  //hides typing tag when not typing
   let timer,timeoutVal= 1000;
   function handleKeyDown (){
    window.clearTimeout(timer); // prevent errant multiple timeouts from being generated
    timer = window.setTimeout(() => {
        document.getElementById("typing").style.visibility="hidden"
    }, timeoutVal);
   }
    return(
        <div className="chatDisplay" id ="container">
            <div id="chatDisp">
               {chatMessage?(<div>{chatMessage.map((el,index)=>{return ( 
                <div key = {index}>
                    <label id ="name" htmlFor="message">You</label>
                    <h1 className="message"> {el}</h1>
                    <label id ="name" htmlFor="message">Amber</label>
                  <h1 className="message1">{el}</h1>   
                </div>)})}
                </div>) : ('')}
            </div>
            <div id ="input">
                <p id="typing">typing</p>
                <button className ="circular"  id="sendMessage" onClick={e=> {handleClick(e)}}>Send</button>
                <input type="text" id="messageInput" onKeyUp={e =>{handleKeyUp()}} onKeyDown ={ e=>{handleKeyDown()}}/>
                {console.log(currentValue)}
            </div> 
            
        </div>
      
    )   
}