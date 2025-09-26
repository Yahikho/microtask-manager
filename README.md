# Configuración

## Arquitectura de Microservicios

Cada microservicio tiene su propio `docker-compose.yml` con su propia base de datos:

### Servicios por microservicio:

#### Auth Microservice (`apps/auth-microservice/docker-compose.yml`):
- **auth-postgres**: PostgreSQL en puerto 5433 (configurable por `.env`)
- **auth-microservice**: Puerto 3001 (configurable por `.env`) con prefijo de API `api-auth/`

#### Task Microservice (`apps/task-microservice/docker-compose.yml`):
- **task-postgres**: PostgreSQL en puerto 5434 (configurable por `.env`)  
- **task-microservice**: Puerto 3002 (configurable por `.env`)

### Migraciones Automáticas

Las migraciones se ejecutan automáticamente en el **Dockerfile** de cada microservicio al arrancar el contenedor:
- **auth-microservice**: `npm run migration:run:auth` antes de iniciar
- **task-microservice**: `npm run migration:run:task` antes de iniciar

En desarrollo, puedes sobreescribir el comando en `docker-compose.yml` para hot-reload:

```yaml
  auth-microservice:
    command: sh -c "npm run migration:run:auth && npm run auth-microservice:dev"

  task-microservice:
    command: sh -c "npm run migration:run:task && npm run task-microservice:dev"
```

### Comandos para levantar los servicios:

```bash
# Crear la red compartida primero
docker network create microservices-network

# Levantar auth-microservice (desde su directorio)
cd apps/auth-microservice
docker-compose up -d --build

# Levantar task-microservice (desde su directorio)  
cd ../task-microservice
docker-compose up -d --build

# O levantar ambos desde el directorio raíz:
docker-compose -f apps/auth-microservice/docker-compose.yml up -d --build
docker-compose -f apps/task-microservice/docker-compose.yml up -d --build

# Ver logs de un microservicio específico
docker-compose -f apps/auth-microservice/docker-compose.yml logs -f

# Parar servicios
docker-compose -f apps/auth-microservice/docker-compose.yml down
docker-compose -f apps/task-microservice/docker-compose.yml down
```

## API Gateway - Desarrollo Local

Para el **api-gateway**, debes ejecutarlo localmente (no en Docker):

### 1. Crear archivo .env en apps/api-gateway/

```env
# API Gateway - Desarrollo Local
NODE_ENV=development
PORT=3000

# URLs de los microservicios (cuando están en Docker)
AUTH_SERVICE_URL=http://localhost:3001
TASK_SERVICE_URL=http://localhost:3002

# Configuración de base de datos (si el api-gateway necesita acceso directo)
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=user
DATABASE_PASSWORD=password
DATABASE_NAME=microtask_db

# JWT Secret (si maneja autenticación)
JWT_SECRET=your-jwt-secret-key

# Configuraciones adicionales
API_PREFIX=api
```

### 2. Ejecutar API Gateway localmente

```bash
# Instalar dependencias (si no están instaladas)
npm install

# Ejecutar en modo desarrollo
npm run start:dev api-gateway
```

## Variables de Entorno para Microservicios

### Gestión de variables de entorno (.env)

Ahora las credenciales y configuración se toman desde un archivo `.env` en la raíz del proyecto, y los `docker-compose.yml` usan placeholders `${VARIABLE}`. No subas `.env` al repositorio; en su lugar, crea un `.env` local basado en este ejemplo:

```env
# Global
NODE_ENV=development

# Auth service
AUTH_SERVICE_PORT=3001
AUTH_POSTGRES_USER=auth_user
AUTH_POSTGRES_PASSWORD=auth_password
AUTH_POSTGRES_DB=auth_db
AUTH_POSTGRES_PORT=5433
AUTH_MONGO_ROOT_USER=root
AUTH_MONGO_ROOT_PASSWORD=example
AUTH_MONGO_DB_NAME=auth
AUTH_MONGO_PORT=27017
AUTH_JWT_SECRET=change-me
AUTH_JWT_EXPIRES_IN=24h

# Task service
TASK_SERVICE_PORT=3002
TASK_POSTGRES_USER=task_user
TASK_POSTGRES_PASSWORD=task_password
TASK_POSTGRES_DB=task_db
TASK_POSTGRES_PORT=5434
TASK_MONGO_ROOT_USER=root
TASK_MONGO_ROOT_PASSWORD=example
TASK_MONGO_DB_NAME=task
TASK_MONGO_PORT=27018
TASK_JWT_SECRET=change-me-too
TASK_JWT_EXPIRES_IN=24h
```

Los servicios en `apps/*/docker-compose.yml` ya incluyen `env_file: .env` para cargar este archivo.

### Auth Microservice (endpoints)

Prefijo global: `api-auth/`

Ejemplos:
- Registro: `POST http://localhost:${AUTH_SERVICE_PORT}/api-auth/signup`
- Login: `POST http://localhost:${AUTH_SERVICE_PORT}/api-auth/signin`

### Task Microservice (Variables configuradas en `apps/task-microservice/docker-compose.yml`)

Puerto: `http://localhost:${TASK_SERVICE_PORT}`

## Migraciones

### Ejecución Automática
Las migraciones se ejecutan automáticamente en el **Dockerfile** de cada microservicio al construir la imagen.

### Ejecución Manual (si es necesario)

```bash
# Para auth-microservice
npm run migration:run:auth

# Para task-microservice  
npm run migration:run:task

# Generar nuevas migraciones (después de cambiar entidades)
npm run migration:generate:auth
npm run migration:generate:task
```

### Verificar Migraciones

```bash
# Conectar a PostgreSQL de auth-microservice
docker exec -it auth-postgres psql -U auth_user -d auth_db -c "\dt"

# Conectar a PostgreSQL de task-microservice
docker exec -it task-postgres psql -U task_user -d task_db -c "\dt"
```

## Flujo de Desarrollo

1. **Crear red compartida**:
   ```bash
   docker network create microservices-network
   ```

2. **Levantar auth-microservice**:
   ```bash
   docker-compose -f apps/auth-microservice/docker-compose.yml up -d
   ```
   - Se inicia auth-postgres (puerto 5433)
   - Se construye auth-microservice con migraciones automáticas
   - Se ejecuta el servicio en puerto 3001

3. **Levantar task-microservice**:
   ```bash
   docker-compose -f apps/task-microservice/docker-compose.yml up -d
   ```
   - Se inicia task-postgres (puerto 5434)
   - Se construye task-microservice con migraciones automáticas
   - Se ejecuta el servicio en puerto 3002

4. **Ejecutar API Gateway localmente**:
   ```bash
   npm run start:dev api-gateway
   ```

5. **Acceder a los servicios**:
   - API Gateway: http://localhost:3000
   - Auth Service: http://localhost:3001
   - Task Service: http://localhost:3002
   - Auth PostgreSQL: localhost:5433
   - Task PostgreSQL: localhost:5434

## Notas Importantes

- **Cada microservicio es independiente** con su propio docker-compose.yml
- **Las migraciones se ejecutan en el Dockerfile** de cada microservicio
- **Bases de datos separadas** por microservicio (auth_db y task_db)
- **Puertos únicos** para evitar conflictos (5433 para auth, 5434 para task)
- **Red compartida** para comunicación entre microservicios
- **API Gateway corre localmente** para facilitar el desarrollo
