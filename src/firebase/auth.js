import { showTemplates } from './../lib/router.js';
import {
  auth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  setDoc,
  db,
  doc,
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
const signup = async (data) => {
  /*const data  = {username: 'username1', undefined, email: 'username@emailg.com',password: 'contraseña',birthday: 2001/05/25,userType: 'baker',---photoUrl: ',,,'}
  */
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
    const userFirestoreRegister = await setDoc(
      doc(db, "users", userCredential.user.uid), 
      { 
        username: data?.username,
        birthday: data?.birthday,
        userType: data?.userType
      }
    )
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

export { login, logout, signup, googleLogin, auth, onAuthStateChanged}; /* */

//Iniciar sesion con google
