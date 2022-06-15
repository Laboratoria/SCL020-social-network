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
const login = async (auth, email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
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

// const signup = (email,password) => {
//   createUserWithEmailAndPassword(auth, email, password)
//   .then ((res) => {
//       console.log(res.user)
//   })
//   .catch((err)=> {
//       console.log(err.code)
//       console.log(err.message)
//       throw err.message;
//   })
// }


// Cerrar sesion
const logout = async () => {
  try {
    const response = await signOut (auth);
    return response;
  } catch (error) {
    throw error.message;
  }
};

export { login, logout, signup };

//Iniciar sesion con google


