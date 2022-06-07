import { navigate } from "../router/routes.js";

function news() {
  const html =//html
    `
<div class="background-white">
    <div class="bar">
        <div id="navMenu">
        <h4> PlantGram <img src="./assets/flower (1).png"></h4>
            <ul>
                <li><a href='/news'> NOTICIAS </a></li>
                <li><a href='/profile'> MI PERFIL </a></li>
                <li><a href='/groups'> GRUPOS </a></li>
                <li><a href='/publications'> PUBLICACIONES </a></li>
            </ul>
        </div>
        <h5>PlantGram</h5>
    </div>
    <div class="dashboard">
        <h2>NOTICIAS</h2>
        <div class="newsPost">
            <div class="post-header">
                <h3>Mi primera foto</h3>
                <span>12/14</span>
            </div>
            <div>
                <img src="https://picsum.photos/200/300"alt="
                el pirineo">
            </div>
            <div class="post-footer">
                <p>Se derriten los hielos del pirineo</p>
            </div>
        </div>
    </div>
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