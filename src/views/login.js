/* eslint-disable import/no-cycle */
import { login, google, create } from '../firebase/auth.js';
import { navigate } from '../router/router';
import { Header } from '../utils/header.js';

const Login = () => {
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
    <div id="signup-btns" class="signup-btns">
      <button id="sign-up" class="sign-up">Registrar</button>
      <br>
      <button id="google-btn" class="google-btn">Sign Up with Google</button>
    </div>
    </div>`;

  const container = document.createElement('div');
  container.innerHTML = template;
  container.classList.add = 'container';
  container.appendChild(Header());

  // Log in ENTRAR
  const form = container.querySelector('#form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = container.querySelector('#email').value;
    const password = container.querySelector('#password').value;
    login(email, password);
    form.reset();
    navigate('/home'); // este creo que habría que sacarlo, porque la redirección la debería hacer la validación si está log in o no en auth
  });

  // Sign Up REGISTRAR button, to register view
  const signUpBtn = container.querySelector('#sign-up');
  signUpBtn.addEventListener('click', () => {
    navigate('/register');
  });

  // Signing up with redirect Google
  const googleBtn = container.querySelector('#google-btn');
  googleBtn.addEventListener('click', () => {
    google();
    navigate('/home');
  });

  return container;
};

export default Login;
