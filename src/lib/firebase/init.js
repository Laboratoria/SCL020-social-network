//Conexión con Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js'
//Se trae la configuración
import {firebaseConfig}  from './lib/firebase/config.js'
//Importando funciones firebase auth
import { getAuth, signInWithEmailAndPassword,  signInWithPopup, GoogleAuthProvider  } from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js'
//Importando funciones relacionadas a firestore
import { getFirestore, collection, getDocs, addDoc,onSnapshot, query, doc } from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js';

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Get firestore
const db = getFirestore(app);

//Autenticación
const auth = getAuth();

const provider = new GoogleAuthProvider();

//Exportar funciones firebase-firestore
export { initializeApp, signInWithEmailAndPassword, auth, signInWithPopup, provider, GoogleAuthProvider, collection, getDocs, addDoc,onSnapshot, query, doc };

