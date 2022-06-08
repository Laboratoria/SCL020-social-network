import { navigate } from "../router/routes.js";

function post() {
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
    <div class="post">
    <p>¿Qué quieres contarle al mundo?</p>
    <input type="text" placeholder="Título del post" />
    <input type="text" placeholder="Contenido del post" />
    <button id="newPost"> Publicar </button>
    </div>
  </div>
  </div>
`;
  const container = document.createElement("div");
  container.innerHTML = html;
  const linkPublications = container.querySelector("#newPost");
  linkPublications.addEventListener("click", (event) => {
    event.preventDefault();
    navigate("publications");
  });
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
    navigate("groups");
  });
  const linkPublic = container.querySelector("#linkPublic");
  linkPublic.addEventListener("click", (event) => {
    event.preventDefault();
    navigate("publications");
  });
  return container;
}

export { post };
