import{
    initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js"
import{collection, getFirestore, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
import config from "./config.js"

const app = initializeApp(config);

const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore(app);



export {
    initializeApp, 
    auth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signInWithPopup, 
    provider,
    GoogleAuthProvider, 
    onAuthStateChanged, 
    signOut,
    collection,
    db,
    addDoc,
    getDocs,
    onSnapshot, 
    deleteDoc, 
    doc,
    getDoc
}

