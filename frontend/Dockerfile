FROM node:latest

WORKDIR /var/www

# React
COPY package.json package.json

RUN npm install --no-optional
RUN npm audit fix