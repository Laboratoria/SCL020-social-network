import{initializeApp} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js'
//import{ } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";


import config from './config.js'

export const app = initializeApp(config);
//const db = getFirestore(app);

// const db = firebaseApp.firestore();
export const auth = getAuth();



export {initializeApp, auth, signInWithEmailAndPassword, createUserWithEmailAndPassword}