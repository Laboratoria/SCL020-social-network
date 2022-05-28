/* eslint-disable max-len */
//import { navigate } from '../router/router.js';
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

// INTERPRETANDO LOS MÉTODO DE FIREBASE;
/* createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {           comentario:  // El then() es la promesa que nos entrega Firebase
    // Signed in
    const user = userCredential.user;   comentario: // Esto es lo que entrega la promesa, su resultado, es lo que espera con el await
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  }); */

// State of user
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('user logged in:', user);
    // navigate('/post');
  } else {
    console.log('user logged out');
    // navigate('/');
  }
});

// Create user with email and password
const create = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password); // La Promesa que recibimos se vuelve el callback al método del Firebase
    await sendEmailVerification(auth.currentUser);
    return userCredential.user.uid; // retornamos el resultado de la Promesa, según lo que vayamos a usar para nuestro programa
  } catch (error) {
    if (email === '') {
      console.log('debes poner un email');
    } if (password.length <= 5) {
      console.log('debes ingresar contraseña de al menos 6 caracteres');
    }
    return null;
  }
};

// Sign in with email and password, la persona ya existe
const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user.uid;
  } catch (error) {
    console.log('error login', error);
    return null;
  }
};

// Sign in with Google
const google = async () => {
  signInWithRedirect(auth, provider);
  try {
    const userCredential = await getRedirectResult(auth);
    return userCredential.user.uid;
  } catch (error) {
    console.log('error signin with Google', error);
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
  login, google, create, out,
};
