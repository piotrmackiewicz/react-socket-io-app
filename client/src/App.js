import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client'
import './App.css';

function App() {
  const [color, setColor] = useState('white');

  const send  = () => {
    const socket = socketIOClient(`${process.env.REACT_APP_API_URL}/socket/color`)
    socket.emit('change color', color)
  }

  useEffect(() => {
    (async () => {
      try {
        const socket = socketIOClient(`${process.env.REACT_APP_API_URL}/socket/color`)
        socket.on('change color', (colo) => {
          document.body.style.backgroundColor = colo
        })
      } catch (err) {
        alert(err)
      }
    })();
  }, [])

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={send}>Change Color</button>
      <button id="red" onClick={() => setColor('red')}>red</button>
      <button id="blue" onClick={() => setColor('blue')}>blue</button>  
    </div>
  );
}

export default App;
