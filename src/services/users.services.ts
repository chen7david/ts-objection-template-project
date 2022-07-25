import User from '../models/user.model'
import { IPaginate } from 'src/interfaces/pagination.interfaces';
import Model from '../models/base.model'
import { UniqueViolationError } from 'objection'
interface IUserCreate {
    username: string;
    password: string;
}

interface IUserPatch {
    username?: string;
    password?: string;
}

/* HELPER */
async function getUserFromInfo(userInfo: number | User) {
    const user = userInfo instanceof User ? userInfo : await findOne(userInfo)
    if (!(user instanceof User)) throw (new Error('invalid id'))
    return user
}
/* CRUID */

export async function find(): Promise<User[]> {
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
    const user = await getUserFromInfo(userInfo)
    const patched = await user.$query().patch(data).returning('*')
    return patched ? true : false
}

export async function remove(userInfo: number | User): Promise<boolean> {
    const user = await getUserFromInfo(userInfo)
    const deleted = await user.$query().delete()
    return deleted ? true : false
}

/* CUSTOM */

export const findOneByUsername = async function (username: string): Promise<User | null> {
    const user = await User.query().where('username', username).first()
    return user ? user : null
}

export async function usernameTaken(username: string): Promise<boolean> {
    const taken = await findOneByUsername(username)
    return taken ? true : false
}

export async function verifyPassword(user: User, password: string): Promise<boolean> {
    return user.verifyPassword(password)
}

export async function findRoles(userInfo: number | User): Promise<Model[]> {
    const user = await getUserFromInfo(userInfo)
    return user.$relatedQuery('roles')
}

export async function addRole(userInfo: number | User, roleId: number): Promise<boolean> {
    const user = await getUserFromInfo(userInfo)
    try {
        const added = await user
            .$relatedQuery('roles')
            .relate(roleId)
        return added ? true : false
    } catch (error) {
        if (!(error instanceof UniqueViolationError)) throw (error)
        return false
    }
}

export async function removeRole(userInfo: number | User, roleId: number): Promise<boolean> {
    const user = await getUserFromInfo(userInfo)
    const removed = await user
        .$relatedQuery('roles')
        .unrelate()
        .where('roles.id', roleId)
    return removed ? true : false
}

export function paginate(items: any[],p: string | string[] | undefined, l: string | string[] | undefined): IPaginate {
    const count = items.length
    let MAX_PER_PAGE = count > 30 ? 30 : count
    let page: number = p ? parseInt(<string>p, 10) : 1
    let limit: number = l ? parseInt(<string>l, 10) : 10
    if(limit > MAX_PER_PAGE) limit = MAX_PER_PAGE
    page = page < 1 ? 1 : page
    const offset = (page - 1) * limit
    const lastIndex = offset + limit
    const lastPage = Math.ceil(count / limit)
    const results: any[] = items.slice(offset, lastIndex)
    console.log({ offset, count, page, limit, lastPage, lastIndex })
    return {
        current_page: page,
        last_page: lastPage,
        per_page: limit,
        total_results: count,
        results: results,
    }
}

export async function paginatedFind(p: string | string[] | undefined, l: string | string[] | undefined): Promise<IPaginate> {
    const items: User[] = await find()
    return paginate(items, p, l)
}