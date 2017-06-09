#!/bin/sh
echo "Running npm install"
npm install

# NPM install Jest Globally
echo "Installing Jest and Preact globally"
npm install jest preact -g

echo "Running npm test"
preact test