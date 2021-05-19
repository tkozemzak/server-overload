
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('users', function(table) {
    table.increments()
    table.string('name');
    table.string('email')
    table.timestamps();
  })
};

exports.down = function(knex) {
  
};
