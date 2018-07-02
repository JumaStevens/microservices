import * as firebase from 'firebase'
import { config } from './config'

firebase.initializeApp(config)

export const database = firebase.database()
export const storage = firebase.storage()
export const firebaseRef = database.ref()

export default firebase
