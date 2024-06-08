import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

export const OAuthAdmin = createParamDecorator(
  async (data: any, ctx: ExecutionContext) => {
    const request = await ctx.switchToHttp().getRequest();
    const userId = await request;
    const usertoken = request.headers.authorization;
    if (!usertoken) {
      return null;
    }
    if (JSON.stringify(usertoken).includes('Object')) {
      return null;
    } else {
      try {
        const token = usertoken.split(' ');
        const decoded = jwt.verify(
          token[1],
          'asdjhgasakdjh12i33417693123^%$^&*',
        );
        return decoded;
      } catch (error) {
        return null;
      }
    }
  },
);
