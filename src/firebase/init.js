import{
    initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js"
import{ } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
import config from "./config.js"

initializeApp(config);

const auth = getAuth();
const provider = new GoogleAuthProvider();

//console.log(provider)

//const db = getFirestore(app);

export {
    initializeApp, 
    auth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signInWithPopup, 
    provider,
    GoogleAuthProvider, 
    onAuthStateChanged, 
    signOut }

