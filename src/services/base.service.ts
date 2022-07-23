
export default (model: any) => ({

    getName(): string {
        return model.name.toLowerCase()
    },

    async find() {
        return await model.query()
    },

    async findOne(id: number) {
        return await model.query().where('id', id).first()
    },

    async create(data: object) {
        return await model.query().insert(data)
    },

    async patch(id: number, data: object) {
        const instance = await this.findOne(id)
        if (!instance) throw (new Error(`invalid ${model.name.toLowerCase()} id`))
        return instance.$query().patch(data)
    },

    async delete(id: number) {
        const instance = await this.findOne(id)
        if (!instance) throw (new Error(`invalid ${model.name.toLowerCase()} id`))
        return instance.$query().delete()
    },
})