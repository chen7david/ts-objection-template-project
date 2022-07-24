import Role from '../models/role.model'

interface IRoleCreate {
    name: string;
    description: string;
}

interface IRolePatch {
    name?: string;
    description?: string;
}

/* CRUID */

export async function find(): Promise<Role[] | []> {
    return Role.query()
}

export async function findOne(id: number): Promise<Role | null> {
    const role = await Role.query().where('id', id).first()
    return role ? role : null
}

export async function create(data: IRoleCreate): Promise<Role> {
    const role = await Role.query().insert({
        name: data.name,
        description: data.description,
    })
    return role
}

export async function update(roleInfo: number | Role, data: IRolePatch): Promise<boolean> {
    const role = roleInfo instanceof Role ? roleInfo : await findOne(roleInfo)
    if (!(role instanceof Role)) throw (new Error('invalid id'))
    const patched = await role.$query().patch(data).returning('*')
    return patched ? true : false
}

export async function remove(roleInfo: number | Role): Promise<boolean> {
    const role = roleInfo instanceof Role ? roleInfo : await findOne(roleInfo)
    if (!(role instanceof Role)) throw (new Error('invalid id'))
    const deleted = await role.$query().delete()
    return deleted ? true : false
}