
import './App.css';
import React, { useState } from 'react'
import Corse from './Corse';

function App() {
  const [updat , setUpdat] = useState([]);

  const addItems = () =>{
    const sub = document.getElementById('subject').value
    const hor = document.getElementById('hours').value
    const comingData = {
      subject : sub,
      hours : parseInt(hor)
    };
    const data = [...updat , comingData];

    setUpdat(data);
    console.log(updat);
  }

  return (
    <div className="App">
      <h2>Geekster Education Planner</h2>
      <div>
        <input type="text" name="" id="subject" placeholder="subject" />
        <input type="number" name="" id="hours" placeholder="Hours" />
        <button onClick={() => addItems()}>Add</button>
      </div>
      <div>
        {updat.map((e , idx) => (
          <Corse name = {e.subject} hours = {e.hours} key ={idx} />
        ))}
      </div>
    </div>
  );
}

export default App;
