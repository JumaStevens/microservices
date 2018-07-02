import { database } from '~/firebase'
import firebase from '~/firebase'


const currentUser = (rootGetters) => rootGetters['auth/getCurrentUser']

const db = {
  sendGrid: database.ref(`services/sendGrid`)
}

export default {
  async setSendGrid ({ commit }, { apiKey }) {
    console.log('apiKey: ', apiKey)

    try {
      const user = firebase.auth().currentUser
      if (!apiKey || !user) return

      const uid = user.toJSON().uid
      console.log('uid: ', uid)

      await db.sendGrid.child(`${uid}/apiKey`).set(apiKey)
    }
    catch (e) {
      console.error(e)
    }
  }

}
