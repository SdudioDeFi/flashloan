const express = require('express');
const router = express.Router();

// Supported strategies
const strategies = [
  'triangle', '4angle', '5angle', '6angle'
];

router.get('/', (req, res) => {
  res.json({ strategies });
});

router.post('/execute', (req, res) => {
  const { strategy, wallet, amount, token, providers } = req.body;
  // Placeholder: advanced arbitrage logic
  res.json({ status: 'executed', strategy, profit: Math.random(), tx: 'multiTxId' });
});

module.exports = router;
