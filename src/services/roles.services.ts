import Model from '../models/base.model'

module.exports = (model: Model) => ({

    getName(): Promise<void> {
        return model.name.toLowerCase()
    },

    async find(): Promise<void> {
        return await model.query()
    },

    async findOne(id: number): Promise<void> {
        return await model.query().where('id', id).first()
    },

    async create(data: object): Promise<void> {
        return await model.query().insert(data)
    },

    async patch(id: number, data: object): Promise<void> {
        const instance = await this.findOne(id)
        if (!instance) throw (new Error(`invalid ${model.name.toLowerCase()} id`))
        return instance.$query().patch(data)
    },

    async delete(id: number): Promise<void> {
        const instance = await this.findOne(id)
        if (!instance) throw (new Error(`invalid ${model.name.toLowerCase()} id`))
        return instance.$query().delete()
    },
})