FROM node:latest

WORKDIR /var/www

# React
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install --no-optional
RUN npm audit fix

CMD [ "npm", "start" ]