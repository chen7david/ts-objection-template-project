import { Model, QueryBuilderType, ModelClass } from 'objection'
import knex from 'knex'
import knexfile from '../database/knexfile'
import pluralize from 'pluralize'
Model.knex(knex(knexfile.development))

class BaseModel extends Model {

    static get tableName(): string {
        return pluralize(this.name.toLowerCase())
    }

    static _name(): string{
        return this.name.toLowerCase()
    }
}

export default BaseModel



