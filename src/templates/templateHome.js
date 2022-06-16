import { signingInWithgoogle } from '../firebase-doc/authentication.js';
import { getRedirectResult, auth } from '../firebase-doc/firebase.js';
import { changeRoute } from '../lib/router.js';

export const home = () => {
  const viewHome = // html
  `
    <div class="firstView">
    <div class = "logo">
      <img src = "Social-Images/logo.jpeg">
    </div>
    <input class="email" type="text" placeholder="Escribe tu correo">
    <input class="password" type="text" placeholder="Escribe tu contraseña">
    <a href="#/wall" class="loginButton"><strong>INICIAR SESIÓN</strong></a>
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
    console.log(user);
    if (user) {
      changeRoute('/#wall');
    } else (console.log('error'));
  });
  const inWithGoogle = async () => {
    const redirected = await getRedirectResult(auth);
console.log(redirected);
    if (redirected) { changeRoute('#/wall'); }
  };

  // console.log(inWithGoogle)
  // return inWithGoogle.user.uid;
  inWithGoogle();
  return container;
};
