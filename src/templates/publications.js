import { navigate } from "../router/routes.js";

function publications() {
  const html =//html
    `
<div class="background-white">
    <div class="bar">
        <div id="navMenu">
        <h4> PlantGram <img src="flower (1).png"></h4>
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
        <div class="newsPost">
            <div class="post-header">
                <h3>Nombre usuario</h3>
            </div>
            <div>
                <img src="https://picsum.photos/200/300"alt="
                el pirineo">
            </div>
        </div>
    </div>
    <button> News </button>
</div>`;
  const container = document.createElement("div");
  container.innerHTML = html;
//   const button = container.querySelector("button");
//   button.addEventListener("click", () => {
//     navigate("news");
//   });
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

export { publications };
