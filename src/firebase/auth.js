import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth';
import { auth, provider } from './init.js';
import avatarUrl from '../img/main-avatar.png';

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
    const user = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    console.log(auth.currentUser);
    await updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: avatarUrl,
    });
    await sendEmailVerification(auth.currentUser);
    return user;
  } catch (error) {
    // console.log(error);
    throw error.code;
  }
};

// Sign in with email and password, la persona ya existe
const login = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return user;
  } catch (error) {
    throw error.code;
  }
};

// Sign in with Google
const google = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user, 'user en Google function');
    const userPhotoGoogle = result.user.photoURL;
    console.log(userPhotoGoogle);
    return result.user;
  } catch (error) {
    console.log('Falló conexión de Google');
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
