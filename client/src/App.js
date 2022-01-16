import React,{useState, useEffect} from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  Form  from './components/Form';

function App() {
  const [cat, setCat] = useState({})
  const [selected, setSelected] = useState("")
  useEffect(()=>{
      axios.get('http://localhost:8000/api/catBreed')
      .then((res)=>{
        console.log(res.data)
        setCat(res.data)
      })
      .catch((err)=>{console.log(err)})
  },[])
  return (
    <div className="App">
      <h1>Cat Breed Dictionary</h1>
      <Form selected={selected} setSelected={setSelected}/>
    </div>
  );
}

export default App;
