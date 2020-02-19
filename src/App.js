import React from 'react';
import './App.css';
import ParentBox from './components/ParentBox';

function App() {
  return (
    <div className="App">
      <header>
        <h1>React REST api <br />MongoDB</h1>
      </header>
      <main>
        <ParentBox />
      </main>
    </div>
  );
}

export default App;
