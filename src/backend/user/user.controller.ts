import { ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from './dto/userCreate.dto';
import { UserLoginDto } from './dto/userLogin.dto';
import { RefreshTokenDto } from './dto/refreshToken.dto';

@ApiTags('Users')
@Controller({ path: '/api', version: '1' })
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  async userCreateServiceFun(@Body() userCreateDto: UserCreateDto) {
    return await this.userService.userCreateServiceFun(userCreateDto);
  }

  @Post('login')
  async userLoginServiceFun(@Body() userLoginDto: UserLoginDto) {
    return await this.userService.userLoginServiceFun(userLoginDto);
  }

  @Get('/users/:id')
  async getUserFun(@Param('id') id: string) {
    const data = await this.userService.getUserFun(id);
    return {
      data: data,
    };
  }

  @Post('refreshToken')
  async refreshTokens(@Body() refreshTokenDto: RefreshTokenDto) {
    return await this.userService.refreshTokens(refreshTokenDto);
  }
}
