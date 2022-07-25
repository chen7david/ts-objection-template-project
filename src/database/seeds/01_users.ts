import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        { id: 1, username: "emma", password: '$2b$12$sXVIRlWA6JuPvJgff.jqFeSg.fynjKVPtjwxDcJaQCcMwk5vx97o' },
        { id: 2, username: "david", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 3, username: "david3", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 4, username: "david4", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 5, username: "david5", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 6, username: "david6", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 7, username: "david7", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 8, username: "david8", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 9, username: "david9", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 10, username: "david10", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 11, username: "david11", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 12, username: "david12", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 13, username: "david13", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 14, username: "david14", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 15, username: "david15", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 16, username: "david16", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 17, username: "david17", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 18, username: "david18", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 19, username: "david19", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 20, username: "david20", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 21, username: "david21", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 22, username: "david22", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 23, username: "david23", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 24, username: "david24", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 25, username: "david25", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 26, username: "david26", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 27, username: "david27", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 28, username: "david28", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 29, username: "david29", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 30, username: "david30", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 31, username: "david31", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 32, username: "david32", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 33, username: "david33", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 34, username: "david34", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 35, username: "david35", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 36, username: "david36", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 37, username: "david37", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 38, username: "david38", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 39, username: "david39", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 40, username: "david40", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
        { id: 41, username: "david41", password: '$2b$12$e8KII3J5uv.DXNw0H420kuT2YuTfr4xAjPk5pZMi4.t5UKy.EF.kG' },
    ]);
};
