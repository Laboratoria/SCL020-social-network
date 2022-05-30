import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js';

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



import { getAuth } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js';

import config from './config.js'

initializeApp(config)
const auth = getAuth();

export {
  initializeApp,
  getAnalytics,
  auth,
  config,
  signInWithEmailAndPassword,
};

import { collection, addDoc } from "firebase/firestore";

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}