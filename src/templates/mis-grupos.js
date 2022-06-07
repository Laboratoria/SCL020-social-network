import { navigate } from "../router/routes.js";

function group() {
  const html =
    //html
    `
    <div class="background-white-grupo grupo">
    <header>
    PlantGram
    </header>
    <div class="image-grupo">
        <div class="profileName">
            <h3>Brenda Heike Tineo</h3> 
        </div>  
   
        <div class="image-circulo">
            <img width="100%" src="assets/perfil-2.png"  alt="">
        </div>
    </div>
    
    <ul class="lista-grupo">
        <li>
            <p>
            <img src="assets/like.png">
            Mis Intereses
            </p>
            <img width="7px" height="11px" src="assets/flecha.png">
        </li>
        <li>
            <p>
            <img src="assets/like.png">
            Mis Plantas
            </p>
            <img width="7px" height="11px" src="assets/flecha.png">
        </li>
        <li>
            <p>
            <img src="assets/like.png">
            Mis Grupos
            </p>
            <img width="7px" height="11px" src="assets/flecha.png">
        </li>
        <div class="grupos-favoritos">
            <a href="#!">
                <img src="assets/grupo.png">
            </a>
            <a href="#!">
                <img src="assets/grupo.png">
            </a>
            <a href="#!">
                <img src="assets/grupo.png">
            </a>
            <a href="#!">
                <img src="assets/grupo.png">
            </a>
            <a href="#!">
                <img src="assets/grupo.png">
            </a>
            <a href="#!">
                <img src="assets/grupo.png">
            </a>
            <a href="#!">
                <img src="assets/grupo.png">
            </a>
            <a href="#!">
                <img src="assets/grupo.png">
            </a>
        </div>
        <li>
            <p>
            <img src="assets/like.png">
            Mis Likes
            </p>
            <img width="7px" height="11px" src="assets/flecha.png">
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
  const button = container.querySelector("button");
  button.addEventListener("click", () => {
    navigate("news");
  });
  return container;
}

export { group };
