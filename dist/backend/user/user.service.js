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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(userModel, userJobPostModel, connection) {
        this.userModel = userModel;
        this.userJobPostModel = userJobPostModel;
        this.connection = connection;
    }
    async userCreateServiceFun(userCreateDto) {
        await this.findOneByPhone(userCreateDto.phone);
        const session = await this.connection.startSession();
        try {
            session.startTransaction();
            const users = {
                ...userCreateDto,
            };
            const user = new this.userModel(users);
            await user.save();
            return '200';
        }
        catch (error) {
            await session.abortTransaction();
            return 'admin_not_created';
        }
        finally {
            await session.endSession();
        }
    }
    async findOneByPhone(phone) {
        await this.userModel.findOne({ phone: phone }).exec();
    }
    async hashPassword(password) {
        const salt = await bcrypt.genSalt();
        return await bcrypt.hash(password, salt);
    }
    async userLoginServiceFun(userLoginDto) {
        const user = await this.userModel.findOne({ email: userLoginDto.email });
        if (!user) {
            throw new common_1.UnauthorizedException('Username is Invalid');
        }
        if (user.password !== userLoginDto.password) {
            throw new common_1.UnauthorizedException('Password is Invalid');
        }
        return '200';
    }
    async comparePassword(enteredPassword, dbPassword) {
        return await bcrypt.compare(enteredPassword, dbPassword);
    }
    async updateUserProfileFun(userUpdateProfileDto, id) {
        const findUser = await this.userModel.findById(id).exec();
        if (!findUser) {
            throw new common_1.UnauthorizedException('Username is Invalid');
        }
        await this.userModel.updateOne({ _id: findUser.id }, {
            ...userUpdateProfileDto,
        });
        return 'User update successfully';
    }
    async userApplyJobPostFun(userApplyJobPostDto) {
        const session = await this.connection.startSession();
        try {
            session.startTransaction();
            const userJobPost = {
                ...userApplyJobPostDto,
            };
            const userJobPosts = new this.userJobPostModel(userJobPost);
            await userJobPosts.save();
            return '200';
        }
        catch (error) {
            await session.abortTransaction();
            return 'userJobPost_not_created';
        }
        finally {
            await session.endSession();
        }
    }
    async findAllUserJobPostFun() {
        try {
            const object_userJobPost = await this.userJobPostModel.find().exec();
            return object_userJobPost;
        }
        catch (error) {
            console.error('Error occurred while fetching areas:', error);
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __param(1, (0, mongoose_1.InjectModel)('UserJobPost')),
    __param(2, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model, mongoose_2.default.Connection])
], UserService);
//# sourceMappingURL=user.service.js.map