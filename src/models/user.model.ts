import Model from './base.model'
import bcrypt from 'bcrypt'

class User extends Model {
    username: string;
    password: string;
    is_active: boolean;

    
}

export default User