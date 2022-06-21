import { signingInWithgoogle, logIn } from '../firebase-doc/authentication.js';
import { getRedirectResult, auth } from '../firebase-doc/firebase.js';
import { changeRoute } from '../lib/router.js';

export const home = () => {
  const viewHome = // html
  `
    <div class="firstView">
    <div class = "logo">
      <img src = "Social-images/logoNuevo.png">
    </div>
    <input class = "email" type="text" placeholder="Escribe tu correo">
    <input type = 'password'  class = "password" type="text" placeholder="Escribe tu contraseña">
    <button type = 'submit' class="loginButton"><strong>INICIAR SESIÓN</strong></button>
    <p class="o"><strong>o</strong></p>
    <button type='submit' class="loginGoogle"><strong>INICIAR SESIÓN CON GOOGLE</strong></button>
    <p class="registerChoice"><strong>¿No tienes una cuenta?</strong></p>
    <a href="#/register" class="register"><strong>REGISTRATE</strong></a>
    </div>
    `;
  const container = document.createElement('div');
  container.innerHTML = viewHome;
  container.className = 'firstViewContainer';
  const googleButton = container.querySelector('.loginGoogle');
  googleButton.addEventListener('click', async (e) => {
    const user = await signingInWithgoogle();
    if (user) {
      changeRoute('/#wall');
    } else (console.log('error'));
  });
  const inWithGoogle = async () => {
    const redirected = await getRedirectResult(auth);
    if (redirected) { changeRoute('#/wall'); }
  };
  inWithGoogle();

  const loginButton = container.querySelector('.loginButton');

  loginButton.addEventListener('click', async () => {
    const loginEmail = container.querySelector('.email').value;
    const userPassword = container.querySelector('.password').value;
    const userIn = await logIn(loginEmail, userPassword);
    //console.log(userIn)
    if (userIn) {
      changeRoute('#/wall');
    } else (console.log('error'));
  })
  return container;
};
