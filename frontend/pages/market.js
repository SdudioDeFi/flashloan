import { useEffect, useState } from 'react';

export default function Market() {
  const [prices, setPrices] = useState(null);
  const [estimate, setEstimate] = useState(null);
  useEffect(() => {
    fetch('/market/prices')
      .then(res => res.json())
      .then(setPrices);
    fetch('/market/estimate')
      .then(res => res.json())
      .then(setEstimate);
  }, []);
  return (
    <div>
      <h2>Live Market Data</h2>
      <div>Prices: {prices && JSON.stringify(prices)}</div>
      <div>Gas: {estimate && estimate.gas}</div>
      <div>Slippage: {estimate && estimate.slippage}</div>
    </div>
  );
}
