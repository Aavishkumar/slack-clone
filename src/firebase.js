// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCf4mlQefGKWfI6tlAUlWln0NkiX6E9XNc",
    authDomain: "slack-clone-5ee51.firebaseapp.com",
    projectId: "slack-clone-5ee51",
    storageBucket: "slack-clone-5ee51.appspot.com",
    messagingSenderId: "537544727399",
    appId: "1:537544727399:web:8fd05d48ef00a2136aedc2",
    measurementId: "G-CW3B11DLSY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;

