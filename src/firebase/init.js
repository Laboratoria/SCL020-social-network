import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js';

import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js';

import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js';

import { firebaseConfig } from './config.js';

initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
// signInWithRedirect(auth, provider);

export {
  initializeApp, getAnalytics, getAuth, firebaseConfig,
};

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  auth,
  provider,
  getRedirectResult,
  getFirestore,
  GoogleAuthProvider,
  signInWithRedirect,
};
