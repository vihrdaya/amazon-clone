import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCshD2J6LgWNn11q7cK9k5vNDPTwLRxrL4",
  authDomain: "clone-65a0b.firebaseapp.com",
  projectId: "clone-65a0b",
  storageBucket: "clone-65a0b.appspot.com",
  messagingSenderId: "614569887878",
  appId: "1:614569887878:web:4745ca0a362eb5690a6907",
  measurementId: "G-KBEST09NZ9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
