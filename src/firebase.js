import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";

//firebaseConfig is required to make connection with database
const firebaseConfig = {
  apiKey: "AIzaSyBMJA0o_E9o2EBvfhbFW1WzcwG4jZ5bSS4",
  authDomain: "mail-box-client-9.firebaseapp.com",
  databaseURL: "https://mail-box-client-9-default-rtdb.firebaseio.com",
  projectId: "mail-box-client-9",
  storageBucket: "mail-box-client-9.appspot.com",
  messagingSenderId: "12344479313",
  appId: "1:12344479313:web:2692bf6004887c921ef270"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
