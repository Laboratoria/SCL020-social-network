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
    return userCredential.user;
  } catch (error) {
    console.log('error de sistema en crear cuenta', error);
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
  try {
    await signInWithRedirect(auth, provider);
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
