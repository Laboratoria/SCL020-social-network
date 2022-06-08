import { initializeApp } from 'firebase/app';
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
  updateProfile,
} from 'firebase/auth';
import {
  getFirestore, collection, addDoc, getDocs, doc, Timestamp, query, orderBy, limit, updateDoc, getDoc, onSnapshot, deleteDoc, where,
} from 'firebase/firestore';
import { firebaseConfig } from './configFirebase.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider(app);

export {
  auth, app, db, provider, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  onAuthStateChanged, signInWithRedirect, getRedirectResult, signOut, sendEmailVerification, collection, 
  addDoc, getDocs, doc, updateProfile, Timestamp, query, orderBy, limit, updateDoc, getDoc, onSnapshot, deleteDoc, where
};
