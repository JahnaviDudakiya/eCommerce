import { UserService } from './user.service';
import { UserCreateDto } from './dto/userCreate.dto';
import { UserLoginDto } from './dto/userLogin.dto';
import { UserUpdateProfileDto } from './dto/userUpdateProfile.dto';
import { UserApplyJobPostDto } from './dto/userApplyJobPost.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    userCreateServiceFun(userCreateDto: UserCreateDto): Promise<"200" | "admin_not_created">;
    userLoginServiceFun(userLoginDto: UserLoginDto): Promise<string>;
    updateUserProfileFun(userUpdateProfileDto: UserUpdateProfileDto, id: string): Promise<string>;
    userApplyJobPostFun(userApplyJobPostDto: UserApplyJobPostDto): Promise<"200" | "userJobPost_not_created">;
    findAllUserJobPostFun(): Promise<any[]>;
}
