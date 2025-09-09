import { useState } from 'react';
import io from 'socket.io-client';

export default function Flashloan() {
  const [result, setResult] = useState(null);
  const socket = io('http://localhost:4000');

  const executeFlashloan = () => {
    socket.emit('flashloan', { amount: 100, token: 'SOL' });
    socket.on('flashloanResult', (data) => {
      setResult(data);
    });
  };

  return (
    <div>
      <h2>Execute Flashloan</h2>
      <button onClick={executeFlashloan}>Run Flashloan</button>
      {result && <div>Result: {JSON.stringify(result)}</div>}
    </div>
  );
}
