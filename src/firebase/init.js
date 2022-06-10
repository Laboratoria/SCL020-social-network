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
  onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js';

import { getFirestore, addDoc, doc, getDoc, getDocs, collection } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js';

import { firebaseConfig } from './config.js';

initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const firestore = getFirestore()
// signInWithRedirect(auth, provider);

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  auth,
  provider,
  getRedirectResult,
  getFirestore,
  firestore,
  GoogleAuthProvider,
  signInWithRedirect,
  doc,
  addDoc,
  getDoc,
  getDocs,
  collection,
  initializeApp,
  getAnalytics,
  getAuth,
  firebaseConfig, 
  onAuthStateChanged
};
