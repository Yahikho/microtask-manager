/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/auth-microservice/src/auth-microservice.controller.ts":
/*!********************************************************************!*\
  !*** ./apps/auth-microservice/src/auth-microservice.controller.ts ***!
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthMicroserviceController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const UserSignUp_dto_1 = __webpack_require__(/*! ./dtos/UserSignUp.dto */ "./apps/auth-microservice/src/dtos/UserSignUp.dto.ts");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const signup_user_command_1 = __webpack_require__(/*! ./commands/impl/signup-user.command */ "./apps/auth-microservice/src/commands/impl/signup-user.command.ts");
const UserSignIn_dto_1 = __webpack_require__(/*! ./dtos/UserSignIn.dto */ "./apps/auth-microservice/src/dtos/UserSignIn.dto.ts");
const singin_user_query_1 = __webpack_require__(/*! ./queries/impl/singin-user.query */ "./apps/auth-microservice/src/queries/impl/singin-user.query.ts");
let AuthMicroserviceController = class AuthMicroserviceController {
    commandBus;
    queryBus;
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async signUp(userSignUpDto) {
        const result = await this.commandBus.execute(new signup_user_command_1.SignUpUserCommand(userSignUpDto.email, userSignUpDto.password));
        return result;
    }
    async signIn(userSignIn) {
        const result = await this.queryBus.execute(new singin_user_query_1.SignInUserQuery(userSignIn.email, userSignIn.password));
        return result;
    }
};
exports.AuthMicroserviceController = AuthMicroserviceController;
__decorate([
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof UserSignUp_dto_1.UserSignUpDto !== "undefined" && UserSignUp_dto_1.UserSignUpDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AuthMicroserviceController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('signin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof UserSignIn_dto_1.UserSignIn !== "undefined" && UserSignIn_dto_1.UserSignIn) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], AuthMicroserviceController.prototype, "signIn", null);
exports.AuthMicroserviceController = AuthMicroserviceController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof cqrs_1.CommandBus !== "undefined" && cqrs_1.CommandBus) === "function" ? _a : Object, typeof (_b = typeof cqrs_1.QueryBus !== "undefined" && cqrs_1.QueryBus) === "function" ? _b : Object])
], AuthMicroserviceController);


/***/ }),

/***/ "./apps/auth-microservice/src/auth-microservice.module.ts":
/*!****************************************************************!*\
  !*** ./apps/auth-microservice/src/auth-microservice.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthMicroserviceModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_microservice_controller_1 = __webpack_require__(/*! ./auth-microservice.controller */ "./apps/auth-microservice/src/auth-microservice.controller.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const user_entity_1 = __webpack_require__(/*! ./entities/user.entity */ "./apps/auth-microservice/src/entities/user.entity.ts");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const signup_user_handler_1 = __webpack_require__(/*! ./commands/handler/signup-user.handler */ "./apps/auth-microservice/src/commands/handler/signup-user.handler.ts");
