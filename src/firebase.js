import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBacsv1XSrTPthMjPOuLM9pnTOqZ5tgCPQ",
  authDomain: "clone-55838.firebaseapp.com",
  projectId: "clone-55838",
  storageBucket: "clone-55838.appspot.com",
  messagingSenderId: "441827347292",
  appId: "1:441827347292:web:fd6add9b1a8f0b88564f99",
  measurementId: "G-H6Z3ET3TBF"
}; 

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };