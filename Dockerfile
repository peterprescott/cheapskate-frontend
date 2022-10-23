FROM node:current-buster-slim

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

COPY ./ ./

RUN npm i

CMD ["npm", "start"]