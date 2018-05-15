const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const md5 = require('md5')
const fs = require('fs')

const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))


app.set('port', process.env.PORT || 3000)
app.locals.title = 'Chat Box'

app.get('/', (request, response) => {
  response.send('Oh hey Chat Box')
})

app.get('/api/v1/questions', (request, response) => {
  database('questions').select()
    .then((questions) => {
      response.status(200).json(questions)
    })
    .catch((error) => {
      response.status(500).json({ error })
    })
})

app.get('/api/v1/url', (request, response) => {
  database('url').select()
    .then((url) => {
      response.status(200).json(url)
    })
    .catch((error) => {
      response.status(500).json({ error })
    })
})

app.post('/api/v1/url', (request, response) => {
  const url = request.body;

  for (let requiredParameter of ['url']) {
    if (!url[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { url: <String> }. You're missing a "${requiredParameter}" property.` });
    }
  }

  database('url').insert(url, 'id')
    .then(url => {
      response.status(201).json({ id: url[0] })
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`)
})
