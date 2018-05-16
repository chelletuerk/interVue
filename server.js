const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const md5 = require('md5')
const fs = require('fs')

const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)


app.use(bodyParser.json())
 app.use(bodyParser.urlencoded())
app.use(express.static('intervue'))


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

// app.post('/api/v1/url', (request, response) => {
//   const url = request.body;
//   for (let requiredParameter of ['url']) {
//     if (!url[requiredParameter]) {
//       return response
//         .status(422)
//         .send({ error: `Expected format: { url: <String> }. You're missing a "${requiredParameter}" property.` });
//     }
//   }
//
//   database('url').insert(url, 'id')
//     .then(url => {
//       response.status(201).json({ id: url[0] })
//     })
//     .catch(error => {
//       response.status(500).json({ error })
//     })
// })

app.post('/api/v1/questions', (request, response) => {
  const { title, description } = request.body
  const question = { title, description }
  console.log(request.body)
  database('questions').insert(question)
  .then(function() {
    database('questions').select()
            .then(function(questions) {
              response.status(200).json(questions)
            })
            .catch(function(error) {
              console.error('error posting folders:', error)
            });
  })
})

app.delete('/api/v1/questions/:id', (request, response)=> {
  const { id } = request.params
    database('questions').where('id', id).select().del()
    .then(function(count) {
      if (count === 0) {
        response.status(422).json({'Response 422': 'Unprocessable Entity'})
      } else {
        response.status(200).json({'Response 200': 'OK' })
      }
    })
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`)
})
