const express = require('express');
const router = express.Router();

const { execFile } = require('child_process');
const { saveAnalytics, loadAnalytics } = require('./db');
router.post('/run', (req, res) => {
  const { strategy, amount, token } = req.body;
  execFile('python3', [
    './bot/cycle_executor.py',
    strategy, amount, token
  ], { cwd: process.cwd() }, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: stderr });
    }
    try {
      const result = JSON.parse(stdout);
      // Persist result to analytics
      const history = loadAnalytics();
      history.push(result);
      saveAnalytics(history);
      res.json(result);
    } catch (e) {
      res.status(500).json({ error: 'Invalid bot output', details: stdout });
    }
  });
});

module.exports = router;
