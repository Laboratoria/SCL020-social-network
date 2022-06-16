import { showTemplates } from './../lib/router.js';
import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  provider,
  signInWithRedirect
} from "./init.js";

// Iniciar Sesión
const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredential)
    showTemplates('#/home')
    alert('Sesión iniciada correctamente')
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

export { login, logout, signup };

//Iniciar sesion con google
