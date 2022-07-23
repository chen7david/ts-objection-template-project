import User from '../models/user.model'

async function findOneByUsername(username: string): Promise<User | null> {
    const user = await User.query().where('username', username).first()
    return user ? user : null
}

async function verifyPassword(user: User, password: string): Promise<boolean> {
    return user.verifyPassword(password)
}

async function find(): Promise<User[] | []> {
    return await User.query()
}

async function findOne(id: number): Promise<User | null> {
    const user = await User.query().where('id', id).first()
    return user ? user : null
}

export default {
    findOneByUsername,
    verifyPassword,
    find,
    findOne
}