import React from 'react';
import './App.css';
import Student from './components/Student'

function App() {
  return (
    <div className="App">
      <h1 className="Board">React Leaders Board</h1>
      <Student name="Muhammad Saad" uni="NED" score={342}/>
      <Student name="Zobia Khan" uni="NED" score={350}/>
      <Student name="Muhammad Hamza" uni="KU" score={230}/>
      <Student name="Jiya Aslam" uni="IBA" score={300}/>
      <Student name="Saima Khan" uni="UIT" score={314}/>
    </div>
  );
}

export default App;
