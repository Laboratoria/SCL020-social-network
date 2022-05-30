/* eslint-disable import/no-cycle */
import { login, google, create } from '../firebase/auth.js';
import { navigate } from '../router/router';


const Login = () => {
  const template = `
    <img src="../img/brand-logo.png" id="logo" class="logoLogIn">
    <form id="form" class="form">
    <div id="emailDiv">
        <label for="email">YOUR EMAIL </label>
        <br>
        <input id="email" type="email" placeholder="xxxx@xxxxx.com">
    </div>
        <br>
        <br>
    <div id="passwordDiv">
        <label for="password">PASSWORD </label>
        <br>
        <input id="password" type="password" placeholder="Your password">
    </div>
        <br>
        <br>
        <input id="log-in" type="submit" value="Entrar">
    </form>
    <div id="signup-btns" class="signup-btns">
      <p>or:</p>
      <button id="google-btn" class="google-btn">Sign Up with Google</button>
      <br>
      <p>Dont you have an account?</p>
      <a href="#" id="sign-up" class="sign-up">SING UP</a>
      <br>
    </div>`;

  const container = document.createElement('div');
  container.id="login-box";
  container.className="login-box";
  container.innerHTML = template;
  
  // Log in ENTRAR
  const form = container.querySelector('#form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = container.querySelector('#email').value;
    const password = container.querySelector('#password').value;
    if(email==""||password==""){
      alert("los campos no pueden quedar vacíos")
    }else{
      let logIn = login(email, password);
      if (logIn == null){
        alert ("error")
      }else{
        form.reset();
        navigate('/home');
      }
    }
 
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
