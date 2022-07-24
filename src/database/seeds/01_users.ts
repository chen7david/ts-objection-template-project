import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        { id: 1, username: "emma", password: '$2b$12$sXVIRlWA6JuPvJgff.jqFeSg.fynjKVPtjwxDcJaQCcMwk5vx97o' },
        { id: 2, username: "david", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
    ]);
};
