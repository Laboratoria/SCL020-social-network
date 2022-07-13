


//Muro de la red
export const feed = () => {
  const divFeed = document.createElement("div");
  const viewFeed  =  `<section class="">
    <section>
      <img src="./images/user.png" alt="imagenPerfil">
      <h2> Usuario</h2>
    </section>
    <section>
    <form id="postform" class="">
    <input type="text" name="postTitle" id="postTitle" class="" placeholder="Tips">
    <textarea type="text" name="postText" id="postText" class="" rows="5" placeholder="Comparte tus tips aquí..."></textarea>
    <div class="">
    <button id="postBtn" class="">Publicar</button>
    </div>
    </form>
    </section>
    </section>`
    divFeed.innerHTML = viewFeed;
    return divFeed;


   //Formulario enviado DOM
const postForm = document.getElementById('postform');
postForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const title = document.getElementById('postTitle');
    const postText = postform['postText'];

//console.log(title.value);

   //obtiene el valor del titulo y el post del input y textarea
 savePost(title.value, postText.value);
   // console.log(postText.value)

   //Resetea el formulario, lo limpia
   postForm.reset();

});
console.log(postForm); 

};
  

