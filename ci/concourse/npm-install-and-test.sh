#!/bin/sh
echo "Running npm install"
npm install

# NPM install Jest Globally
echo "Installing Jest globally"
npm install jest -g

echo "Running npm test"
preact test