import firebase from 'firebase/app'
import 'firebase/firestore'
import firebaseConfig from '~/firebaseConfig'

// App
const app = firebase.initializeApp(firebaseConfig)

// Firestore
export const database = app.firestore()
export const increment = firebase.firestore.FieldValue.increment(1)
export const decrement = firebase.firestore.FieldValue.increment(-1)
export const Timestamp = firebase.firestore.Timestamp
export const pokemonsRef = database.collection('pokemons')
export const usageRef = database.collection('usage')

export default app
