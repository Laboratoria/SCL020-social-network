import {login, google, create} from '../firebase/auth.js';
import { navigate } from "../router/router";

const Login =()=>{
  const template = `
    <div id="login-box" class="login-box">
    <img src="#" id="logo" class="logo">
    <h2>Sign In or Register</h2>
    <form id="form" class="form">
      <!--este método permite que el modal se cierre en automático con el submit del form-->
      <div id="user-info" class="user-info">
        <label for="email">Email: </label>
        <input id="email" type="email" placeholder="Your email">
        <br>
        <label for="password">Password: </label>
        <input id="password" type="password" placeholder="Your password">
      </div>
      <div id="form-btns" class="form-btns">
        <input id="log-in" type="submit" value="Entrar">
        <br>
        <p>Dont you have an account?</p>
        <br>
      </div>
    </form>
    <form id="form1">
      <div>
        <label for="name">Name: </label>
        <input id="name" type="name" placeholder="Your name">
        <br>
        <label for="email">Email: </label>
        <input id="email1" type="email" placeholder="Your email">
        <br>
        <label for="password">Password: </label>
        <input id="password1" type="password" placeholder="Your password">
        <br>
        <input id="sign-up" type="submit" value="Registrar"><!-- hacer popup: name, validación password -->
        <br>
        <button id="google-btn" class="google-btn">Sign Up with Google</button>
      </div>
    </form>
    </div>`;
  const container = document.createElement('div');
  container.innerHTML = template;
  container.classList.add = 'container';

  // sign up REGISTRAR
  const form1 = container.querySelector('#form1');
  form1.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = container.querySelector('#email1').value;
    const password = container.querySelector('#password1').value;
    create(email, password);
    form1.reset();
    navigate('/home');
  });

  // Signing up with redirect Google
  const googleBtn = container.querySelector('#google-btn');
  googleBtn.addEventListener('click', () => {
    google();
    navigate('/home');
  });

  // Log in ENTRAR
  const form = container.querySelector('#form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = container.querySelector('#email').value;
    const password = container.querySelector('#password').value;
    login(email, password);
    form.reset();
    navigate('/home');
  });
 
  return container;
};
  
export default Login ;
