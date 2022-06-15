import { navigate } from "../router/routes.js";
import { signOutWithEmail } from "../firebase/auth.js";
import { auth } from "../firebase/init.js";
import { readData  } from "../firebase/store.js";

function groups() {
  const html =
    //html
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
      <ul class="logOutList">
        <li>
          <a href='#' id='signOut'> Cerrar sesión </a>
        </li>
      </ul>
    </div>
    <h5>PlantGram</h5>
    </div>
    <div class="backgroundWhiteGroup groups">
    <p class="groupsTitle">
        Grupos
    </p>
    
    <ul id="groupsList" class="groupsList">
    </ul>

      <div class="copyright">
        By Daniela Aedo, Heike Tineo & Carolina Zapata.i
      </div>
  </div>
`;
  const container = document.createElement("div");
  container.innerHTML = html;

  let listId = container.querySelector("#groupsList");
  const getList = async() => {
    let data= await readData("Groups")
    console.log(data);
    if(data.length){
      let html= '';
      data.forEach(doc =>{
        let getData = doc.data; 
        let li = `
        <li>
          <img class="category" width="45" src="${getData.image}">
          <p>
          ${getData.title}
          </p>
          <a href="#!">
          Únete
          </a>
        </li>  
        `;
        html += li;
      });
      console.log('html', listId)
      listId.innerHTML = html;
    } else {
      listId.innerHTML = '<li>Ingresa para ver tus Grupos</li>';
    }
  }
  getList();

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