const user_signed_handler_1 = __webpack_require__(/*! ./events/handler/user-signed.handler */ "./apps/auth-microservice/src/events/handler/user-signed.handler.ts");
const evet_store_repository_1 = __webpack_require__(/*! ./repository/evet-store.repository */ "./apps/auth-microservice/src/repository/evet-store.repository.ts");
const user_read_repositiry_1 = __webpack_require__(/*! ./repository/user-read.repositiry */ "./apps/auth-microservice/src/repository/user-read.repositiry.ts");
const event_schema_1 = __webpack_require__(/*! ./schemas/event.schema */ "./apps/auth-microservice/src/schemas/event.schema.ts");
const password_service_1 = __webpack_require__(/*! ./services/password.service */ "./apps/auth-microservice/src/services/password.service.ts");
const create_jwt_service_1 = __webpack_require__(/*! ./services/create-jwt.service */ "./apps/auth-microservice/src/services/create-jwt.service.ts");
const signin_user_handler_1 = __webpack_require__(/*! ./queries/handler/signin-user.handler */ "./apps/auth-microservice/src/queries/handler/signin-user.handler.ts");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
let AuthMicroserviceModule = class AuthMicroserviceModule {
};
exports.AuthMicroserviceModule = AuthMicroserviceModule;
exports.AuthMicroserviceModule = AuthMicroserviceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cqrs_1.CqrsModule,
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URL ||
                `mongodb://${process.env.AUTH_MONGO_ROOT_USER}:${process.env.AUTH_MONGO_ROOT_PASSWORD}@localhost:27017`, {
                dbName: process.env.AUTH_MONGO_DB_NAME || 'auth',
            }),
            mongoose_1.MongooseModule.forFeature([{
                    name: 'Event',
                    schema: event_schema_1.EventSchema
                }]),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.POSTGRES_HOST || process.env.DB_HOST || 'localhost',
                port: parseInt(process.env.AUTH_POSTGRES_PORT || '5433', 10),
                username: process.env.AUTH_POSTGRES_USER,
                password: process.env.AUTH_POSTGRES_PASSWORD,
                database: process.env.AUTH_POSTGRES_DB,
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                migrations: [__dirname + '/migrations/*{.ts,.js}'],
                synchronize: false,
                autoLoadEntities: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity]),
            jwt_1.JwtModule.register({
                global: true,
                secret: process.env.AUTH_JWT_SECRET || 'my_secret_key',
                signOptions: { expiresIn: process.env.AUTH_JWT_EXPIRES_IN || '60s' }
            })
        ],
        controllers: [auth_microservice_controller_1.AuthMicroserviceController],
        providers: [
            signup_user_handler_1.SignUpUserHandler,
            user_signed_handler_1.UserSignedHandler,
            evet_store_repository_1.EventStoreRepository,
            user_read_repositiry_1.UserReadRepository,
            password_service_1.PasswordService,
            create_jwt_service_1.CreateJWTService,
            signin_user_handler_1.SignInHandler
        ],
    })
], AuthMicroserviceModule);


/***/ }),

/***/ "./apps/auth-microservice/src/commands/handler/signup-user.handler.ts":
/*!****************************************************************************!*\
  !*** ./apps/auth-microservice/src/commands/handler/signup-user.handler.ts ***!
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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignUpUserHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const signup_user_command_1 = __webpack_require__(/*! ../impl/signup-user.command */ "./apps/auth-microservice/src/commands/impl/signup-user.command.ts");
const evet_store_repository_1 = __webpack_require__(/*! ../../repository/evet-store.repository */ "./apps/auth-microservice/src/repository/evet-store.repository.ts");
const user_signup_1 = __webpack_require__(/*! ../../events/impl/user-signup */ "./apps/auth-microservice/src/events/impl/user-signup.ts");
const password_service_1 = __webpack_require__(/*! ../../services/password.service */ "./apps/auth-microservice/src/services/password.service.ts");
const user_read_repositiry_1 = __webpack_require__(/*! ../../repository/user-read.repositiry */ "./apps/auth-microservice/src/repository/user-read.repositiry.ts");
const create_jwt_service_1 = __webpack_require__(/*! ../../services/create-jwt.service */ "./apps/auth-microservice/src/services/create-jwt.service.ts");
const JwtPayload_dto_1 = __webpack_require__(/*! ../../dtos/JwtPayload.dto */ "./apps/auth-microservice/src/dtos/JwtPayload.dto.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let SignUpUserHandler = class SignUpUserHandler {
    eventBus;
    eventStoreRepository;
    passwordService;
    userReadRepo;
    createJWTService;
    constructor(eventBus, eventStoreRepository, passwordService, userReadRepo, createJWTService) {
        this.eventBus = eventBus;
        this.eventStoreRepository = eventStoreRepository;
        this.passwordService = passwordService;
        this.userReadRepo = userReadRepo;
        this.createJWTService = createJWTService;
    }
    async execute(command) {
        const hashed = await this.passwordService.hash(command.password);
        const emailExist = await this.userReadRepo.findByEmail(command.email);
        if (emailExist)
            throw new common_1.ConflictException('Email already use');
        const event = new user_signup_1.UserSignUpEvent(command.email, hashed);
        await this.eventStoreRepository.save(event);
        this.eventBus.publish(event);
        const user = await this.userReadRepo.create({
            email: command.email,
            password: hashed
        });
        const jwtPayload = new JwtPayload_dto_1.JwtPayloadDto(user.id, user.email);
        const token = this.createJWTService.signToken(jwtPayload);
        return {
            user: {
                id: user.id,
                email: user.email
            },
            ...token
        };
    }
};
exports.SignUpUserHandler = SignUpUserHandler;
exports.SignUpUserHandler = SignUpUserHandler = __decorate([
    (0, cqrs_1.CommandHandler)(signup_user_command_1.SignUpUserCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof cqrs_1.EventBus !== "undefined" && cqrs_1.EventBus) === "function" ? _a : Object, typeof (_b = typeof evet_store_repository_1.EventStoreRepository !== "undefined" && evet_store_repository_1.EventStoreRepository) === "function" ? _b : Object, typeof (_c = typeof password_service_1.PasswordService !== "undefined" && password_service_1.PasswordService) === "function" ? _c : Object, typeof (_d = typeof user_read_repositiry_1.UserReadRepository !== "undefined" && user_read_repositiry_1.UserReadRepository) === "function" ? _d : Object, typeof (_e = typeof create_jwt_service_1.CreateJWTService !== "undefined" && create_jwt_service_1.CreateJWTService) === "function" ? _e : Object])
], SignUpUserHandler);


