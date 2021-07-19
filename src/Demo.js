import { useState, useEffect } from 'react';
import './App.css';

function Demo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(recievedData => setData(recievedData))
  };

  return (
    <div className="App">
      <h1>This is testing purpose only</h1>
      {
        data.map((user, index) => {
          return (
          <div key={index}>
            <div>{user.name}</div>
          </div>
          )
        })
      }
    </div>
  );
}

export default Demo;