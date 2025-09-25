# Dockerfile simple para Microtask Manager
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
COPY apps/microtask-manager ./apps/microtask-manager

# Construir la aplicación
RUN npm run build microtask-manager

# Exponer puerto
EXPOSE 3002

# Comando para ejecutar
CMD ["npm", "run", "start:prod", "microtask-manager"]