FROM node:20-alpine AS ui-build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "main.js"]
