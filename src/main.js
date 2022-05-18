import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
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

const form = document.getElementById('form');
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let name = document.getElementById('name').value;
  let password = document.getElementById('password').value;
  createUserWithEmailAndPassword(auth, name, password).then((userCredential) => {
    console.log(userCredential.user);
  })
})