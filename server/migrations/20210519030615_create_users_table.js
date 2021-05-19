
// exports.up = function(knex) {
//   return knex.schema.createTable('users', function(table) {
//     table.increments()
//     table.string('name');
//     table.string('email')
//     table.timestamps(true, true);
//   }).then(console.log(`Table Created`))
// };


exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", function(table){
    table.increments();
    table.string("name");
    table.string("email");
    table.timestamps(true, true);
  }).then(()=> {
    console.log("Success")
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users').then(()=> {
   console.log("Successfully deleted")
  })
};
