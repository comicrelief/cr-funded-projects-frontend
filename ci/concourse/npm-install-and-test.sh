#!/bin/sh
echo "Running npm install"
npm install

# NPM install Preact CLI globally
echo "Installing preact CLI globally"
npm i -g preact-cli
npm install -g preact

echo "Running npm test"
preact test