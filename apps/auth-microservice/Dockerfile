FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./

RUN npm install

COPY apps/auth-microservice ./apps/auth-microservice

RUN npm run build:auth-microservice

EXPOSE 3001

CMD ["npm", "run", "start:prod:auth-microservice"]