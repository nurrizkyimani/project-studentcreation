
const { v4: uuidv4 } = require('uuid');


exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: uuidv4(),
          title: 'project webdesign',
          description: 'this is example of description',
          topic: 'tech',
          member: 2,
          users_id: 1,
        },
        {
          id: uuidv4(),
          title: 'project zoom meetings',
          description: 'working with design of ui ux especially the working state',
          topic: 'tech',
          member: 2,
          users_id: 1,
        },
        
      ]);
    });
};
