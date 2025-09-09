import { useState, useEffect } from 'react';

export default function Tokens() {
  const [tokens, setTokens] = useState({});
  useEffect(() => {
    fetch('/tokens/sync')
      .then(res => res.json())
      .then(setTokens);
  }, []);
  return (
    <div>
      <h2>Live Token List Sync</h2>
      {Object.entries(tokens).map(([provider, list]) => (
        <div key={provider}>
          <h3>{provider}</h3>
          <pre>{JSON.stringify(list, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
}
