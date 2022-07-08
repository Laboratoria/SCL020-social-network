//Conecxión con Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js'
//Importando funciones firebase
import { getAuth, signInWithEmailAndPassword,  signInWithPopup, GoogleAuthProvider  } from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js'
import {firebaseConfig}  from './lib/firebase/config.js'
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//Autenticación
const auth = getAuth();


const provider = new GoogleAuthProvider();

//Exportar funciones firebase
export { initializeApp, signInWithEmailAndPassword, auth, signInWithPopup, provider, GoogleAuthProvider}

