// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";

import { getFirestore, collection, addDoc, updateDoc, doc, Timestamp, getDocs, onSnapshot, query } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, 
  updateProfile, sendEmailVerification, onAuthStateChanged, GoogleAuthProvider, 
  getRedirectResult, signInWithRedirect} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
    
    
import config from './config.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
initializeApp(config);
const app = initializeApp(config);
//const analytics = getAnalytics(app);
const auth = getAuth();
console.log('prueba')
const db = getFirestore(app)
const provider = new GoogleAuthProvider();
export {
  auth, app, db, provider, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword,
  updateProfile, sendEmailVerification, onAuthStateChanged,
  getRedirectResult, signInWithRedirect, addDoc,
  collection, Timestamp, getDocs, updateDoc, doc, onSnapshot, query
};


