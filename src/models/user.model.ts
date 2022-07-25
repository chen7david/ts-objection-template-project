import Model from './base.model'
import Role from './role.model'
import { QueryContext, ModelOptions } from 'objection'
import bcrypt from 'bcrypt'
const BCRYPT_ROUNDS = 12

class User extends Model {
    id!: number;
    username: string;
    password: string;
    is_active?: boolean;

    async $beforeInsert(context: QueryContext): Promise<void> {
        await super.$beforeInsert(context)
        if (this.password) this.password = await bcrypt
            .hash(this.password, BCRYPT_ROUNDS)
    }

    async $beforeUpdate(opt: ModelOptions, context: QueryContext): Promise<void> {
        await super.$beforeUpdate(opt, context)
        if (this.password) this.password = await bcrypt
            .hash(this.password, BCRYPT_ROUNDS)
    }

    async verifyPassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password)
    }

    static get relationMappings() {

        return {

            roles: {
                relation: Model.ManyToManyRelation,
                modelClass: Role,
                join: {
                    from: 'users.id',
                    to: 'roles.id',
                    through: {
                        from: 'user_roles.user_id',
                        to: 'user_roles.role_id',
                    }
                }
            },
        }
    }
}

export default User