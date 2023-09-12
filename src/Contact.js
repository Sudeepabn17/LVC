import React from 'react';

export default function Contact()
{
    function jfun1()
    {
        alert("Event Fired!")
    }
  
  //USING ARROW FUNCTION
    /* 
    const jfun1=()=>
    {
        alert("Event Fired!")
    }  
   */
    return(
        <h1 onClick={jfun1}> Using Event with React </h1>
        )
    }