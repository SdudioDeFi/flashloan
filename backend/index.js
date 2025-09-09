
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const apiRoutes = require('./api');
const marketRoutes = require('./market');
const strategiesRoutes = require('./strategies');
const cycleRoutes = require('./cycle');
const analyticsRoutes = require('./analytics');
const walletRoutes = require('./wallet');
const tokensRoutes = require('./tokens');
const botsRoutes = require('./bots');
const scoringRoutes = require('./scoring');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
  }
});

app.use(express.json());
app.use('/api', apiRoutes);
app.use('/market', marketRoutes);
app.use('/strategies', strategiesRoutes);
app.use('/cycle', cycleRoutes);
app.use('/analytics', analyticsRoutes);
app.use('/wallet', walletRoutes);
app.use('/tokens', tokensRoutes);
app.use('/bots', botsRoutes);
app.use('/scoring', scoringRoutes);
// Founder accounts metadata
const founderAccounts = [
  { name: 'Founder1', wallet: 'WalletAddress1', meta: 'Lead Dev' },
  { name: 'Founder2', wallet: 'WalletAddress2', meta: 'Co-Founder' }
];
app.get('/founders', (req, res) => {
  res.json(founderAccounts);
});

app.get('/', (req, res) => {
  res.send('Flashloan backend running!');
});

io.on('connection', (socket) => {
  console.log('Socket connected:', socket.id);
  // Example trigger: flashloan executed
  socket.on('flashloan', (data) => {
    // Placeholder: execute flashloan logic and emit result
    socket.emit('flashloanResult', { status: 'success', tx: 'demoTxId123' });
  });
});

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
