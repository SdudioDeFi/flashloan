const express = require('express');
const router = express.Router();
const { execFile } = require('child_process');

router.get('/deep', (req, res) => {
  const { wallet, pool, token } = req.query;
  execFile('python3', ['./bot/scoring.py', wallet, pool, token], (error, stdout, stderr) => {
    if (error) return res.status(500).json({ error: stderr });
    res.json({ score: parseInt(stdout) });
  });
});

module.exports = router;
