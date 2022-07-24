import User from '../models/user.model'

interface IUserCreate {
    username: string;
    password: string;
}

interface IUserPatch {
    username?: string;
    password?: string;
}

/* CRUID */

export async function find(): Promise<User[] | []> {
    return User.query()
}

export async function findOne(id: number): Promise<User | null> {
    const user = await User.query().where('id', id).first()
    return user ? user : null
}

export async function create(data: IUserCreate): Promise<User> {
    const user = await User.query().insert({
        username: data.username,
        password: data.password,
    })
    return user
}

export async function update(userInfo: number | User, data: IUserPatch): Promise<boolean> {
    const user = userInfo instanceof User ? userInfo : await findOne(userInfo)
    if (!(user instanceof User)) throw (new Error('invalid id'))
    const patched = await user.$query().patch(data).returning('*')
    return patched ? true : false
}

export async function remove(userInfo: number | User): Promise<boolean> {
    const user = userInfo instanceof User ? userInfo : await findOne(userInfo)
    if (!(user instanceof User)) throw (new Error('invalid id'))
    const deleted = await user.$query().delete()
    return deleted ? true : false
}

/* CUSTOM */

export const findOneByUsername = async function (username: string): Promise<User | null> {
    const user = await User.query().where('username', username).first()
    return user ? user : null
}

export async function verifyPassword(user: User, password: string): Promise<boolean> {
    return user.verifyPassword(password)
}
