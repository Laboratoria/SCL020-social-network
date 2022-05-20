import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
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

// Creando modal de Sign Up
const modal = document.querySelector('#modal-signup');
const openModal = document.querySelector('.open-btn');

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('user logged in:', user);
  } else {
    console.log('user logged out');
  }
});

openModal.addEventListener('click', () => {
  modal.showModal();

  const form = document.getElementById('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Firebase
    createUserWithEmailAndPassword(auth, email, password).then(
      () => {
        updateProfile(auth.currentUser, {
          displayName: name,
        });
      },
    );
    modal.close();
    form.reset();
  });
});

const openLoginModal = document.querySelector('.login-btn');

const loginModal = document.querySelector('#modal-login');
openLoginModal.addEventListener('click', () => {
  loginModal.showModal();

  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    signInWithEmailAndPassword(auth, email, password).then(() => {
    });
    loginForm.reset();
    loginModal.close();
  });
});

const logout = document.getElementById('signOut');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  signOut(auth).then(() => {});
});
