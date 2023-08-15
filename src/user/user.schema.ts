import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

export type UserModel = Model<User>;