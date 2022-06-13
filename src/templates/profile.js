import { navigate } from "../router/routes.js";
import { signOutWithEmail } from "../firebase/auth.js";
import {auth} from "../firebase/init.js";

function profile() {
  const html = //html
    `
    <div class="background-white">
    <div class="bar">
      <div id="navMenu">
        <div>
          <h4> PlantGram <img src="./assets/flower.png"></h4>
          <ul>
              <li><a href='#' id='linkNews'> NOTICIAS </a></li>
              <li><a href='#' id='linkProfile'> MI PERFIL </a></li>
              <li><a href='#' id='linkGroups'> GRUPOS </a></li>
              <li><a href='#' id='linkPublic'> PUBLICACIONES </a></li>
          </ul>
        </div>
        <ul class="listaCerrarSesion">
          <li>
            <a href='#' id='signOut'> Cerrar sesión </a>
          </li>
        </ul>
      </div>
      <h5>PlantGram</h5>
    </div>
    <div class="image-perfil">
      <img src="assets/perfil-3.png" id="img-perfil" alt="">
    </div>
    <div class="profileName">
      <h3 id="nameProfile">Nombre del usuario</h3>
      <h4 id="emailProfile">correo@email.com</h4>
    </div>
    <div class="profileData">
      <p><i class="fa-solid fa-thumbs-up"></i>Mis Intereses</p>
      <hr>
      <p><i class="fa-solid fa-thumbs-up"></i>Mis Plantas</p>
      <hr>
      <p><i class="fa-solid fa-thumbs-up"></i>Mis Grupos</p>
      <hr>
      <p><i class="fa-solid fa-thumbs-up"></i>Mis Likes</p>
      <hr>
    </div>
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

export { profile };