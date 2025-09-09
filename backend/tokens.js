const express = require('express');
const router = express.Router();
const { execFile } = require('child_process');

router.get('/sync', (req, res) => {
  execFile('python3', ['./bot/token_sync.py'], (error, stdout, stderr) => {
    if (error) return res.status(500).json({ error: stderr });
    try {
      res.json(JSON.parse(stdout.replace(/'/g, '"')));
    } catch (e) {
      res.status(500).json({ error: 'Invalid token output', details: stdout });
    }
  });
});

module.exports = router;
