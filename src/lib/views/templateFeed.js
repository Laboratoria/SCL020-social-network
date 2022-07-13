import { savePost } from "../firebase/firestore.js";

//Muro de la red
export const feed = () => {
  const divFeed = document.createElement("div");
    const viewFeed  =  `<section class="feeed">
      <section>
        <img src="'./images/user.png" alt="imagenPerfil">
        <h2> Usuario</h2>
      </section>
      <section>
      <form id="postform" class="postform">
      <input type="text" name="postTitle" id="postTitle" class="possTitle" placeholder="Tips">
      <textarea type="text" name="postText" id="postText" class="postText" rows="5" placeholder="Comparte tus tips aquí..."></textarea>
      <div class="">
      <button id="postBtn" type="submit" class="">Publicar</button>
      </div>
      </form>
      </section>
      </section>`
      divFeed.innerHTML = viewFeed;
      
    
  //Formulario enviado DOM
  
   const postForm = divFeed.querySelector('#postform');

   postForm.addEventListener('submit', (e) =>{
    e.preventDefault();
//llama al input y textarea
const title = divFeed.querySelector('#postTitle');
const postText = divFeed.querySelector("#postText");
 
console.log(title.value);

   //obtiene el valor del titulo y el post del input y textarea
 savePost(title.value, postText.value);
   // console.log(postText.value)

   //Resetea el formulario, lo limpia
   postForm.reset();

});

return divFeed;
  

};

