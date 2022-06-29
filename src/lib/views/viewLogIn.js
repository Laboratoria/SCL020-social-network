import { login } from '../../firebase/auth.js';

export const interpLogIn = () => {
	const divLogIn = document.createElement('div');
	const formIndex = //html
  `
    <div id="root">
      <nav id="nav_registration">
        <a href="#/viewSignUp" id="signUp" >
          <button class="buttonSingUp">registrate por favor</button>
        </a>
      </nav>
      <div class="containerFormIndex">
        <h1 class ="title_page1" >SESHATLAB</h1>
        <img class="img_logo_page1" src="./images/logo.png" alt="logo" width="145"/>
        <div id="form_login" action="">
          <input type="text id="userName" placeholder="USERNAME" autofocus class="campotxt">
          <input type="text id="password" placeholder="PASSWORD" autofocus class="campotxt">
          <a href='#/viewHome'>
          <button id="start">Iniciar sesión</button>
          </a>
        </div>
        <a href='#/viewHome'>
        <button id="button_google" type="submit">
              <img
                src="./images/img_google.png" alt="img_google"
                width="15px"
                height="auto"
              />
              Acceder con Google
            </button>
        </a>
        <a class="olvido_contraseña" href="">¿Olvidó su contraseña?</a>
      </div>
    </div>
  `;
	divLogIn.innerHTML = formIndex;

	// aqui tu codigo funcion de log

	return divLogIn;
};
