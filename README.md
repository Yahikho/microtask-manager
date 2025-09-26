# Configuración de Desarrollo

## Arquitectura de Microservicios

Cada microservicio tiene su propio `docker-compose.yml` con su propia base de datos:

### Servicios por microservicio:

#### Auth Microservice (`apps/auth-microservice/docker-compose.yml`):
- **auth-postgres**: PostgreSQL en puerto 5433 con base de datos `auth_db`
- **auth-microservice**: Puerto 3001 (con migraciones automáticas en Dockerfile)

#### Task Microservice (`apps/task-microservice/docker-compose.yml`):
- **task-postgres**: PostgreSQL en puerto 5434 con base de datos `task_db`  
- **task-microservice**: Puerto 3002 (con migraciones automáticas en Dockerfile)

### Migraciones Automáticas

Las migraciones se ejecutan automáticamente en el **Dockerfile** de cada microservicio:
- **auth-microservice**: Ejecuta `npm run migration:run:auth` antes de iniciar
- **task-microservice**: Ejecuta `npm run migration:run:task` antes de iniciar

### Comandos para levantar los servicios:

```bash
# Crear la red compartida primero
docker network create microservices-network

# Levantar auth-microservice (desde su directorio)
cd apps/auth-microservice
docker-compose up -d

# Levantar task-microservice (desde su directorio)  
cd ../task-microservice
docker-compose up -d

# O levantar ambos desde el directorio raíz:
docker-compose -f apps/auth-microservice/docker-compose.yml up -d
docker-compose -f apps/task-microservice/docker-compose.yml up -d

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

### Auth Microservice (Variables configuradas en `apps/auth-microservice/docker-compose.yml`)

```env
NODE_ENV=development
PORT=3001

# Base de datos (conecta a auth-postgres en puerto 5433)
POSTGRES_HOST=auth-postgres
POSTGRES_PORT=5432
POSTGRES_USER=auth_user
POSTGRES_PASSWORD=auth_password
POSTGRES_DB=auth_db

# JWT Configuration
JWT_SECRET=super-secret-jwt-key-here
```

### Task Microservice (Variables configuradas en `apps/task-microservice/docker-compose.yml`)

```env
NODE_ENV=development
PORT=3002

# Base de datos (conecta a task-postgres en puerto 5434)
POSTGRES_HOST=task-postgres
POSTGRES_PORT=5432
POSTGRES_USER=task_user
POSTGRES_PASSWORD=task_password
POSTGRES_DB=task_db

# JWT Configuration
JWT_SECRET=super-secret-jwt-key-here
```

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
