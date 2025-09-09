import { useState } from 'react';

export default function Analytics() {
  const [history, setHistory] = useState([]);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch('/analytics/history')
      .then(res => res.json())
      .then(setHistory);
  }, []);
  return (
    <div>
      <h2>Live Analytics</h2>
      <ul>
        {history.map((h, i) => (
          <li key={i}>
            {h.strategy} | Profit: {h.total_profit} | Cycle: {h.cycle_map.join(' → ')}
          </li>
        ))}
      </ul>
    </div>
  );
}
