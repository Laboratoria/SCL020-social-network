import { auth, firestore } from "../firebase/init.js";
import { readData, createPost, editPost, time, deletePost } from "../firebase/store.js";
import { navigate } from "../router/routes.js";
import { signOutWithEmail } from "../firebase/auth.js";

function addPost() {
  const html =//html
    `
<div class="background-white">
    <div class="bar">
      <div id="navMenu">
        <div>
          <h4> PlantGram <img src="./assets/flower.png"></h4>
          <ul>
              <li><a href='#' id='linkProfile'> MI PERFIL </a></li>
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
    <div class="dashboard">
        <h2>NUEVO POST</h2>
  
        <div class="newPost">
        </div>      
        <button id="addNewPost">Agregar nuevo post</button>
    </div>
</div>`;
  const container = document.createElement("div");
  container.innerHTML = html;
//  MENÚ ACTIVO
  const linkProfile = container.querySelector("#linkProfile");
  linkProfile.addEventListener("click", (event) => {
    event.preventDefault();
    navigate("profile");
  });
  const linkPublic = container.querySelector("#linkPublic");
  linkPublic.addEventListener("click", (event) => {
    event.preventDefault();
    navigate("publications");
  });

  //SIGN OUT WITH EMAIL
  const signOut = container.querySelector("#signOut");
  signOut.addEventListener("click", async () => {
    try {
      await signOutWithEmail(auth);
      navigate("login"); 
    } catch (error) {
      throw error.message;
    }
  });

  // POSTS
  const writePost = container.querySelector(".newPost");
  const setupPosts = async() => {
    // let post= await createPost()
    // console.log(data);
      let html= '';
      // post.forEach(doc =>{
      //   const lastPost = doc.post
        const ul = `
          <ul class="newPostList"> Ingresa título
            <input id="newPostTitle"> </input>
            <textarea id="newPostDescription"> Ingresa descripción </textarea>
          </ul>
        `;
        html += ul;
      // });
      writePost.innerHTML = html;
    }
    
  setupPosts()
  

  const addPost = container.querySelector("#addNewPost");
  if (addPost){
    addPost.addEventListener("click", function() {
      const title = container.querySelector("#newPostTitle").value;
      const description = container.querySelector("#newPostDescription").value;
      if (title && description) {
        createPost(title, description);
        navigate("publications"); 
      } else if(!title) {
        alert('Debe ingresar un título para el post');
      } else if(!description){
        alert('Debe ingresar un contenido para el post');
      } else{
        alert('Algo no está bien, inténtalo nuevamente');
      }
  })}

  return container;
}; 
export { addPost };

