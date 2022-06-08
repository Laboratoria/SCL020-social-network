import { navigate } from "../router/routes.js";

function publications() {
  const html =//html
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
    <div class="dashboard">
        <h2>PUBLICACIONES</h2>
        <div class="createPost">
          <button id="btnCreatePost">Crear nuevo post</button>
        </div>
        <div class="public">
        <div class="image-public">
          <img src="assets/perfil.jpg" id="img-public" alt="">
        </div>
            <div class="public-header">
                <h3 id="namePublic">Nombre usuario</h3>
            </div>
            <div>
                <img src="https://picsum.photos/200/300"alt="
                el pirineo" id="imgPublications">
            </div>
        </div>
    </div>
</div>`;
  const container = document.createElement("div");
  container.innerHTML = html;
  const linkNewPost = container.querySelector("#btnCreatePost");
  linkNewPost.addEventListener("click", (event) => {
    event.preventDefault();
    navigate("post");
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

export { publications };
