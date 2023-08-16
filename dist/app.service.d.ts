import { Model } from 'mongoose';
import { UserDocument } from './user/user.schema';
export declare class AppService {
    private demoModel;
    constructor(demoModel: Model<UserDocument>);
}
