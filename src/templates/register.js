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
      <input type="email" id="email" placeholder="Usuario" />
      <input type="password" id="password" placeholder="Contraseña" />
      <p id="alert"></p>
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
      navigate("news"); 
    } catch (error) {
      const alertError = container.querySelector("#alert");
      console.log(error);
      if(error.includes('auth/email-already-in-use')){
        alertError.innerHTML = 'Usuario registrado!';
      }
    }
  });
  return container;
}

export { register };