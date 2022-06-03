import { navigate } from "../router/routes.js";

function profile() {
  const html = //html
    `
<div class="background login">
  <div class="group background-green">
    <h2>Tu Perfil</h2>
    <h3>Nombre del usuario</h3>
    <h4>correo@email.com</h4>
    <img src="assets/perfil.jpg" alt="">
    <p>Mis Intereses</p>
    <p>Mis Plantas</p>
    <p>Mis Grupos</p>
    <p>Mis Likes</p>
  </div>
</div>
`;
  const container = document.createElement("div");
  container.innerHTML = html;
  const button = container.querySelector("button");
  button.addEventListener("click", () => {
    navigate("profile");
  });
  return container;
}

export { profile };