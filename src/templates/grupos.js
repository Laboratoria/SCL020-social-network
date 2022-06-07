import { navigate } from "../router/routes.js";

function groups() {
  const html =
    //html
    `
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
  const button = container.querySelector("button");
  button.addEventListener("click", () => {
    navigate("news");
  });
  return container;
}

export { groups };
