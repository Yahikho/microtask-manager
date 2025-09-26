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

/***/ "./apps/task-microservice/src/dtos/user-input.dto.ts":
/*!***********************************************************!*\
  !*** ./apps/task-microservice/src/dtos/user-input.dto.ts ***!
  \***********************************************************/
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserInputDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const task_entity_1 = __webpack_require__(/*! ../entities/task.entity */ "./apps/task-microservice/src/entities/task.entity.ts");
class UserInputDto {
    title;
    description;
    deadline;
    status;
}
exports.UserInputDto = UserInputDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], UserInputDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserInputDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UserInputDto.prototype, "deadline", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(task_entity_1.TaskState),
    __metadata("design:type", typeof (_b = typeof task_entity_1.TaskState !== "undefined" && task_entity_1.TaskState) === "function" ? _b : Object)
], UserInputDto.prototype, "status", void 0);


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

/***/ "./apps/task-microservice/src/guards/auth.guard.ts":
/*!*********************************************************!*\
  !*** ./apps/task-microservice/src/guards/auth.guard.ts ***!
  \*********************************************************/
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
exports.AuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
let AuthGuard = class AuthGuard {
    jwtService;
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: process.env.TASK_JWT_SECRET
            });
            request['user'] = payload;
        }
        catch {
            throw new common_1.UnauthorizedException();
        }
        return true;
    }
    extractTokenFromHeader(request) {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object])
], AuthGuard);


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskMicroserviceController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_input_dto_1 = __webpack_require__(/*! ./dtos/user-input.dto */ "./apps/task-microservice/src/dtos/user-input.dto.ts");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const create_task_commant_1 = __webpack_require__(/*! ./commands/impl/create-task.commant */ "./apps/task-microservice/src/commands/impl/create-task.commant.ts");
const auth_guard_1 = __webpack_require__(/*! ./guards/auth.guard */ "./apps/task-microservice/src/guards/auth.guard.ts");
let TaskMicroserviceController = class TaskMicroserviceController {
    commandBus;
    constructor(commandBus) {
        this.commandBus = commandBus;
    }
    async create(req, userInputDto) {
        const user = req.user.email;
        const deadline = new Date(userInputDto.deadline);
        const result = await this.commandBus.execute(new create_task_commant_1.CreateTaskCommand(userInputDto.title, deadline, userInputDto.status, user, userInputDto.description));
        return result;
    }
};
exports.TaskMicroserviceController = TaskMicroserviceController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof user_input_dto_1.UserInputDto !== "undefined" && user_input_dto_1.UserInputDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], TaskMicroserviceController.prototype, "create", null);
exports.TaskMicroserviceController = TaskMicroserviceController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof cqrs_1.CommandBus !== "undefined" && cqrs_1.CommandBus) === "function" ? _a : Object])
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
                secret: process.env.TASK_JWT_SECRET || 'my_secret_key',
                signOptions: { expiresIn: process.env.TASK_JWT_EXPIRES_IN || '60s' }
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

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

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
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        transformOptions: { enableImplicitConversion: true }
    }));
    app.setGlobalPrefix('api-task/');
    await app.listen(process.env.TASK_SERVICE_PORT ?? 3004);
}
bootstrap();

})();

/******/ })()
;