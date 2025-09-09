import { useState } from 'react';

export default function Dashboard() {
  const [result, setResult] = useState(null);
  const [strategy, setStrategy] = useState('turbo');
  const [wallet, setWallet] = useState('DemoWallet');
  const [pool, setPool] = useState('DemoPool');
  const [token, setToken] = useState('SOL');
  const [amount, setAmount] = useState(100);

  const executeBot = () => {
    fetch('/bots/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ strategy, wallet, pool, token, amount })
    })
      .then(res => res.json())
      .then(setResult);
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 16 }}>
      <h2>Execution Bot Dashboard</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <select value={strategy} onChange={e => setStrategy(e.target.value)}>
          <option value="turbo">Turbo</option>
          <option value="ninja">Ninja</option>
          <option value="sniper">Sniper</option>
        </select>
        <input value={wallet} onChange={e => setWallet(e.target.value)} placeholder="Wallet" />
        <input value={pool} onChange={e => setPool(e.target.value)} placeholder="Pool" />
        <input value={token} onChange={e => setToken(e.target.value)} placeholder="Token" />
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" />
        <button onClick={executeBot} style={{ padding: 8, fontWeight: 'bold' }}>Execute</button>
      </div>
      {result && (
        <div style={{ marginTop: 24, background: '#f9f9f9', borderRadius: 8, padding: 16 }}>
          <h3>Status: {result.status}</h3>
          <div>Strategy: {result.strategy}</div>
          <div>Wallet: {result.wallet}</div>
          <div>Pool: {result.pool}</div>
          <div>Token: {result.token}</div>
          <div>Amount: {result.amount}</div>
          <div>Score: {result.score}</div>
          <div>Profit: {result.profit}</div>
        </div>
      )}
    </div>
  );
}
