#!/bin/bash
# Deployment script for khirsapat.bd
# Usage: ./deploy.sh

echo "Connecting to live server..."
ssh whmroot@20.212.113.225 << EOF
  cd /www/wwwroot/khirsapat.bd
  echo "Pulling latest changes from GitHub..."
  git pull origin main
  echo "Installing dependencies..."
  npm install
  echo "Building project..."
  npm run build
  echo "Restarting deployment..."
  pm2 restart all
  echo "Deployment Complete!"
  exit
EOF
