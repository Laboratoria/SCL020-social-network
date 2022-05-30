/* eslint-disable import/no-cycle */
import { create } from '../firebase/auth.js';
import { navigate } from '../router/router.js';

const Register = () => {
  const template = `
  <div id="login-box" class="login-box">
  <img src="img/brand-logo.png" id="logo" class="logo">
  <h2 class="signup-tittle">Create your account</h2>
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
      </div>
      <div class="create-account-info">
          <button id="create-account" class="main-btn" type="submit">Crear Cuenta</button>
      </div>
  </form>
</div>`;

  const container = document.createElement('div');
  container.innerHTML = template;

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
  return container;
};

export default Register;
