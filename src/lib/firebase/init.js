import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js'
import { getAuth, signInWithEmailAndPassword,  signInWithPopup, GoogleAuthProvider  } from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js'


import {config}  from './lib/firebase/config.js'

export const app = initializeApp(config);
const auth = getAuth();
const provider = new GoogleAuthProvider();


export { initializeApp, signInWithEmailAndPassword, auth, signInWithPopup, provider, GoogleAuthProvider}

