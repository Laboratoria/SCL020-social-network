import { login, google } from '../firebase/auth.js';
import { navigate, next } from '../router/router';

const Login = () => {
  const template = // HTML 
  `
  <div id="login-box" class="login-box">
    <img src="img/brand-logo.png" id="logo" class="logo">
    <h2 class="title-form">Sign In or Register</h2>
    <form id="form" class="form">
        <div id="user-info" class="user-info">
            <div class="email-info">
                <label for="email">Email: </label>
                <input id="email" class="input-form" type="email" placeholder="Your email">
            </div>
            <div class="password-info">
                <label for="password">Password: </label>
                <input id="password" class="input-form" type="password" placeholder="Your password">
            </div>
        </div>
        <div id="login-btns" class="login-btns">
            <button id="log-in" class="main-btn" type="submit">Entrar</button>
            <p>Or?</p>
            <button id="google-btn" class="google-btn">Sign In with Google</button>
        </div>
    </form>
    <div class="signup-link">
        <p>Don't you have an account?</p>
        <a href="#" id="sign-up" class="sign-up">SIGN UP</a>
    </div>
</div>`;

  const container = document.createElement('div');
  container.innerHTML = template;
  container.classList.add = 'container';

  // Log in ENTRAR
  const form = container.querySelector('#form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = container.querySelector('#email').value;
    const password = container.querySelector('#password').value;

    try {
      const user = await login(email, password);
      localStorage.setItem('user', user.displayName);
      form.reset();
      navigate('/home');
    } catch (error) {
      if (error === 'auth/invalid-email') {
        alert('Ingresa un correo válido: ejemplo@hotmail.com');
      } else if (error === 'auth/missing-email') {
        alert('Debes ingresar un correo');
      } else if (error === 'auth/internal-error') {
        alert('Debes llenar todos los campos');
      } else if (error === 'auth/wrong-password') {
        alert('Contraseña incorrecta');
      } else if (error === 'auth/user-not-found') {
        alert('Ups! aún no tienes cuenta, regístrate');
      }
    }
  });

  // Sign Up REGISTRAR button, to register view
  const signUpBtn = container.querySelector('#sign-up');
  signUpBtn.addEventListener('click', () => {
    next('/register');
  });

  // Signing up with redirect Google
  const googleBtn = container.querySelector('#google-btn');
  googleBtn.addEventListener('click', async () => {
    const user = await google();
    if (user) {
      navigate('/home');
    } else {
      console.log('falló tu conexión con google');
    }
  });

  return container;
};

export default Login;
