import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'


export const listener = functions.database.ref('/services/sendGrid/{uid}').onCreate(async (event) => {
  try {

    if (!event.data.exists()) return

    const db = admin.database()
    const uid = event.params.uid
    console.log('sendGrid DB FIRED!')


    // // if conversation does not exist, add conversation id to user pending
    // const snapshot = await db.ref(`/messenger/conversations/${uid}`).once('value')
    //
    // if (snapshot.hasChild(convoId)) return
    //
    // await db.ref(`messenger/pending/${uid}/${convoId}`).set(true)

    return
  }
  catch (e) {
    console.error('oh noo, an error happened!  --> ', e)
    return
  }

});
