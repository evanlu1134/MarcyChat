/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('students').del()

  await knex('students').insert([
    {id: 1, first_name: 'Evan', last_name: 'Lu', username: 'Evan4lfye', password: 'e'},
  ]);
};
