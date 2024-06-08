/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { User } from 'src/db/schemas/user.schema';
import mongoose, { Model } from 'mongoose';
import { UserCreateDto } from './dto/userCreate.dto';
import { UserLoginDto } from './dto/userLogin.dto';
import { UserUpdateProfileDto } from './dto/userUpdateProfile.dto';
import { UserApplyJobPostDto } from './dto/userApplyJobPost.dto';
import { UserJobPost } from 'src/db/schemas/userJobPost.schema';
export declare class UserService {
    private userModel;
    private userJobPostModel;
    private readonly connection;
    constructor(userModel: Model<User>, userJobPostModel: Model<UserJobPost>, connection: mongoose.Connection);
    userCreateServiceFun(userCreateDto: UserCreateDto): Promise<"200" | "admin_not_created">;
    findOneByPhone(phone: number): Promise<void>;
    protected hashPassword(password: string): Promise<string>;
    userLoginServiceFun(userLoginDto: UserLoginDto): Promise<string>;
    comparePassword(enteredPassword: string, dbPassword: string): Promise<boolean>;
    updateUserProfileFun(userUpdateProfileDto: UserUpdateProfileDto, id: string): Promise<string>;
    userApplyJobPostFun(userApplyJobPostDto: UserApplyJobPostDto): Promise<"200" | "userJobPost_not_created">;
    findAllUserJobPostFun(): Promise<any[]>;
}
