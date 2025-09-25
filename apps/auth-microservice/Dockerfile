# Dockerfile simple para Auth Microservice
FROM node:18-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración
COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./

# Instalar dependencias
RUN npm install

# Copiar código fuente
COPY apps/auth-microservice ./apps/auth-microservice

# Construir la aplicación
RUN npm run build:auth-microservice

# Exponer puerto
EXPOSE 3001

# Comando para ejecutar
CMD ["npm", "run", "start:prod:auth-microservice"]