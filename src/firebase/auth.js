/* eslint-disable no-alert */
/* eslint-disable max-len */
// import { navigate } from '../router/router.js';
import {
  auth,
  provider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  sendEmailVerification,
} from './init.js';

const validateState = (next,pathname) =>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      next(pathname);
    } else {
      next('/');
    }
  });
}


// Create user with email and password
const create = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    ); // La Promesa que recibimos se vuelve el callback al método del Firebase
    await sendEmailVerification(auth.currentUser);
    return userCredential.user;
  } catch (error) {
    const errorCode = error.code;
    console.log(errorCode);
    if (errorCode === 'auth/invalid-email') {
      alert('Ingresa un correo válido: ejemplo@hotmail.com');
    } else if (errorCode === 'auth/missing-email') {
      alert('Debes ingresar un correo');
    } else if (errorCode === 'auth/internal-error') {
      alert('Debes llenar todos los campos');
    } else if (errorCode === 'auth/email-already-in-use') {
      alert('Usuario ya registrado, ingresa otro correo');
    } else if (errorCode === 'auth/weak-password') {
      alert('la contraseña debe tener mínimo 6 caracteres');
    }
    return null;
  }
};

// Sign in with email and password, la persona ya existe
const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userCredential.user.uid;
  } catch (error) {
    const errorCode = error.code;
    if (errorCode === 'auth/invalid-email') {
      alert('Ingresa un correo válido: ejemplo@hotmail.com');
    } else if (errorCode === 'auth/missing-email') {
      alert('Debes ingresar un correo');
    } else if (errorCode === 'auth/internal-error') {
      alert('Debes llenar todos los campos');
    } else if (errorCode === 'auth/wrong-password') {
      alert('Contraseña incorrecta');
    } else if (errorCode === 'auth/user-not-found') {
      alert('Ups! aún no tienes cuenta, regístrate');
    }
    return null;
  }
};

// Sign in with Google
const google = async () => {
  try {
    await signInWithRedirect(auth, provider);
    const userCredential = await getRedirectResult(auth);
    return userCredential.user.uid;
  } catch (error) {
    alert('Falló la conexión con Google', error);
    return null;
  }
};

// Sign out, la persona existe
const out = async () => {
  try {
    await signOut(auth);
    console.log('salió');
  } catch (error) {
    console.log('error signout', error);
  }
};

export {
  login, google, create, out, auth, validateState
};
