//Función para instalar firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js';
//Archivo de configuración con los keys que nos proporciona Firebase
import config from './config.js'
//Funciones y metodos para registar y loguear usuarios.
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js';
//Funciones y metodos de Firestore para postear (crear colección, agregar documentos, )
import {
    getFirestore,
    collection,
    addDoc,
    getDoc,
    onSnapshot,
    query,
    doc, 
    updateDoc 
} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js';

//Metodos y funciones de Firebase guardados en variables para ser exportados y utilizados en otros archivos
const app = initializeApp(config);
const auth = getAuth();
const provider = new GoogleAuthProvider();
//Metodos y funciones de Firestore guardados en variables para ser exportados y utilizados en otros archivos
const db = getFirestore(app);
//exportamos metodos y funciones para ser utilizados en otros archivos
export {
    initializeApp,
    signInWithEmailAndPassword,
    auth,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    provider,
    getAuth,
    onAuthStateChanged,
    signOut,
    db,
    getFirestore,
    collection,
    addDoc,
    getDoc,
    app,
    onSnapshot,
    query,
    doc, 
    updateDoc 
}