/***/ }),

/***/ "./apps/auth-microservice/src/commands/impl/signup-user.command.ts":
/*!*************************************************************************!*\
  !*** ./apps/auth-microservice/src/commands/impl/signup-user.command.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignUpUserCommand = void 0;
class SignUpUserCommand {
    email;
    password;
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}
exports.SignUpUserCommand = SignUpUserCommand;


/***/ }),

/***/ "./apps/auth-microservice/src/dtos/JwtPayload.dto.ts":
/*!***********************************************************!*\
  !*** ./apps/auth-microservice/src/dtos/JwtPayload.dto.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtPayloadDto = void 0;
class JwtPayloadDto {
    userId;
    email;
    constructor(userId, email) {
        this.userId = userId;
        this.email = email;
    }
}
exports.JwtPayloadDto = JwtPayloadDto;


/***/ }),

/***/ "./apps/auth-microservice/src/dtos/UserSignIn.dto.ts":
/*!***********************************************************!*\
  !*** ./apps/auth-microservice/src/dtos/UserSignIn.dto.ts ***!
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSignIn = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UserSignIn {
    email;
    password;
}
exports.UserSignIn = UserSignIn;
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserSignIn.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserSignIn.prototype, "password", void 0);


/***/ }),

/***/ "./apps/auth-microservice/src/dtos/UserSignUp.dto.ts":
/*!***********************************************************!*\
  !*** ./apps/auth-microservice/src/dtos/UserSignUp.dto.ts ***!
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSignUpDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UserSignUpDto {
    email;
    password;
}
exports.UserSignUpDto = UserSignUpDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserSignUpDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(8, 32),
    __metadata("design:type", String)
], UserSignUpDto.prototype, "password", void 0);


/***/ }),

/***/ "./apps/auth-microservice/src/entities/user.entity.ts":
/*!************************************************************!*\
  !*** ./apps/auth-microservice/src/entities/user.entity.ts ***!
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserEntity = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let UserEntity = class UserEntity {
    id;
    email;
    password;
};
exports.UserEntity = UserEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, typeorm_1.Entity)('user')
], UserEntity);


/***/ }),

