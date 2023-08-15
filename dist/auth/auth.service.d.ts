import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { User } from '../user/user.interface';
export declare class AuthService {
    private jwtService;
    private readonly userModel;
    constructor(jwtService: JwtService, userModel: Model<User>);
    validateUser(username: string, password: string): Promise<any>;
    generateToken(user: any): Promise<{
        access_token: string;
    }>;
}
