import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyBU5NxcOH7qjKpyJYNjK6GPyXWLkhU-6WI',
    authDomain: 'datebase-22d9b.firebaseapp.com',
    databaseURL: 'https://datebase-22d9b.firebaseio.com',
    projectId: 'datebase-22d9b',
    storageBucket: 'datebase-22d9b.appspot.com',
    messagingSenderId: '273301520769',
    appId: '1:273301520769:web:f56ce774b6a4cf29cf6880',
    measurementId: 'G-PKNFFHNH7R',
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
