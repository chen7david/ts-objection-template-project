import Role from '../models/role.model'

async function find(): Promise<Role[] | []> {
    return await Role.query()
}

async function findOne(id: number): Promise<Role | null> {
    const user = await Role.query().where('id', id).first()
    return user ? user : null
}

export default {
    find,
    findOne
}