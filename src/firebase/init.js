
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
import { firebaseConfig } from "./config.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  signOut,
  sendEmailVerification,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider(app);

export {
  auth,
  app,
  db,
  provider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  sendEmailVerification,
};
