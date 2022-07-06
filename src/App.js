
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type

    })
    setTimeout(() => {
      setalert(null);
    },2000);
    
  }
  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  // }
  const toggleMode=(cls)=>{
    // removeBodyClasses();
// console.log(cls);
// document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode Enabled","success")
      // document.title='TextUtil-Dark Mode'
      // for fluctuation
      // setInterval(() => {
      //   document.title='TextUtil is amazing Mode'
        
      // }, 2000);
      // setInterval(() => {
      //   document.title='Install Textutil now'
        
      // }, 1500);
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode Enabled","success")
      // document.title='TextUtil-Light Mode'

    }
  }
  return (
    <>


    <Navbar title="TextUtil" aboutText="About US" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    {/* <TextForm showAlert={showAlert} heading="Enter the text to analyse"  mode={mode}/> */}
     <div className="container my-3">
    <Router>
      
      <Routes>
        <Route path="/about" element={<About  mode={mode}/>}/>
        <Route path="/home" element={<TextForm showAlert={showAlert} heading="Try Textutil-Word Counter ,character counter,remove extra spaces"  mode={mode}/>}/>

      </Routes>
    </Router>
    
    {/* <About/> */}


     </div>
    
   </>

  );
}

export default App;
