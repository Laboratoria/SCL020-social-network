export const interpLogIn = () => {
	const formIndex = `
  <div id="root">
    <nav id="nav_screen1">
      <input type="button" id="signUp" class="ButtonSingUp" value="Registrarse" href="#/interpSignUp">
    </nav>
    <div class="containerFormIndex">
      <h1 class ="title_page1" >SESHATLAB</h1>
      <img class="img_logo_page1" src="./images/logo.png" alt="logo" width="145"/>
      <form id="form_login" action="">
        <input type="text id="userName" placeholder="USERNAME" autofocus class="campotxt">
        <input type="text id="password" placeholder="PASSWORD" autofocus class="campotxt">
        <button id="start">Iniciar sesión</button>
      </form>
      <button id="button_google" type="submit">
            <img
              src="./images/img_google.png" alt="img_google"
              width="15px"
              height="auto"
            />
            Acceder con Google
          </button>
      <a class="olvido_contraseña" href="">¿Olvidó su contraseña?</a>
    </div>
  </div>
  `;
	// aqui tu codigo
	return formIndex;
};