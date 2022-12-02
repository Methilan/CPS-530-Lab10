import React from 'react';
import Navbar from './components/Navbar';
import What from './components/What';
import Creating from './components/Creating'
import Problem from './components/Problem'
import './App.css';
import './components/What.css';
import './components/Navbar.css';
import './components/Creating.css';


function App() {
  return (
    <>
    <h1 className="mainHeading">React Webpage</h1>
    <What />
    <Navbar />
    <Creating />
    <Problem />
    <footer>
    <p>Created By: Methilan Thileepan</p>
    </footer>


    </>
  );
}

export default App;
