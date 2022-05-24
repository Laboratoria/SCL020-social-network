import { createUserWithEmailAndPassword, google, signInWithEmailAndPassword, signOut } from "./firebase/auth.js";
import {auth} from "./firebase/init.js"
import {logIn} from "./views/login.js"

document.getElementById("root").innerHTML=logIn;
//sign up REGISTRAR
const form1 = document.getElementById("form1");
form1.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email1').value;
  const password = document.getElementById('password1').value;
  createUserWithEmailAndPassword(auth, email, password);
  form1.reset();
});

// Signing up with redirect Google
const googleBtn = document.querySelector('#google-btn');
googleBtn.addEventListener('click', function () {
 google();
});

//Log in ENTRAR
const form = document.getElementById('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password);
    form.reset();
  });


/* // Log out
const logout = document.getElementById('signOut');
logout.addEventListener('click', () => {
  //e.preventDefault();
  signOut(auth);
});
 */