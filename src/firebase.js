// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC4xE77rCgWyfHQr5GvOHunFr0Kr6AQJZA",
  authDomain: "clone-192b1.firebaseapp.com",
  projectId: "clone-192b1",
  storageBucket: "clone-192b1.appspot.com",
  messagingSenderId: "903089867189",
  appId: "1:903089867189:web:b7b8f49704b69d56bcb1fc",
  measurementId: "G-RJG1EF1098"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };