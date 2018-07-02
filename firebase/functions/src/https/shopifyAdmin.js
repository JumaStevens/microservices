import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
const express = require('express')
const cors = require('cors')

// create express instance
const app = express()

// Automatically allow cross-origin requests
app.use(cors({ origin: true }))


app.get('/test', async (req, res) => {
  try {
    console.log('req: ', req)
    console.log('req body: ', req.body)
    console.log('req params: ', req.params)

    res.status(200).send('Success: test request success!')
  }
  catch (e) {
    console.error('catch error: ', e)

    res.status(200).send('Error: A wild Error appeared!')
  }
})


// endpoint: https://us-central1-microservices-d3309.cloudfunctions.net/shopifyadmin
export const listener = functions.https.onRequest(app);
