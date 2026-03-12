FROM node:18-alpine

WORKDIR /app

COPY . .

CMD ["node", "app.js"]
FROM node:20

WORKDIR /app

COPY . .

CMD ["node", "app.js"]

