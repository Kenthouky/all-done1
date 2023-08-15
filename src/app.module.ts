import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { LocalStrategy } from './auth/local.strategy';
import { UserSchema } from './user/user.schema';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: '1234',
      signOptions: { expiresIn: '1h' },
    }),
    MongooseModule.forRoot('mongodb+srv://Dollars:currency@cluster0.vy8opj6.mongodb.net/',
    AuthModule,
    ],
  controllers: [AppController],
  providers: [AppService, LocalStrategy],
})
export class AppModule {}
