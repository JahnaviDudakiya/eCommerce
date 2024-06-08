"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const userCreate_dto_1 = require("./dto/userCreate.dto");
const userLogin_dto_1 = require("./dto/userLogin.dto");
const userUpdateProfile_dto_1 = require("./dto/userUpdateProfile.dto");
const userApplyJobPost_dto_1 = require("./dto/userApplyJobPost.dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async userCreateServiceFun(userCreateDto) {
        return await this.userService.userCreateServiceFun(userCreateDto);
    }
    async userLoginServiceFun(userLoginDto) {
        return await this.userService.userLoginServiceFun(userLoginDto);
    }
    async updateUserProfileFun(userUpdateProfileDto, id) {
        return await this.userService.updateUserProfileFun(userUpdateProfileDto, id);
    }
    async userApplyJobPostFun(userApplyJobPostDto) {
        return await this.userService.userApplyJobPostFun(userApplyJobPostDto);
    }
    async findAllUserJobPostFun() {
        return await this.userService.findAllUserJobPostFun();
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)('user'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userCreate_dto_1.UserCreateDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "userCreateServiceFun", null);
__decorate([
    (0, common_1.Post)('userLogin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userLogin_dto_1.UserLoginDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "userLoginServiceFun", null);
__decorate([
    (0, common_1.Put)('/userUpdateProfile/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof userUpdateProfile_dto_1.UserUpdateProfileDto !== "undefined" && userUpdateProfile_dto_1.UserUpdateProfileDto) === "function" ? _a : Object, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUserProfileFun", null);
__decorate([
    (0, common_1.Post)('userApplyJobPost'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof userApplyJobPost_dto_1.UserApplyJobPostDto !== "undefined" && userApplyJobPost_dto_1.UserApplyJobPostDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "userApplyJobPostFun", null);
__decorate([
    (0, common_1.Get)('/userJobPostList'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAllUserJobPostFun", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('user'),
    (0, common_1.Controller)({ path: '/api', version: '1' }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map