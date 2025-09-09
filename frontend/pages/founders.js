import { useEffect, useState } from 'react';

export default function Founders() {
  const [founders, setFounders] = useState([]);
  useEffect(() => {
    fetch('/founders')
      .then(res => res.json())
      .then(setFounders);
  }, []);
  return (
    <div>
      <h2>Founder Accounts</h2>
      <ul>
        {founders.map(f => (
          <li key={f.wallet}>{f.name} ({f.meta}): {f.wallet}</li>
        ))}
      </ul>
    </div>
  );
}
