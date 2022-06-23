import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js'
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";





import config from './config.js'


const app = initializeApp(config)
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


/*signInWithRedirect(auth, provider);*/

export { initializeApp, signInWithEmailAndPassword, auth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, provider, getAuth, onAuthStateChanged,signOut }