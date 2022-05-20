import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDQf-NYH9EHrDoXWGMJbufYgI4iaXr_j_0',
  authDomain: 'junktube-d40c2.firebaseapp.com',
  projectId: 'junktube-d40c2',
  storageBucket: 'junktube-d40c2.appspot.com',
  messagingSenderId: '993784150979',
  appId: '1:993784150979:web:208ce71330c4274f495b76',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider(app);

// Creando modal de Sign Up
const modal = document.querySelector('#modal-signup');
const openModal = document.querySelector('.open-btn');

// State of user
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('user logged in:', user);
  } else {
    console.log('user logged out');
  }
});

// Modal form sign up
openModal.addEventListener('click', () => {
  modal.showModal();

  const form = document.getElementById('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      updateProfile(auth.currentUser, {
        displayName: name,
      });
    });
    modal.close();
    form.reset();
  });
});

// Signing up with redirect Google
const googleBtn = document.querySelector('#google-btn');
googleBtn.addEventListener('click', () => {
  signInWithRedirect(auth, provider);

  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. We can use tu access Google APIs
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info
      const user = result.user;
    })
    .catch((error) => {
      // Handle Errors here
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the users account used
      const email = error.customData.email;
      // The AuthCredential type that was used
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});

// Log in modal
const openLoginModal = document.querySelector('.login-btn');

const loginModal = document.querySelector('#modal-login');
openLoginModal.addEventListener('click', () => {
  loginModal.showModal();

  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Log in with email and password
    signInWithEmailAndPassword(auth, email, password).then(() => {});
    loginForm.reset();
    loginModal.close();
  });
});

// Log out
const logout = document.getElementById('signOut');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  signOut(auth).then(() => {});
});
