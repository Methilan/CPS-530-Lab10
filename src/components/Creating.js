import React from 'react'
import fileSystem from './images/files.jpeg'
import languages from './images/languages.jpeg'

function Creating() {
  return (
    <>
    <h1> Creating The React Page </h1>
    
    <p> I created this page by creating sub folders which contained specific JAVASCRIPT with their associated CSS files under my components folder

        Each JAVASCRIPT program had a functionality for my webpage, and it was later called in my App.js through imports. My images were rooted in my components files. 
        I learnt that the framework really forces you to stay organized in how you manage your functionalities on the webpage. React essentially creates all the necessities and assets
        needed for you once you do CREATE APP. Apart from those differences, I used the REGULAR HTML AND CSS I learnt to build each component of the webpage. The only differences were 
        rather minor where image tags need there source wrapped in curly braces since it was done through Javascript and class names were now called "className".
    </p>

    <div className = "imagesWrapper">
    <img src={fileSystem} alt="fileSystem" />
    <img src={languages} alt="languages" />
    </div>
    
    
    </>
  )
}

export default Creating