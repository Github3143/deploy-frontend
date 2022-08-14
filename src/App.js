import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message,setMessage] = useState("");

  // useEffect(()=>{
  //  fetch("https://deploy-springboot-1.herokuapp.com/home/hello",{
  //     method: 'GET',
  //     mode: 'cors',
  //     cache: 'no-cache',
  //   }).then(response => response.text())
  //   .then(res => {
  //     setMessage(res)
  //   })
    

  // },[])

  function handleClick(){
    
    fetch("https://deploy-springboot-1.herokuapp.com/home/hello",{
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
    }).then(response => response.text())
    .then(res => {
      setMessage(res)
    })
    

  }
  function handleClearClick(){
    setMessage("");
  }

  return (
    <div className="App">
      <h1>Welcome to deploy app</h1>
      <button onClick={handleClick}>
        Test
      </button>
      <button onClick={handleClearClick}>
       Clear
      </button>
      <h1>{message}</h1>
      
    </div>
  );
}



export default App;
