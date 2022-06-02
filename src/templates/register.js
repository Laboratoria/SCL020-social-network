import { navigate } from "../router/routes.js";

function register() {
  const html =
    //html
    `
<div class="background login">
    <div class="group background-green">
        <h1>PlantGram</h1>
        <h2>Regístrate</h2>
        <input type="email" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <input type="repPassword" placeholder="Repite la contraseña" />
        <button class="createAccountButton" > CREAR CUENTA </button>
        <h2>¿Ya tienes una cuenta?</h2>
        <button class="backButton" > Inicia sesión aquí </button>
    </div>
</div>`;
  const container = document.createElement("div");
  container.innerHTML = html;
  const button = container.querySelector("button");
  button.addEventListener("click", () => {
    navigate("profile");
  });
  return container;
}

export { register };