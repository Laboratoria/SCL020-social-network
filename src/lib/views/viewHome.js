//Este archivo es para la vista principal de la app
export const interpHome = () => {
	const divHome = document.createElement('div');

	const formHome =
		//html
		`
    <div id="rootHome" class="containerRootHome">
      <section class="containerHome">
        <div class="textBoxContainer">
          <input type="text" id="postTittle" class="boxtxt" placeholder="Título">
          <p></p>
          <textarea type="text" id="postText" class="boxtxt" rows="5" placeholder="Escribe tu publicación aquí..."></textarea>
         <div class="containerPublicar">
          <button id="Post" class="post">Publicar</button>
          </div>
        </div> 
        <div class="containerPostPublicado">
          <div class="tittlePost">
            <img class="" src="./images/perfil.png" alt="perfil" height=auto width="40"/>
            <h3 class="textTittle">Usuario</h3>
          </div>
          <textarea type="text" id="forPosting" class="boxtxt" rows="5">Aqui va el Post</textarea>
          <div class="containerlike" id="Post">
            <input type="image" src="images/heart.png" class="LIKE" />
          </div>
        </div>
      </section>
      <footer>
        <input type="image" src="images/clima.png" id="topicChange" class="imageFooter">     
        <input type="image" src="images/home.png" id="home" class="imageFooter">      
        <input type="image" src="images/log-out.png" id="logOut" class="imageFooter"> 
      </footer>
    </div>
  `;
	divHome.innerHTML = formHome;
	return divHome;
};
