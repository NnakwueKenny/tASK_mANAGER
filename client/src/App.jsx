import './App.css';
import React, {useState, useEffect} from 'react';

// functions

const App = () => {
  const [data, setData] = useState('Hello, World!');
  
  return (
    <div className="App">
      <h1>{data}</h1>
    </div>
  );
}

export default App;
