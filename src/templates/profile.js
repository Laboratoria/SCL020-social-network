import { navigate } from "../router/routes.js";

function profile() {
  const html = //html
    `
    <div class="background-white">
    <div class="image-perfil">
      <div>
        <img src="assets/perfil.jpg" id="img-perfil" alt="">
      </div>
      <div class="profileName">
        <h3>Nombre del usuario</h3>
        <h4>correo@email.com</h4>
      </div>
      <div class="profileData">
        <p class="list">Mis Intereses</p>
        <p class="list">Mis Plantas</p>
        <p class="list">Mis Grupos</p>
        <p class="list">Mis Likes</p>
      </div>
      <button> News </button>
    </div>
  </div>
`;
  const container = document.createElement("div");
  container.innerHTML = html;
  const button = container.querySelector("button");
  button.addEventListener("click", () => {
    navigate("news");
  });
  return container;
}

export { profile };