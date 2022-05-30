import { login, google, create } from '../firebase/auth.js';
import { navigate } from '../router/router';

const Login = () => {
  const template = `
  <div id="login-box" class="login-box">
    <img src="img/brand-logo.png" id="logo" class="logo">
    <h2 class="title-form">Sign In or Register</h2>
    <form id="form" class="form">
        <div id="user-info" class="user-info">
            <div class="email-info">
                <label for="email">Email: </label>
                <input id="email" class="email" type="email" placeholder="Your email">
            </div>
            <div class="password-info">
                <label for="password">Password: </label>
                <input id="password" class="password" type="password" placeholder="Your password">
            </div>
        </div>
        <div id="login-btns" class="login-btns">
            <button id="log-in" class="main-btn" type="submit">Entrar</button>
            <p>Or?</p>
            <button id="google-btn" class="google-btn">Sign In with Google</button>
        </div>
    </form>
    <div class="signup-link">
        <p>Dont you have an account?</p>
        <a href="#" id="sign-up" class="sign-up">SING UP</a>
    </div>
</div>`;

  const container = document.createElement('div');
  container.innerHTML = template;
  container.classList.add = 'container';
  //container.appendChild(Header());

  // Log in ENTRAR
  const form = container.querySelector('#form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = container.querySelector('#email').value;
    const password = container.querySelector('#password').value;

    const user = await login(email, password);
    console.log(user, 'valor de user en login');
    if (user) {
      form.reset();
      navigate('/home');
    } else {
      console.log('error log in user', user);
    }
  });

  // Sign Up REGISTRAR button, to register view
  const signUpBtn = container.querySelector('#sign-up');
  signUpBtn.addEventListener('click', () => {
    navigate('/register');
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
