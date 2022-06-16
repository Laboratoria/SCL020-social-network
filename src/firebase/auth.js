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
  updateProfile,
} from './init.js';

/* import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth';
import { auth, provider } from './init.js';
//import avatarUrl from '../img/main-avatar.png'; */

// Observer
const validateState = (next, pathname) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      next(pathname);
    } else {
      next('/');
    }
  });
};

// Create user with email and password
const create = async (userName, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    await updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: '../img/main-avatar.png',
    });
    await sendEmailVerification(auth.currentUser);
    return userCredential.user;
  } catch (error) {
    // console.log(error);
    throw error.code;
  }
};

// Sign in with email and password, la persona ya existe
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
  } catch (error) {
    // console.log(error);
    throw error.message;
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
    localStorage.clear(); // al hacer sign out se limpia localstorage (limpia sesión)
  } catch (error) {
    console.log('error signout', error);
  }
};

export {
  login, google, create, out, validateState,
};
