import { navigate } from "../router/routes.js";

function profile() {
  const html = //html
    `
    <div class="background-white">
    <div class="bar">
    <div id="navMenu">
    <h4> PlantGram <img src="./assets/flower (1).png"></h4>
        <ul>
        <li><a href='#' id='linkNews'> NOTICIAS </a></li>
        <li><a href='#' id='linkProfile'> MI PERFIL </a></li>
        <li><a href='#' id='linkGroups'> GRUPOS </a></li>
        <li><a href='#' id='linkPublic'> PUBLICACIONES </a></li>
        </ul>
    </div>
    <h5>PlantGram</h5>
    </div>
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
  // const button = container.querySelector("button");
  // button.addEventListener("click", () => {
  //   navigate("news");
  // });
  const linkNews = container.querySelector("#linkNews");
  linkNews.addEventListener("click", (event) => {
    event.preventDefault();
    navigate("news");
  });
  const linkProfile = container.querySelector("#linkProfile");
  linkProfile.addEventListener("click", (event) => {
    event.preventDefault();
    navigate("profile");
  });
  const linkGroups = container.querySelector("#linkGroups");
  linkGroups.addEventListener("click", (event) => {
    event.preventDefault();
    navigate("grupos");
  });
  const linkPublic = container.querySelector("#linkPublic");
  linkPublic.addEventListener("click", (event) => {
    event.preventDefault();
    navigate("publications");
  });
  return container;
}

export { profile };