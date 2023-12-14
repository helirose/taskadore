//----------------------------------------------------------------//
// Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';

// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxecZSofon7FX0neiLbrUeEx0lUbPlQQU",
  authDomain: "taskadore.firebaseapp.com",
  projectId: "taskadore",
  storageBucket: "taskadore.appspot.com",
  messagingSenderId: "155980526962",
  appId: "1:155980526962:web:09b3443eb2342bd62599eb"
};
// Initialize Firebase
const fbApp = initializeApp(firebaseConfig);
const db = getFirestore(fbApp);
const auth = getAuth(fbApp);

export { db, auth };