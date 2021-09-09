import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

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
      document.title = "TextUtils : Light mode ";
    }
    else{
    setMode("dark");
    document.body.style.backgroundColor="#11033d";
    showAlert("Dark mode enabled","success");
    document.title = "TextUtils : Dark mode ";
    }
  }
  return(
    <>
    <Router>
    <Navbar title="TextUtils" About="AboutUs" mode={Mode} toggleMode={toggleMode}/>
    {/* <Navbar /> */}
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            {/* exact path matches the exact path . Not mentioning the exact keyword may cause the react app to partially match the components .
            Eg /user --> component1
            /user/home --> component2 .
            Here the react app may render the other component if exact keyword is not mentioned*/}
            <About mode={Mode}/>
          </Route>
          <Route exact path="/">
            <Textform showAlert={showAlert} heading="Enter the text to analyze below"  mode={Mode}/>
          </Route>
    </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;

// https://prathik-reddy.github.io/DemoRepo/
// https://prathik-reddy.github.io/ReactFirst/
