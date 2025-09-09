const express = require('express');
const router = express.Router();
const { execFile } = require('child_process');

// Turbo/Ninja/Sniper bot execution endpoint
router.post('/execute', (req, res) => {
  const { strategy, wallet, pool, token, amount } = req.body;
  execFile('python3', ['./bot/advanced_bot.py', strategy, wallet, pool, token, amount], (error, stdout, stderr) => {
    if (error) return res.status(500).json({ error: stderr });
    try {
      res.json(JSON.parse(stdout));
    } catch (e) {
      res.status(500).json({ error: 'Invalid bot output', details: stdout });
    }
  });
});

module.exports = router;
