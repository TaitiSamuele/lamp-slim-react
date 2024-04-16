import './App.css';
import './tags/Alunno.js';
import { useState, useEffect } from 'react';
import Alunno from './tags/Alunno.js';

function App() {

  useEffect(() => {
    popolaAlunni();
  }, [])

  const [alunni, setAlunni] = useState([]);
  const [pronto, setPronto] = useState(false);

  async function popolaAlunni(){
    const response = await fetch("http://localhost:8080/alunni", {method: "GET"});
    const array = await response.json();
    setAlunni(array);
    setPronto(true);
  }

  return (
    <div className="App">
      {
        pronto ? 
        alunni.map(a => {
          <Alunno alunno={a} popolaAlunni={popolaAlunni} key={a.id} />
        })
        :
        <div>loading...</div>
      }
    </div>
  );
}

export default App;
