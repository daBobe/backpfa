FROM node:20-alpine AS ui-build

WORKDIR /app

COPY . /app

RUN  npm install

EXPOSE 8080

CMD ["node", "server.js"]
