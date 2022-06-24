
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getFirestore,doc, addDoc, setDoc, collection } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
import { firebaseConfig } from "./config.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  getRedirectResult,
  GoogleAuthProvider,
  signOut,
  sendEmailVerification,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

// Initialize Firebase autenticacion
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
//firebase
const db = getFirestore(app);
//require("firebase/firestore");



export {
  auth,
  app,
  db,
  doc,
  setDoc,
  collection,
  addDoc,
  signInWithPopup,
  provider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  getRedirectResult,
  GoogleAuthProvider,
  signOut,
  sendEmailVerification,
};
