import User from '../models/user.model'
import Role from '../models/role.model'
import Model from '../models/base.model'


module.exports = (model: Model) => ({

    getName(): string {
        return model.name.toLowerCase()
    },

    async find() {
        return await model.query()
    },

    async findOne(id) {
        return await model.query().where('id', id).first()
    },

    async create(data) {
        return await model.query().insert(data)
    },

    async patch(id, data) {
        const instance = await this.findOne(id)
        if (!instance) throw (new Error(`invalid ${model.name.toLowerCase()} id`))
        return instance.$query().patch(data)
    },

    async delete(id) {
        const instance = await this.findOne(id)
        if (!instance) throw (new Error(`invalid ${model.name.toLowerCase()} id`))
        return instance.$query().delete()
    },
})