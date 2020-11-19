import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('orgs', (table) => {
    table.increments('id').primary();
    table.enum('type', ["ONG", "CLINIC"]);
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('phone').notNullable();
    table.string('cep').notNullable();
    table.decimal('latitude').notNullable();
    table.decimal('longitude').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('orgs');
}