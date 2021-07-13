import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAfkNII-DVrxY7hLkybSnwxwSteVKVRCs4",
  authDomain: "nhandoc-2aba7.firebaseapp.com",
  projectId: "nhandoc-2aba7",
  storageBucket: "nhandoc-2aba7.appspot.com",
  messagingSenderId: "1009354029936",
  appId: "1:1009354029936:web:9132a51f58ee069ebfadb5"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export {db};