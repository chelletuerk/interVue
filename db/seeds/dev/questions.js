exports.seed = function(knex, Promise) {
  return knex('url').del()
    .then(() => knex('questions').del())

    .then(() => {
      return Promise.all([

        knex('questions').insert({
          title: 'What is Google?', description: 'Looking for some info on what Google is exactly...'}, 'id')
        .then(question => {
          return knex('url').insert([
            { url: 'www.google.com', question_id: question[0] },
            { url: 'www.stackoverflow.com', question_id: question[0] }
          ])
        })
        .then(() => console.log('Seeding complete!'))
        .catch(error => console.log(`Error seeding data: ${error}`))
      ])
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
