
//Conexión con Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js'
//configuracion firebase
import { firebaseConfig } from './config.js';
//Importando funciones firebase auth
import { getAuth, signInWithEmailAndPassword,  signInWithPopup, GoogleAuthProvider, onAuthStateChanged  } from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js';
//Importando funciones relacionadas a firestore
import { getFirestore, collection, getDocs, addDoc,onSnapshot, query, doc, getDoc, deleteDoc, updateDoc, setDoc } from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js';



// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Autenticación
const auth = getAuth();

//Provider
const provider = new GoogleAuthProvider();

// Get firestore
const db = getFirestore(app);




//Exportar funciones firebase-firestore
export { initializeApp, signInWithEmailAndPassword, auth, signInWithPopup, provider, GoogleAuthProvider, collection, getDocs, addDoc,onSnapshot, query, doc, db, deleteDoc, getDoc, onAuthStateChanged, updateDoc, setDoc };

