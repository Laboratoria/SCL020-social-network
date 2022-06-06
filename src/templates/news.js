import { navigate } from "../router/routes.js";

function news() {
  const html =//html
    `
<div class="background-white">
    <div class="bar">
    <div id="navMenu">
        <span></span>
        <span></span>
        <span></span>
        </div>
        <h1>PlantGram</h1>
    </div>
        <h2>NOTICIAS</h2>
        <button class="publicationsButton" > PUBLICACIONES </button>
</div>`;
  const container = document.createElement("div");
  container.innerHTML = html;
  const button = container.querySelector("button");
  button.addEventListener("click", () => {
    navigate("publications");
  });
  return container;
}

// const navMenu=document.querySelector("#navMenu");
// navMenu.addEventListener("click",()=>{
//     navMenu.classList.toggle("active");
// });


export { news };