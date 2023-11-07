import { createApp } from 'vue'
import './reset.css'
import './style.css'
import App from './App.vue'

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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

createApp(App).mount('#app')
