import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js';
import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	getRedirectResult,
	signInWithRedirect,
} from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js';

import {
	getFirestore,
	collection,
	getDocs,
	addDoc,
	onSnapshot,
	query,
} from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js';

import { firebaseConfig } from './firebaseConfig.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

signInWithRedirect(auth, provider);

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export {
	initializeApp,
	signInWithEmailAndPassword,
	auth,
	db,
	createUserWithEmailAndPassword,
	addDoc,
	collection,
	getDocs,
	onSnapshot,
	query,
	getRedirectResult,
	signInWithRedirect,
	provider,
};
