import { showTemplates } from './../lib/router.js';
//import { collection, addDoc } from "firebase/firestore";
import {
  auth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  //GoogleAuthProvider,
  signOut,
  provider,
  signInWithPopup
} from "./init.js";
//import { async } from 'regenerator-runtime';


// Iniciar Sesión
const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredential)
    showTemplates('#/home')
    return userCredential;
  } catch (error) {
    console.log(error.message)
    throw error.message;
  }
};

// Registro de usuario
const signup = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    showTemplates('#/home')
    return userCredential;
  } catch (error) {
    if (error == 'FirebaseError: Firebase: Error (auth/invalid-email).'){
      alert('Invalido')
    }
    throw error.message;
  }
};

const googleLogin = async () => {
  try {
    const response = await signInWithPopup(auth, provider);
    showTemplates('#/home')
    console.log(response);
    return response.user;
  } catch (error) {
    console.log(error.message)
    throw error.message;
  }
};

// Cerrar sesion
const logout = async () => {
  try {
    const response = await signOut(auth);
    showTemplates('#/')
    alert('La sesión se cerró exitosamente')
    return response;
  } catch (error) {
    throw error.message;
  }
};


const data = async () =>{
  try {
    const docRef = await addDoc(collection(db, "users"), {
      userName: "Ada",
      dateOfBirth: "Lovelace",
    });
      console.log("Document written with ID: ", docRef.id);
  } catch (e) {
      console.error("Error adding document: ", e);
  }
}
export { login, logout, signup, googleLogin, auth, onAuthStateChanged, data}; /* */

//Iniciar sesion con google
