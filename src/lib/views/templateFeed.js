//funciones firestore
import { savePost } from "../firebase/firestore.js ";

export const divFeed = document.createElement("div");

//Muro de la red
export const feed = () => {
  
  const viewFeed = `<section class="">
  <section class="containerForm">
  
  <h2> Usuario</h2>
</section>
<section class="">
<form id="postform" class="">
  <label for="postTitle" class="">
<input type="text" name="postTitle" id="postTitle" class="" placeholder="Tips">
  </label>
  <label for="postText" class="">
<textarea type="text" name="postText" id="postText" class="" rows="5" placeholder="Comparte tus tips aquí..."></textarea>
</label>
<div class="">
<button type="submit" id="postBtn" class="">Publicar</button>
</div>
</form>
</section>
    </section>`;
  divFeed.innerHTML = viewFeed;
  

  //Formulario enviado DOM
  const postForm = divFeed.querySelector("#postform");
  postForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("postTitle");
    const postText = postform["postText"];

    //console.log(title.value);

    //obtiene el valor del titulo y el post del input y textarea
    savePost(title.value, postText.value);
    // console.log(postText.value)

    //Resetea el formulario, lo limpia
    postForm.reset();
  });
  console.log(postForm);

  return divFeed;

};

