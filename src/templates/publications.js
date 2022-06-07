import { navigate } from "../router/routes.js";

function publications() {
  const html =//html
    `
<div class="background-white">
    <div class="bar">
        <div id="navMenu">
        <h4> PlantGram <img src="flower (1).png"></h4>
            <ul>
                <li><a href="/news"> NOTICIAS </a></li>
                <li><a href="/profile"> MI PERFIL </a></li>
                <li><a href="/groups"> GRUPOS </a></li>
                <li><a href="/publications"> PUBLICACIONES </a></li>
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
  const button = container.querySelector("button");
  button.addEventListener("click", () => {
    navigate("news");
  });
  return container;
}

export { publications };
