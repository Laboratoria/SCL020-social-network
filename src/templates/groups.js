import { navigate } from "../router/routes.js";
import { signOutWithEmail } from "../firebase/auth.js";
import {auth} from "../firebase/init.js"

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
        <li><a href='#' id='signOut'> Cerrar sesión </a></li>
        </ul>
    </div>
    <h5>PlantGram</h5>
    </div>
    <div class="background-white-grupo grupo">
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
      <div class="copyright">
        By Daniela Aedo, Heike Tineo & Carolina Zapata.i
      </div>
  </div>
`;
  const container = document.createElement("div");
  container.innerHTML = html;
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
const signOut = container.querySelector("#signOut");
signOut.addEventListener("click", async () => {
  try {
    await signOutWithEmail(auth);
    navigate("login"); 
  } catch (error) {
    throw error.message;
  }
});
  return container;
}

export { groups };

