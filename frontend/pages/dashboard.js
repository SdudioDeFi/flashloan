import { useState } from 'react';
import CoreDashboardLayout from '../../src/dashboard/CoreDashboardLayout';

const widgets = [
  <div>Pool LP Monitor Widget</div>,
  <div>Bot Status Widget</div>,
  <div>Wallet Scanner Widget</div>,
  <div>Scoring Widget</div>,
  <div>Quest Poster Widget</div>,
  <div>Ranking Widget</div>,
  <div>Donation Widget</div>,
  <div>Flash Loan Opportunity Widget</div>
];

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
    <CoreDashboardLayout title="Execution Bot Dashboard" widgets={widgets} chat={<span>AI Chat Placeholder</span>}>
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
        </div>
      )}
    </CoreDashboardLayout>
  );
}
