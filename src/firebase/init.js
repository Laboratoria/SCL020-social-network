import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js'
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
/*import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth.js";*/


import firebaseconfig from './config.js'


initializeApp(firebaseconfig)
const auth = getAuth();


/*signInWithRedirect(auth, provider);*/

export { initializeApp, signInWithEmailAndPassword, auth }