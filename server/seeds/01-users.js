
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Tim', email: 'tim@test.com'},
        {id: 2, name: 'Bill', email: 'bill@bill.com'}
      ]);
    });
};
