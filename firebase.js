import firebase from 'firebase/app'
import 'firebase/firestore'
import firebaseConfig from '~/firebaseConfig'

console.log(firebaseConfig)

// App
const app = firebase.initializeApp(firebaseConfig)

// Firestore
export const database = app.firestore()
export const leagueRefs = {
  great: database.collection('great'),
  ultra: database.collection('ultra'),
  master: database.collection('master')
}

export default app
