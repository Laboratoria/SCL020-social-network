import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js';
import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
	onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js';

import {
	getFirestore,
	collection,
	getDocs,
	addDoc,
	onSnapshot,
	query,
	doc,
	deleteDoc,
	where,
	updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js';

import { firebaseConfig } from './firebaseConfig.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

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
	provider,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
	doc,
	deleteDoc,
	onAuthStateChanged,
	where,
	updateDoc,
};
