FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./

RUN npm install

COPY apps/task-microservice ./apps/task-microservice

RUN npm run build:task-microservice

EXPOSE 3002

CMD ["sh", "-c", "npm run migration:run:task && npm run start:prod:task-microservice"]