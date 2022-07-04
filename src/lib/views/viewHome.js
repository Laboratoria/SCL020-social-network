//Este archivo es para la vista principal de la app

import { snapshot } from "../../firebase/firestore.js";

export const interpHome = () => {
	const divHome = document.createElement('div');

	const formHome =//html
		`
    <div id="rootHome" class="containerRootHome">
      <section class="containerHome">
        <form id="form_post" class="textBoxContainer">
          <input type="text" name="postTitle" id="postTittle" class="boxtxt" placeholder="Título">
          <p></p>
          <textarea type="text" name="postText" id="postText" class="boxtxt" rows="5" placeholder="Escribe tu publicación aquí..."></textarea>
         <div class="containerPublicar">
          <button id="Post" class="post">Publicar</button>
          </div>
        </form>
        </section>
    </div>
    <div id="inyectRootHomePost"></div>
    <footer>
    <input type="image" src="images/clima.png" id="topicChange" class="imageFooter">
    <a href='#/viewProfile'>
      <button class="buttomimageFooter">
      <img class="imageFooter" id="home" src="images/home.png" alt="home" /> </button>
    </a>
    <a href='#/'>
      <button class="buttomimageFooter">
      <img class="imageFooter" id="logOut" src="images/log-out.png" alt="logOut"/> </button>
    </a>
  </footer>
  `;
	divHome.innerHTML = formHome;
	return divHome;
};


export const interpHomePost = async () => {
  const divHomePost = document.querySelector('#inyectRootHomePost');
	snapshot((callback)=> {
   divHomePost.innerHTML = '';
    callback.forEach((doc) => {
      const post = doc.data();
  

	const formHomePost =//html
		`
    <div id="rootHomePost" class="containerRootHome">
        <section>
        <div class="containerPostPublicado">
          <div class="tittlePost">
            <img class="" src="./images/perfil.png" alt="perfil" height=auto width="40"/>
            <h3 class="textTittle">Usuario</h3>
          </div>
          <textarea type="text" id="forPosting" class="boxtxt" rows="5">${post.Content}</textarea>
          <div class="containerlike" id="Post">
            <input type="image" src="images/heart.png" class="LIKE" />
          </div>
        </div>
      </section>
  
    </div>
  `;
  divHomePost.innerHTML += formHomePost;
 
  
  });

})

  };
