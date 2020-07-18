
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'Nurrizky',
          faculty: 'MIPA',
          department: 'mipa',
          year: 2022,
          linkedin: 'http://jos.com',
          line: '@bocahbotbot'
        },
        {
          name: 'Iman',
          faculty: 'MIPA',
          department: 'Ilkom',
          year: 2023,
          linkedin: 'http://josoooo.com',
          line: '@bocahbotbotbotbot'
        },
        
      ]);
    });
};
