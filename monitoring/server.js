const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Monitoring dashboard running!');
});

app.listen(port, () => {
  console.log(`Monitoring dashboard listening on port ${port}`);
});
