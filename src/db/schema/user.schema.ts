import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({
    type: String,
    unique: true,
  })
  username: string;

  @Prop({
    type: String,
    unique: true,
  })
  email: string;

  @Prop({
    type: String,
  })
  password: string;

  @Prop({
    type: String,
  })
  access_token: string;

  @Prop({
    type: String,
  })
  refresh_token: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
