import User from '../models/user.model'

interface IUser {
    username: string;
    password: string
}

export const findOneByUsername = async function (username: string): Promise<User | null> {
    const user = await User.query().where('username', username).first()
    return user ? user : null
}

export async function verifyPassword(user: User, password: string): Promise<boolean> {
    return user.verifyPassword(password)
}

export async function find(): Promise<User[] | []> {
    return User.query()
}

export async function findOne(id: number): Promise<User | null> {
    const user = await User.query().where('id', id).first()
    return user ? user : null
}

export async function create(data: IUser): Promise<User> {
    const user = await User.query().insert({
        username: data.username,
        password: data.password,
    })
    return user
}
