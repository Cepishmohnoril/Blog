FROM node:latest

WORKDIR /var/www

# React
COPY . /var/www/

RUN npm install --no-optional
RUN npm audit fix