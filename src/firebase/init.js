import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js';

import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js';

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    onSnapshot,
    query
} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js';



import config from './config.js'

const app = initializeApp(config);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

/*signInWithRedirect(auth, provider);*/

export {
    initializeApp,
    signInWithEmailAndPassword,
    auth,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    provider,
    getAuth,
    onAuthStateChanged,
    signOut,
    db,
    getFirestore,
    collection,
    addDoc,
    getDocs,
    app,
    onSnapshot,
    query

}