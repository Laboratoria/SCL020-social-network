import { auth, firestore } from "../firebase/init.js";
import { readData } from "../firebase/store.js";
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
    </div>
</div>`;
  const container = document.createElement("div");
  container.innerHTML = html;
//  MENÚ ACTIVO
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

  // POSTS
  const postList = container.querySelector(".createPost");
  const setupPosts = async() => {
    let data= await readData()
    // console.log(data);
    if(data.length){
      let html= '';
      data.forEach(doc =>{
        const post = doc.data
        const li = `
          <li>
            <h6> ${post.title}</h6>
            <p> ${post.description} </p>
          </li>
        `;
        html += li;
      });
      postList.innerHTML = html;
    } else {
      postList.innerHTML = '<p>Ingresa para ver tus posts</p>';
    }
    }
  setupPosts()

  return container;
}
// }
export { publications };
