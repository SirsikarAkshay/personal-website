import React from 'react';
import { Education } from './components/Education';
import { Title } from './components/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Education />
      </header>
    </div>
  );
}

export default App;
