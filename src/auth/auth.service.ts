import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../user/user.interface';

@Injectable()
export class AuthService {
	constructor(
		private jwtService: JwtService,
		@InjectModel('User') private readonly userModel: Model<User>,
		) {}

	async validateUser(username: string, password: string): Promise<any> {
		const user = await this.userModel.findOne({ username });

		if (user && (await bcrypt.compare(password, user.password))) {
			return user;
		}

		return null;
	}

	async generateToken(user: any) {
		const payload = { sub: user.id };
		return {
			access_token: this.jwtService.sign(payload),
		};
	}
}
