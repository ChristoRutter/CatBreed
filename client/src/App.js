import React,{useEffect} from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  useEffect(()=>{
      axios.get('http://localhost:8000/api/catBreed')
      .then((res)=>{
        console.log(res.data)
      })
      .catch((err)=>{console.log(err)})
  })
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
