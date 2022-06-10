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
      <button class="createAccountButton" id="createAccount"> CREAR CUENTA </button>
      <h2>¿Ya tienes una cuenta?</h2>
      <button class="backButton"> <a href="#" id="signIn">Inicia sesión aquí</a></button>
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
      console.log(auth, email, password);
    } catch (error) {
      throw error.message;
    }
    navigate("news");
  });
  return container;
}

export { register };