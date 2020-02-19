import React from 'react';
import './App.css';
import HakuBox from './components/HakuBox';

function App() {
  return (
    <div className="App">
      <header>
        <h1>React REST api <br />MongoDB</h1>
      </header>
      <main>
        <HakuBox />
      </main>
    </div>
  );
}

export default App;
