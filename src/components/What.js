import React from 'react'
import reactLogo from './images/reactLogo.png'
import netflix from './images/netflix.jpeg'

function What() {
  return (
    <>
    <h1 className="headingWhat"> What is React? </h1>

    <p className="whatReact"> My first question before installing React, was WHAT WAS IT and its PURPOSE: <br/> <br/>
         FIRST STEP: Visiting the Official Website of React <br/>

         I learnt that REACT is a library for client-side JAVASCRIPT that helps the developer build user interfaces
         Essentially, the JAVASCRIPT code runs in the browsers of any visitors to my site
         The purpose is to build HIGHLY REACTIVE user interfaces for the websites we create. Also I found out that 
         there are many applications I utilized such as NETFLIX that are built through REACT
    </p>

    <div className = "linkWrapper">
    <a className="reactLink" href="https://reactjs.org/">reactjs.org</a>
    </div>
    
    <div className="logoWrapper">
    <img src={reactLogo} alt="reactLogo" />
    <img src={netflix} alt="reactLogo" />
    </div>

     </>

  );
}

export default What