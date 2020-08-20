FROM node:12.13.0 as builder
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm install --silent
COPY . ./
CMD ["npm", "start"]

