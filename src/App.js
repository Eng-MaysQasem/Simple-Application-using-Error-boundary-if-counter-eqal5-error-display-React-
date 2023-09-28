import React from 'react';
import './App.css';
import ErrorBoundarySample from './ErrorBoundarySample';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <ErrorBoundarySample>
        <Counter />
        <Counter />
      </ErrorBoundarySample>
      <ErrorBoundarySample>
        <Counter />
      </ErrorBoundarySample>
    </div>
  );
}

export default App;
