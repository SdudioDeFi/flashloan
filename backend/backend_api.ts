import axios from 'axios';

export async function getPricesFromOKX() {
  const r = await axios.get('https://www.okx.com/api/v5/market/tickers?instType=SPOT');
  return r.data;
}
export async function getPricesFromJupiter() {
  const r = await axios.get('https://quote-api.jup.ag/v4/price');
  return r.data;
}