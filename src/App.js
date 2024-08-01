import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const[mode, setMode] = useState('light'); //Whether dark mode is enble or not.
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
        setAlert({
          msg: message,
          type:type
        })
       setTimeout(() => {
          setAlert(null);
       }, 3000)
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been Enable", "success");
      document.title= 'React App - Dark Mode';
    } 
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been Enable", "success");
      document.title= 'React App - Light Mode';
    }
    
  }
  return (
    <>    
    
      <Navbar title="React App" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3" >
      <TextForm showAlert={showAlert} heading="Try Words Counter & Character Counter" mode={mode}/>
      <About mode={mode}/>
         </div> 
    </>
  );
}

export default App;
