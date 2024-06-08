import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { UserCreateDto } from './dto/userCreate.dto';
import { UserLoginDto } from './dto/userLogin.dto';
import { User } from 'src/db/schema/user.schema';
import { JwtService } from '@nestjs/jwt';
import { RefreshTokenDto } from './dto/refreshToken.dto';

interface IUserJwt {
  id: string;
  email: string;
}

interface IUserLogin {
  id: string;
  email: string;
}

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private userModel: Model<User>,
    private jwtService: JwtService,
    @InjectConnection()
    private readonly connection: mongoose.Connection,
  ) {}

  async userCreateServiceFun(userCreateDto: UserCreateDto) {
    await this.findOneByEmail(userCreateDto.email);

    const pass = await this.hashPassword(userCreateDto.password);

    const session = await this.connection.startSession();
    try {
      session.startTransaction();

      const users = {
        ...userCreateDto,
        password: pass,
      };
      const user = new this.userModel(users);
      await user.save();

      const token = this.generateToken({
        id: user.id,
        email: userCreateDto.email,
      });

      const refreshToken = await this.getRefreshToken({
        id: user.id,
        email: userCreateDto.email,
      });

      await this.userModel.updateOne(
        { _id: user.id },
        {
          access_token: token,
          refresh_token: refreshToken,
        },
      );

      return '200';
    } catch (error) {
      await session.abortTransaction();
      return 'admin_not_created';
    } finally {
      await session.endSession();
    }
  }

  async findOneByEmail(email: string) {
    await this.userModel.findOne({ email: email }).exec();
  }

  protected async hashPassword(password: string) {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  }

  async userLoginServiceFun(userLoginDto: UserLoginDto) {
    const user = await this.userModel.findOne({ email: userLoginDto.email });

    if (!user) {
      throw new UnauthorizedException('Username is Invalid');
    }

    if (!(await this.comparePassword(userLoginDto.password, user.password))) {
      throw new UnauthorizedException('Password is Invalid');
    }

    return '200';
  }

  async comparePassword(enteredPassword: string, dbPassword: string) {
    return await bcrypt.compare(enteredPassword, dbPassword);
  }

  async getUserFun(id: any) {
    return await this.userModel.findById(id).exec();
  }

  private generateToken(user: IUserJwt): string {
    return this.jwtService.sign(user);
  }

  async getRefreshToken(user: IUserLogin) {
    const refreshToken = 'abc1234' + user.id + user.email;

    const user_find = await this.userModel
      .findOne({
        _id: user.id,
      })
      .exec();
    if (user_find) {
      user_find.refresh_token = refreshToken;
      await user_find.save();
    }

    return {
      refreshToken,
    };
  }

  async refreshTokens(refreshTokenDto: RefreshTokenDto) {
    try {
      const user = await this.userModel
        .findOne({
          refresh_token: refreshTokenDto.refresh_token,
        })
        .exec();

      if (!user) {
        return 'api access denied';
      }

      const token = this.generateToken({
        id: user.id,
        email: user.email,
      });

      const refreshToken = await this.getRefreshToken({
        id: user.id,
        email: user.email,
      });

      await this.userModel.updateOne(
        { _id: user.id },
        {
          access_token: token,
          refresh_token: refreshToken,
        },
      );

      return {
        accessToken: token,
        refreshToken: refreshToken,
      };
    } catch (error) {
      return 'api_access_denied';
    }
  }
}
