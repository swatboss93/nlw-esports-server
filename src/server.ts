import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
  return response.json([
    { id: 1, name: "Ad 1" },
    { id: 2, name: "Ad 2" },
  ])
})

app.listen(3333)
