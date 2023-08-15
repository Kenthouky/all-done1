import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { UserSchema } from '../user/user.schema';

@Module({
  imports: [
  PassportModule,
  JwtModule.register({
    secret: '1234',
    signOptions: { expiresIn: '1h' },
  }),
  MongooseModule.forRoot('mongodb+srv://Dollars:currency@cluster0.vy8opj6.mongodb.net/'),
  MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
