import { login, google, create, signOut } from "./firebase/auth.js";
import {auth} from "./firebase/init.js"
import {routes,navigate} from "./router/router.js"

//VISTA LOGIN

document.getElementById("root").innerHTML=routes[window.location.pathname];
console.log(window.location);
console.log(window.history);

//sign up REGISTRAR
const form1 = document.getElementById("form1");
form1.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email1').value;
  const password = document.getElementById('password1').value;
  create(email, password);
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
    login(email, password);
    form.reset();
    navigate('/home');
    console.log(window.history.length,"estoy en home");
  });


