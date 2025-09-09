#!/bin/bash
# Build and deploy frontend/backend to testnet (example)
cd ../frontend && npm run build && npm run export
cd ../backend && npm install --production
# TODO: Add deployment commands for testnet (e.g., Vercel, Heroku, Solana devnet)
echo "Frontend and backend built for testnet. Deploy manually to your testnet provider."
