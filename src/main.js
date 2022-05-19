import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

//console.log(createUserWithEmailAndPassword);

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

openModal.addEventListener('click', () => {
  modal.showModal();

  const form = document.getElementById('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Firebase
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      // Signed in
      updateProfile(userCredential.user, {
        displayName: name
      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
      // ...
      console.log(auth.currentUser)
      console.log(auth.currentUser.email)
      console.log(auth.currentUser.displayName)
    })

  
    modal.close()
    form.reset()
});
});



