import { auth, firestore } from "../firebase/init.js";
import { readData, createPost, editPost, time, deletePost } from "../firebase/store.js";
import { navigate } from "../router/routes.js";
import { signOutWithEmail } from "../firebase/auth.js";

function publications() {
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
        <h2>PUBLICACIONES</h2>
        <button id="btnCreatePost">Nuevo post</button>
        <div class="createPost">
          
        </div>
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
  const postList = container.querySelector(".createPost");
  const setupPosts = async() => {
    let data= await readData()
    console.log(data);
    if(data.length){
      let html= '';
      data.forEach(doc =>{ //html
        const post = doc.data
        const ul = `
          <ul class="postList">
            <h class="postTitle"> ${post.title} </h>
            <p class="postBody"> ${post.description} </p>
            <button class="btnDeletePost" id="${doc.id}"><img class="deleteButton" src="../assets/delete.png"></button>
            <button class="btnUpdatePost"><img class="editButton" src="../assets/edit.png"></button>
          </ul>
        `;
        html += ul;
      });
      postList.innerHTML = html;
      const btnDeletePost = container.querySelectorAll(".btnDeletePost");
      console.log(btnDeletePost);
  // if(btnDeletePost.length > 0){
    btnDeletePost.forEach(btnDelete => {
      console.log(btnDelete)
      btnDelete.addEventListener("click", function(event) {
        console.log(btnDelete.id)
        deletePost(btnDelete.id); 

      })
  })
// }
    } else {
      postList.innerHTML = '<p>Ingresa para ver tus posts</p>';
    }
    }
  setupPosts()

  const addPost = container.querySelector("#btnCreatePost");
  if (addPost){
    addPost.addEventListener("click", function() {
    navigate("addPost")
  })}

  // const btnUpdatePost = container.querySelectorAll(".btnUpdatePost");
  // btnUpdatePost.forEach(btnUpdate => {
  //   btnUpdate.addEventListener("click", event => {
  //     event.preventDefault();
  //     console.log(dataset);
  //     editPost(firebase, data.id); 
  //   })
  // })


  return container;
}; 
export { publications };