import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from 'src/db/schema/user.schema';

export const AuthAdmin = createParamDecorator(
  async (data: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    await request.user.id;
    return request.user as User;
  },
);
