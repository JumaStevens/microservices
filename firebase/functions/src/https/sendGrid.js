import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
const express = require('express')
const cors = require('cors')
const sgMail = require('@sendgrid/mail')
const app = express()


// allow cross-origin requests
app.use(cors({ origin: true }))

// http listener
app.post('/mail/:uid', async (req, res) => {
  try {
    console.log('req: ', req)
    console.log('req body: ', req.body)
    console.log('req params: ', req.params)

    // request data
    const uid = req.params.uid
    const data = req.body.data


    // fetch uid client sendGrid credentials
    const db = admin.database()
    const snapshot = await db.ref(`/services/sendGrid/${uid}`).once('value')
    console.log('snapshot: ', snapshot)
    const apiKey = snapshot.child('apiKey').val()
    const email = snapshot.child('email').val()


    // check requirement(s)
    if (!apiKey || !email || !data.from || !data.subject || !data.text) {
      console.log('Error: required data missing')
      res.status(200).send('Error: required data missing')
      return
    }


    // handle sendGrid API
    sgMail.setApiKey(apiKey)

    const sgData = {
      to: email,
      from: data.from,
      subject: data.subject,
      text: data.text
    }

    sgMail.send(sgData)
      .then(() => {
        res.status(200).send('Success: SendGrid request success!')
      })
      .catch(e => {
        console.log('sgMai error: ', e)
        console.log('sgMail error body: ', e.response.body)
        res.status(200).send('Error: SendGrid request fail!')
      })

  }
  catch (e) {
    console.error('catch error: ', e)
    res.status(200).send('Error: A wild Error appeared!')
  }
})


// endpoint: https://us-central1-microservices-6ff30.cloudfunctions.net/sendGrid
export const listener = functions.https.onRequest(app);
