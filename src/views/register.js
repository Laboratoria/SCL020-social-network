/* eslint-disable import/no-cycle */
import { create } from '../firebase/auth.js';
import { navigate } from '../router/router.js';

const Register = () => {
  const template = // HTML
  `
  <div id="login-box" class="login-box">
  <img src="img/brand-logo.png" id="logo" class="logo">
  <h2 class="signup-tittle">Create your account</h2>
  <form id="form1">
      <div>
          <label for="name">Name: </label>
          <input id="name" class="input-form" type="name" placeholder="Your name">
          <br>
          <label for="email">Email: </label>
          <input id="email1" class="input-form" type="email" placeholder="Your email">
          <br>
          <label for="password">Password: </label>
          <input id="password1" class="input-form" type="password" placeholder="Your password">
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
  form1.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userName = container.querySelector('#name').value;
    const email = container.querySelector('#email1').value;
    const password = container.querySelector('#password1').value;

    try {
      await create(userName, email, password);
      console.log('entré'); // const user = await create(email, password)
      form1.reset();
      navigate('/home');
    } catch (error) {
      if (error === 'auth/invalid-email') {
        alert('Ingresa un correo válido: ejemplo@hotmail.com');
      } else if (error === 'auth/missing-email') {
        alert('Debes ingresar un correo');
      } else if (error === 'auth/internal-error') {
        alert('Debes llenar todos los campos');
      } else if (error === 'auth/email-already-in-use') {
        alert('Usuario ya registrado, ingresa otro correo');
      } else if (error === 'auth/weak-password') {
        alert('la contraseña debe tener mínimo 6 caracteres');
      }
    }
  });

  return container;
};

export default Register;