/***/ "./apps/auth-microservice/src/events/handler/user-signed.handler.ts":
/*!**************************************************************************!*\
  !*** ./apps/auth-microservice/src/events/handler/user-signed.handler.ts ***!
  \**************************************************************************/
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
exports.UserSignedHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const user_signup_1 = __webpack_require__(/*! ../impl/user-signup */ "./apps/auth-microservice/src/events/impl/user-signup.ts");
let UserSignedHandler = class UserSignedHandler {
    constructor() { }
    async handle(event) {
    }
};
exports.UserSignedHandler = UserSignedHandler;
exports.UserSignedHandler = UserSignedHandler = __decorate([
    (0, cqrs_1.EventsHandler)(user_signup_1.UserSignUpEvent),
    __metadata("design:paramtypes", [])
], UserSignedHandler);


/***/ }),

/***/ "./apps/auth-microservice/src/events/impl/user-signup.ts":
/*!***************************************************************!*\
  !*** ./apps/auth-microservice/src/events/impl/user-signup.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSignUpEvent = void 0;
class UserSignUpEvent {
    email;
    password;
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    toStore() {
        return {
            type: UserSignUpEvent.name,
            payload: { email: this.email, password: this.password }
        };
    }
}
exports.UserSignUpEvent = UserSignUpEvent;


/***/ }),

/***/ "./apps/auth-microservice/src/queries/handler/signin-user.handler.ts":
/*!***************************************************************************!*\
  !*** ./apps/auth-microservice/src/queries/handler/signin-user.handler.ts ***!
  \***************************************************************************/
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
exports.SignInHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const singin_user_query_1 = __webpack_require__(/*! ../impl/singin-user.query */ "./apps/auth-microservice/src/queries/impl/singin-user.query.ts");
const user_read_repositiry_1 = __webpack_require__(/*! ../../repository/user-read.repositiry */ "./apps/auth-microservice/src/repository/user-read.repositiry.ts");
const password_service_1 = __webpack_require__(/*! ../../services/password.service */ "./apps/auth-microservice/src/services/password.service.ts");
const create_jwt_service_1 = __webpack_require__(/*! ../../services/create-jwt.service */ "./apps/auth-microservice/src/services/create-jwt.service.ts");
const JwtPayload_dto_1 = __webpack_require__(/*! ../../dtos/JwtPayload.dto */ "./apps/auth-microservice/src/dtos/JwtPayload.dto.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let SignInHandler = class SignInHandler {
    userReadRepository;
    passwordService;
    createJWTService;
    constructor(userReadRepository, passwordService, createJWTService) {
        this.userReadRepository = userReadRepository;
        this.passwordService = passwordService;
        this.createJWTService = createJWTService;
    }
    async execute(query) {
        const user = await this.userReadRepository.findByEmail(query.email);
        if (!user || !await this.passwordService.compare(query.password, user.password)) {
            throw new common_1.UnauthorizedException();
        }
        const jwtPayload = new JwtPayload_dto_1.JwtPayloadDto(user.id, user.email);
        const token = this.createJWTService.signToken(jwtPayload);
        return {
            user: {
                id: user.id,
                email: user.email
            },
            ...token
        };
    }
};
exports.SignInHandler = SignInHandler;
exports.SignInHandler = SignInHandler = __decorate([
    (0, cqrs_1.QueryHandler)(singin_user_query_1.SignInUserQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof user_read_repositiry_1.UserReadRepository !== "undefined" && user_read_repositiry_1.UserReadRepository) === "function" ? _a : Object, typeof (_b = typeof password_service_1.PasswordService !== "undefined" && password_service_1.PasswordService) === "function" ? _b : Object, typeof (_c = typeof create_jwt_service_1.CreateJWTService !== "undefined" && create_jwt_service_1.CreateJWTService) === "function" ? _c : Object])
], SignInHandler);


/***/ }),

/***/ "./apps/auth-microservice/src/queries/impl/singin-user.query.ts":
/*!**********************************************************************!*\
  !*** ./apps/auth-microservice/src/queries/impl/singin-user.query.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignInUserQuery = void 0;
class SignInUserQuery {
    email;
    password;
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}
exports.SignInUserQuery = SignInUserQuery;


/***/ }),

