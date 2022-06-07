import { navigate } from "../router/routes.js";

function groups() {
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
    <div class="background-white-grupo grupo">
    <header>
    PlantGram
    </header>
    <p class="titulo-grupos">
        Grupos
    </p>
    
    <ul class="lista-grupos">
        <li>
            <p>
            Los mejores Fertilizantes
            </p>
            <a href="#!">
            Únete
            </a>
        </li>
        <li>
            <p>
            Los mejores Fertilizantes
            </p>
            <a  href="#!">
            Únete
            </a>
        </li>
        <li>
            <p>
            Los mejores Fertilizantes
            </p>
            <a  href="#!">
            Únete
            </a>
        </li>
        <li>
            <p>
            Los mejores Fertilizantes
            </p>
            <a  href="#!">
            Únete
            </a>
        </li>
        <li>
            <p>
            Los mejores Fertilizantes
            </p>
            <a  href="#!">
            Únete
            </a>
        </li>
        
    </ul>
    
      <button> News </button>
      <div class="copyright">
        By Daniela Aedo, Heike Tineo & Carolina Zapata.i
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
  navigate("groups");
});
const linkPublic = container.querySelector("#linkPublic");
linkPublic.addEventListener("click", (event) => {
  event.preventDefault();
  navigate("publications");
});
  return container;
}

export { groups };
