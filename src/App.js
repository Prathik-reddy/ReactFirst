import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {
  const [Mode,setMode]=useState("light"); //whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=>{
    if (Mode === "dark"){
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode enabled","success");
    }
    else{
    setMode("dark");
    document.body.style.backgroundColor="#11033d";
    showAlert("Dark mode enabled","success");
    }
  }
  return(
    <>
    <Navbar title="TextUtils" About="AboutUs" mode={Mode} toggleMode={toggleMode}/>
    {/* <Navbar /> */}
    <Alert alert={alert}/>
    <div className="container my-3">
    <Textform showAlert={showAlert} heading="Enter the text to analyze below"  mode={Mode}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
