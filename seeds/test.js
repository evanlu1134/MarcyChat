/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users2').del()
  await knex('users2').insert([
    {id: 1, firstName:"wayne", lastName:"March",email:"junio",password:"juiior"},
  ]);
};
