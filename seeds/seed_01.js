/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('students').del()
  await knex('posts').del()
  await knex('comments').del()

  await knex('students').insert([
    {first_name: 'Evan', last_name: 'Lu', username: 'Evan4lfye', password: 'e'},
  ]);

await knex('posts').insert([
  {post_description: 'I love Marcy', student_id: 1},
]);

await knex('comments').insert([
  {commentary: 'I love Marcy too', post_id: 1, student_id: 1},
]);
};