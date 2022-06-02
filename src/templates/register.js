import { navigate } from "../router/routes.js";

function register() {
  const html =
    //html
    `
<div class="background login">
    <div class="group background-green">
        <h1>PlantGram</h1>
        <p>Bienvenid@ a la mayor comunidad de plant lovers</p>
        <h2>Inicia sesión</h2>

        
        <input type="email" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        
        <button> HOLA </button>
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