const express = require('express');
const router = express.Router();
const { saveAnalytics, loadAnalytics } = require('./db');

router.get('/history', (req, res) => {
  res.json(loadAnalytics());
});

router.post('/record', (req, res) => {
  const history = loadAnalytics();
  history.push(req.body);
  saveAnalytics(history);
  res.json({ status: 'saved' });
});

module.exports = router;
