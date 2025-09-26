/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/task-microservice/src/commands/handler/create-task.handler.ts":
/*!****************************************************************************!*\
  !*** ./apps/task-microservice/src/commands/handler/create-task.handler.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateTaskHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const create_task_commant_1 = __webpack_require__(/*! ../impl/create-task.commant */ "./apps/task-microservice/src/commands/impl/create-task.commant.ts");
const task_repository_1 = __webpack_require__(/*! ../../repository/task-repository */ "./apps/task-microservice/src/repository/task-repository.ts");
let CreateTaskHandler = class CreateTaskHandler {
    taskRepository;
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async execute(command) {
        return await this.taskRepository.create(command);
    }
};
exports.CreateTaskHandler = CreateTaskHandler;
exports.CreateTaskHandler = CreateTaskHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_task_commant_1.CreateTaskCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof task_repository_1.TaskRepository !== "undefined" && task_repository_1.TaskRepository) === "function" ? _a : Object])
], CreateTaskHandler);


/***/ }),

/***/ "./apps/task-microservice/src/commands/impl/create-task.commant.ts":
/*!*************************************************************************!*\
  !*** ./apps/task-microservice/src/commands/impl/create-task.commant.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateTaskCommand = void 0;
class CreateTaskCommand {
    title;
    deadline;
    status;
    user;
    description;
    constructor(title, deadline, status, user, description) {
        this.title = title;
        this.deadline = deadline;
        this.status = status;
        this.user = user;
        this.description = description;
    }
}
exports.CreateTaskCommand = CreateTaskCommand;


/***/ }),

/***/ "./apps/task-microservice/src/entities/task.entity.ts":
/*!************************************************************!*\
  !*** ./apps/task-microservice/src/entities/task.entity.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskEntity = exports.TaskState = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var TaskState;
(function (TaskState) {
    TaskState["PORHACER"] = "POR HACER";
    TaskState["ENPROGRESO"] = "EN PROGRESO";
    TaskState["COMPLETADA"] = "COMPLETADA";
})(TaskState || (exports.TaskState = TaskState = {}));
let TaskEntity = class TaskEntity {
    id;
    title;
    description;
    deadline;
    status;
    user;
    isActive;
    updated_at;
    create_at;
};
exports.TaskEntity = TaskEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TaskEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TaskEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TaskEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], TaskEntity.prototype, "deadline", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: TaskState, default: TaskState.PORHACER }),
    __metadata("design:type", String)
], TaskEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], TaskEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], TaskEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], TaskEntity.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], TaskEntity.prototype, "create_at", void 0);
exports.TaskEntity = TaskEntity = __decorate([
    (0, typeorm_1.Entity)('task')
], TaskEntity);


/***/ }),

/***/ "./apps/task-microservice/src/repository/task-repository.ts":
/*!******************************************************************!*\
  !*** ./apps/task-microservice/src/repository/task-repository.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const task_entity_1 = __webpack_require__(/*! ../entities/task.entity */ "./apps/task-microservice/src/entities/task.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let TaskRepository = class TaskRepository {
    taskRepo;
    constructor(taskRepo) {
        this.taskRepo = taskRepo;
    }
    async create(task) {
        try {
            const taskEntity = this.taskRepo.create({
                ...task,
                isActive: true,
                updated_at: new Date(),
            });
            return await this.taskRepo.save(taskEntity);
        }
        catch (e) {
            throw new common_1.HttpException(e.message || 'Error creating task', 500);
        }
    }
    async update(task) {
        try {
            const taskEntity = this.taskRepo.create({
                ...task,
                isActive: true,
                updated_at: new Date(),
            });
        }
        catch (e) {
            throw new common_1.HttpException(e.message || 'Error creating task', 500);
        }
    }
    async delete(task) {
    }
};
exports.TaskRepository = TaskRepository;
exports.TaskRepository = TaskRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.TaskEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], TaskRepository);


/***/ }),

/***/ "./apps/task-microservice/src/task-microservice.controller.ts":
/*!********************************************************************!*\
  !*** ./apps/task-microservice/src/task-microservice.controller.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskMicroserviceController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let TaskMicroserviceController = class TaskMicroserviceController {
    constructor() { }
};
exports.TaskMicroserviceController = TaskMicroserviceController;
exports.TaskMicroserviceController = TaskMicroserviceController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [])
], TaskMicroserviceController);


/***/ }),

/***/ "./apps/task-microservice/src/task-microservice.module.ts":
/*!****************************************************************!*\
  !*** ./apps/task-microservice/src/task-microservice.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskMicroserviceModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const task_microservice_controller_1 = __webpack_require__(/*! ./task-microservice.controller */ "./apps/task-microservice/src/task-microservice.controller.ts");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const create_task_handler_1 = __webpack_require__(/*! ./commands/handler/create-task.handler */ "./apps/task-microservice/src/commands/handler/create-task.handler.ts");
const task_repository_1 = __webpack_require__(/*! ./repository/task-repository */ "./apps/task-microservice/src/repository/task-repository.ts");
const task_entity_1 = __webpack_require__(/*! ./entities/task.entity */ "./apps/task-microservice/src/entities/task.entity.ts");
let TaskMicroserviceModule = class TaskMicroserviceModule {
};
exports.TaskMicroserviceModule = TaskMicroserviceModule;
exports.TaskMicroserviceModule = TaskMicroserviceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cqrs_1.CqrsModule,
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URL ||
                `mongodb://${process.env.TASK_MONGO_ROOT_USER}:${process.env.TASK_MONGO_ROOT_PASSWORD}@task-mongo:27017`, {
                dbName: process.env.TASK_MONGO_DB_NAME || 'task',
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.POSTGRES_HOST || process.env.DB_HOST || 'localhost',
                port: parseInt(process.env.TASK_POSTGRES_PORT || '5434', 10),
                username: process.env.TASK_POSTGRES_USER,
                password: process.env.TASK_POSTGRES_PASSWORD,
                database: process.env.TASK_POSTGRES_DB,
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                migrations: [__dirname + '/migrations/*{.ts,.js}'],
                synchronize: false,
                autoLoadEntities: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([task_entity_1.TaskEntity]),
            jwt_1.JwtModule.register({
                global: true,
                secret: process.env.JWT_SECRET || process.env.SECRET_KEY || 'my_secret_key',
                signOptions: { expiresIn: process.env.JWT_EXPIRES_IN || process.env.EXPIRES_TOKEN_TIME || '60s' }
            })
        ],
        controllers: [task_microservice_controller_1.TaskMicroserviceController],
        providers: [
            create_task_handler_1.CreateTaskHandler,
            task_repository_1.TaskRepository,
        ],
    })
], TaskMicroserviceModule);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/cqrs":
/*!*******************************!*\
  !*** external "@nestjs/cqrs" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/cqrs");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************************************!*\
  !*** ./apps/task-microservice/src/main.ts ***!
  \********************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const task_microservice_module_1 = __webpack_require__(/*! ./task-microservice.module */ "./apps/task-microservice/src/task-microservice.module.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(task_microservice_module_1.TaskMicroserviceModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.setGlobalPrefix('api-task/');
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

})();

/******/ })()
;