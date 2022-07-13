
//Muro de la red
export const feed = () => {
    const divFeed = document.createElement("div");
    const viewFeed  =  `<section class="">
      <section>
        <img src="'./images/user.png" alt="imagenPerfil">
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
    
  
  }


