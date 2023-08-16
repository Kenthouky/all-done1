import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument, UserSchema } from './user/user.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(UserSchema)
    private demoModel: Model<UserDocument>,
    ) {}
  }
