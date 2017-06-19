#!/bin/sh

# NPM install
echo "Running npm install"
npm install

# NPM install Preact CLI globally
echo "Installing preact CLI globally"
npm i -g preact-cli
npm install -g preact

# Build the contact form
echo "Building contact form"
preact build --no-prerender --production

# Deploy to AWS s3 using aws-cli
echo "Deploying to S3 bucket cr-projects-$3"
export AWS_ACCESS_KEY_ID=$1
export AWS_SECRET_ACCESS_KEY=$2
aws s3 sync ./build s3://cr-projects-$3 --acl=public-read

# Remove the aws cli
rm -rf ./aws-cli
echo "Deployed site to http://cr-projects-$3.s3-website-eu-west-1.amazonaws.com"