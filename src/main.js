import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log('Loged in');
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    console.log('no user');
    // User is signed out
    // ...
  }
});

//console.log(dataBase);