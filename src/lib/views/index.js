//import { login } from "../../firebase/auth";
// aqui exportaras las funciones que necesites ES EL PADRE QUE ENLAZA LOS ARCHIVOS VIEWS

export const interpIndex = () => {
  const formIndex = `
  <div id="root">
    <nav>
      <input type="button" id="signUp" class="ButtonSingUp" value="Registrarse">
    </nav>
    <div class="containerFormIndex">
      <h1>SESHATLAB</h1>
      <img src="./images/logo.png" alt="logo" width="100"/>
      <form action="">
        <input type="text id="userName" placeholder="USERNAME" autofocus class="campotxt">
        <input type="text id="password" placeholder="PASSWORD" autofocus class="campotxt">
        <button id="start">iniciar sesion</button>
      </form>
      <button id="google">Acceder con Google</button>
      <a href="">Olvidaste tu contrasena?</a>
    </div>
  </div>
  `;
  // aqui tu codigo
  return formIndex;
};
