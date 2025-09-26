/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthMicroserviceModule = void 0;
const common_1 = __webpack_require__(3);
const auth_microservice_controller_1 = __webpack_require__(4);
const mongoose_1 = __webpack_require__(11);
const typeorm_1 = __webpack_require__(12);
const user_entity_1 = __webpack_require__(13);
const cqrs_1 = __webpack_require__(7);
const signup_user_handler_1 = __webpack_require__(15);
const user_signed_handler_1 = __webpack_require__(25);
const evet_store_repository_1 = __webpack_require__(16);
const user_read_repositiry_1 = __webpack_require__(21);
const event_schema_1 = __webpack_require__(26);
const password_service_1 = __webpack_require__(19);
const create_jwt_service_1 = __webpack_require__(22);
const signin_user_handler_1 = __webpack_require__(27);
const jwt_1 = __webpack_require__(23);
let AuthMicroserviceModule = class AuthMicroserviceModule {
};
exports.AuthMicroserviceModule = AuthMicroserviceModule;
exports.AuthMicroserviceModule = AuthMicroserviceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cqrs_1.CqrsModule,
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URL || 'mongodb://root:example@localhost:27017', {
                dbName: process.env.MONGODB_DB_NAME || 'auth'
            }),
            mongoose_1.MongooseModule.forFeature([{
                    name: 'Event',
                    schema: event_schema_1.EventSchema
                }]),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.POSTGRES_HOST || process.env.DB_HOST || 'localhost',
                port: parseInt(process.env.POSTGRES_PORT || process.env.DB_PORT || '5433', 10),
                username: process.env.POSTGRES_USER || process.env.DB_USER || 'auth_user',
                password: process.env.POSTGRES_PASSWORD || process.env.DB_PASS || 'auth_password',
                database: process.env.POSTGRES_DB || process.env.DB_NAME || 'auth_db',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                migrations: [__dirname + '/migrations/*{.ts,.js}'],
                synchronize: false,
                autoLoadEntities: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity]),
            jwt_1.JwtModule.register({
                global: true,
                secret: process.env.JWT_SECRET || process.env.SECRET_KEY || 'my_secret_key',
                signOptions: { expiresIn: process.env.JWT_EXPIRES_IN || process.env.EXPIRES_TOKEN_TIME || '60s' }
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
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
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
const common_1 = __webpack_require__(3);
const UserSignUp_dto_1 = __webpack_require__(5);
const cqrs_1 = __webpack_require__(7);
const signup_user_command_1 = __webpack_require__(8);
const UserSignIn_dto_1 = __webpack_require__(9);
const singin_user_query_1 = __webpack_require__(10);
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
/* 5 */
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
const class_validator_1 = __webpack_require__(6);
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
/* 6 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("@nestjs/cqrs");

/***/ }),
/* 8 */
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
/* 9 */
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
const class_validator_1 = __webpack_require__(6);
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
/* 10 */
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
/* 11 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 13 */
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
const typeorm_1 = __webpack_require__(14);
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
/* 14 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 15 */
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
const cqrs_1 = __webpack_require__(7);
const signup_user_command_1 = __webpack_require__(8);
const evet_store_repository_1 = __webpack_require__(16);
const user_signup_1 = __webpack_require__(18);
const password_service_1 = __webpack_require__(19);
const user_read_repositiry_1 = __webpack_require__(21);
const create_jwt_service_1 = __webpack_require__(22);
const JwtPayload_dto_1 = __webpack_require__(24);
const common_1 = __webpack_require__(3);
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
/* 16 */
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
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(11);
const mongoose_2 = __webpack_require__(17);
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
/* 17 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PasswordService = void 0;
const common_1 = __webpack_require__(3);
const bcrypt = __webpack_require__(20);
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
/* 20 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 21 */
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
const typeorm_1 = __webpack_require__(12);
const user_entity_1 = __webpack_require__(13);
const typeorm_2 = __webpack_require__(14);
const common_1 = __webpack_require__(3);
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
/* 22 */
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
const common_1 = __webpack_require__(3);
const jwt_1 = __webpack_require__(23);
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
/* 23 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 24 */
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
/* 25 */
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
const cqrs_1 = __webpack_require__(7);
const user_signup_1 = __webpack_require__(18);
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
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventSchema = void 0;
const mongoose_1 = __webpack_require__(17);
exports.EventSchema = new mongoose_1.Schema({
    type: { type: String, required: true },
    payload: { type: mongoose_1.Schema.Types.Mixed, required: true },
    timestamp: { type: Date, default: Date.now },
}, { collection: 'events' });


/***/ }),
/* 27 */
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
const cqrs_1 = __webpack_require__(7);
const singin_user_query_1 = __webpack_require__(10);
const user_read_repositiry_1 = __webpack_require__(21);
const password_service_1 = __webpack_require__(19);
const create_jwt_service_1 = __webpack_require__(22);
const JwtPayload_dto_1 = __webpack_require__(24);
const common_1 = __webpack_require__(3);
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


/***/ })
/******/ 	]);
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

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const auth_microservice_module_1 = __webpack_require__(2);
const common_1 = __webpack_require__(3);
async function bootstrap() {
    const app = await core_1.NestFactory.create(auth_microservice_module_1.AuthMicroserviceModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.setGlobalPrefix('api-auth/');
    await app.listen(process.env.port ?? 3002);
}
bootstrap();

})();

/******/ })()
;