/***/ "./apps/auth-microservice/src/repository/evet-store.repository.ts":
/*!************************************************************************!*\
  !*** ./apps/auth-microservice/src/repository/evet-store.repository.ts ***!
  \************************************************************************/
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
exports.EventStoreRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let EventStoreRepository = class EventStoreRepository {
    eventModel;
    constructor(eventModel) {
        this.eventModel = eventModel;
    }
    async save(event) {
        const { type, payload } = event.toStore();
        await new this.eventModel({
            type,
            payload,
            timestamp: new Date()
        }).save();
    }
};
exports.EventStoreRepository = EventStoreRepository;
exports.EventStoreRepository = EventStoreRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Event')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], EventStoreRepository);


/***/ }),

/***/ "./apps/auth-microservice/src/repository/user-read.repositiry.ts":
/*!***********************************************************************!*\
  !*** ./apps/auth-microservice/src/repository/user-read.repositiry.ts ***!
  \***********************************************************************/
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
exports.UserReadRepository = void 0;
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const user_entity_1 = __webpack_require__(/*! ../entities/user.entity */ "./apps/auth-microservice/src/entities/user.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let UserReadRepository = class UserReadRepository {
    user;
    constructor(user) {
        this.user = user;
    }
    async create(user) {
        try {
            return await this.user.save(user);
        }
        catch (e) {
            throw new common_1.HttpException(e, 500);
        }
    }
    async findByEmail(email) {
        return this.user.findOne({ where: { email } });
    }
};
exports.UserReadRepository = UserReadRepository;
exports.UserReadRepository = UserReadRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UserReadRepository);


/***/ }),

/***/ "./apps/auth-microservice/src/schemas/event.schema.ts":
/*!************************************************************!*\
  !*** ./apps/auth-microservice/src/schemas/event.schema.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventSchema = void 0;
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
exports.EventSchema = new mongoose_1.Schema({
    type: { type: String, required: true },
    payload: { type: mongoose_1.Schema.Types.Mixed, required: true },
    timestamp: { type: Date, default: Date.now },
}, { collection: 'events' });


/***/ }),

/***/ "./apps/auth-microservice/src/services/create-jwt.service.ts":
/*!*******************************************************************!*\
  !*** ./apps/auth-microservice/src/services/create-jwt.service.ts ***!
  \*******************************************************************/
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
exports.CreateJWTService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
let CreateJWTService = class CreateJWTService {
    jwtService;
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    signToken(payload) {
        const tokenPayload = {
            sub: payload.userId,
            email: payload.email,
        };
        return {
            access_token: this.jwtService.sign(tokenPayload)
        };
    }
};
exports.CreateJWTService = CreateJWTService;
exports.CreateJWTService = CreateJWTService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object])
], CreateJWTService);


/***/ }),

/***/ "./apps/auth-microservice/src/services/password.service.ts":
/*!*****************************************************************!*\
  !*** ./apps/auth-microservice/src/services/password.service.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PasswordService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
let PasswordService = class PasswordService {
    rounds = 10;
    async hash(plain) {
        return await bcrypt.hash(plain, this.rounds);
    }
    async compare(plain, hash) {
        return await bcrypt.compare(plain, hash);
    }
};
exports.PasswordService = PasswordService;
exports.PasswordService = PasswordService = __decorate([
    (0, common_1.Injectable)()
], PasswordService);


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

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

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
  !*** ./apps/auth-microservice/src/main.ts ***!
  \********************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const auth_microservice_module_1 = __webpack_require__(/*! ./auth-microservice.module */ "./apps/auth-microservice/src/auth-microservice.module.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(auth_microservice_module_1.AuthMicroserviceModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.setGlobalPrefix('api-auth/');
    await app.listen(process.env.AUTH_SERVICE_PORT ?? 3003);
}
bootstrap();

})();

/******/ })()
;