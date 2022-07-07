//Este archivo es para la vista de tu perfil
// import { deletePost, snapshot } from '../../firebase/firestore.js';

export const interpProfile = () => {
	const divProfile = document.createElement('div');
	const formProfile = /*html*/ `
    <div class="containerRootProfile">
      <header class="containerTittle">
        <h1 class="title_page1">SESHATLAB</h1> 
      </header>
      <section class="sectionProfile">
        <img class="" src="./images/perfil.png" alt="perfil"/>
        <div class="containerProfile">
          <h1 class="userProfile">Usuario</h1>
          <h3 class="nameProfile">Nombre y Apellido</h3>
        </div>
      </section>
      <div class="containerPostPublicado">
          <div class="tittlePost">
            <img class="" src="./images/perfil.png" alt="perfil" height=auto width="40"/>
            <h3 class="textTittle">Usuario</h3>
          </div>
          <textarea type="text" id="forPosting" class="boxtxt" rows="5">Aqui va el Post</textarea>
          <div class="containerlike" id="Post">
            
          <input type="image" id="btnEditPost" class="btnEdit" src="images/lapizModoClaro.png" />
          <input type="image" id="" class="btnDelete" src="images/BasuraModoOscuro.png" />
          <span id="" class="count">0</span>
          <input type="image" id="" src="images/heart.png" class="LIKE" />


          </div>
      </div>
      <footer>
        <input type="image" src="images/clima.png" id="topicChange" class="imageFooter">     
        <a href='#/viewHome'>
          <button class="buttomimageFooter">
          <img class="imageFooter" id="home" src="images/home.png" alt="home" /> </button>
        </a>
        <a href='#/'>
          <button class="buttomimageFooter">
          <img class="imageFooter" id="logOut" src="images/log-out.png" alt="logOut"/> </button>
        </a>
      </footer>
      </div>
    `;
	divProfile.innerHTML = formProfile;

	return divProfile;
};
