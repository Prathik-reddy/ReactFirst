import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'


function App() {
  const [Mode,setMode]=useState("light"); //whether dark mode is enabled or not
  const toggleMode = ()=>{
    if (Mode === "dark"){
      setMode("light");
      document.body.style.backgroundColor="white";
    }
    else{
    setMode("dark");
    document.body.style.backgroundColor="#11033d";
    }
  }
  return(
    <>
    <Navbar title="TextUtils" About="AboutUs" mode={Mode} toggleMode={toggleMode}/>
    {/* <Navbar /> */}
    <div className="container my-3">
    <Textform heading="Enter the text to analyze below"  mode={Mode}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
