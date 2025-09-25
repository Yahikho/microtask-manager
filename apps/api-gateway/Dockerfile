# Dockerfile simple para API Gateway
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
COPY apps/api-gateway ./apps/api-gateway

# Construir la aplicación
RUN npm run build api-gateway

# Exponer puerto
EXPOSE 3000

# Comando para ejecutar
CMD ["npm", "run", "start:prod", "api-gateway"]