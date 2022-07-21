import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', (table: Knex.TableBuilder) => {
        table.uuid('id').primary().unique()
        table.string('username').unique().notNullable()
        table.string('password').notNullable()
        table.boolean('is_active').defaultTo(false)
        table.timestamps(true, true)
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users')
}

