import Textforms from './components/Textforms';
import Navbar from './components/Navbar';
import { useState } from 'react';
import React from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import About from './components/About'


function App() {

  const [mode, setMode] =  useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils - Dark Mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils - light Mode'


    }
  }

  return (
    <>
<Router>

<Navbar mode={mode} toggleMode={toggleMode} />

<Alert alert={alert}/>

<div className='container my-3'>

  <Routes>

<Route exact path='/about' element={<About />}>
  
</Route>

<Route exact path='/' element={<Textforms showAlert={showAlert} heading="enter text to analyze below" mode={mode} />
}>

</Route>

  </Routes>

        
      </div>
  </Router>

    
  </>
    
  );
}

export default App;
