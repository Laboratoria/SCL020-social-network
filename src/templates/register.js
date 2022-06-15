import { createUser } from "../firebase/auth.js";
import { auth } from "../firebase/init.js";
import { navigate } from "../router/routes.js";

function register() {
  const html =//html
    `
<div class="background login">
  <div class="group background-green">
    <h1>PlantGram</h1>
    <h2>Regístrate</h2>
      <input type="email" id="email" placeholder="Correo electrónico" />
      <input type="password" id="password" placeholder="Contraseña" />
      <p id="alertRegister"></p>
      <button class="createAccountButton" id="createAccount"> CREAR CUENTA </button>
      <h2>¿Ya tienes una cuenta?  <a href="#" id="signIn" class="backButton"> Inicia sesión aquí</a></h2>
  </div>
</div>`;
  const container = document.createElement("div");
  container.innerHTML = html;
  const linkSignIn = container.querySelector("#signIn");
  linkSignIn.addEventListener("click", (event) => {
  event.preventDefault();
  navigate("login");
  });
  //registro de usuario --- me falta guardar el user en savedUser 
  const btnCreateAccount = container.querySelector("#createAccount");
  btnCreateAccount.addEventListener("click", async () => {
    const email = container.querySelector("#email").value;
    const password = container.querySelector("#password").value;
    console.log(email, password);
    try {
      await createUser(auth, email, password);
      // console.log(auth, email, password);
      navigate("publications"); 
    } catch (error) {
      const alertError = container.querySelector("#alertRegister");
      console.log(error);
      if(error.includes('auth/email-already-in-use')){
        alertError.innerHTML = '¡Este usuario ya ha sido registrado, prueba con otro correo!';
      } else if(error.includes('auth/invalid-email')){
        alertError.innerHTML = '¡Ingresa un correo válido!';
      } else if(error.includes('auth/weak-password')){
        alertError.innerHTML = '¡La contraseña debe contener mínimo 6 caracteres!';
      } else if(error.includes('auth/user-not-found')){
        alertError.innerHTML = '¡No existe el usuario ingresado!';
      } else if(error.includes('auth/wrong-password')){
        alertError.innerHTML = '¡Contraseña inválida!';
      }else{
        alertError.innerHTML = '¡Algo salió mal, ingresa tus datos nuevamente!';
      }
    }
  });
  return container;
}

export { register };