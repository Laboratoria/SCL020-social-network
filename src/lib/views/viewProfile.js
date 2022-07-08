import { deletePost, snapshotProfile } from '../../firebase/firestore.js';

//Este archivo es para la vista de tu perfil
export const interpProfile = () => {
	const divProfile = document.createElement('div');
	divProfile.className = 'profileContainer';
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
     <div id="containerPostPerfilUser"></div>
    </div>
    <footer>
      <input type="image" src="images/clima.png" id="topicChange" class="imageFooter">     
      <a href='#/viewHome'>
        <img class="imageFooter" id="home" src="images/home.png" alt="home" />
      </a>
      <a href='#/'>
        <img class="imageFooter" id="logOut" src="images/log-out.png" alt="logOut"/>
      </a>
    </footer>
  `;
	divProfile.innerHTML = formProfile;

	return divProfile;
};

export const interpPostProfile = async () => {
	const divProfilePost = document.querySelector('#containerPostPerfilUser');
	snapshotProfile((postProfile) => {
		divProfilePost.innerHTML = '';
		postProfile.forEach((doc) => {
			const post = doc.data();
			console.log(post.Autor);
			// console.log('Prueba Marianny', doc.id);
			const formHomePost =
				//html
				`
        <div id="rootProfilePost" class="containerProfileUser" data-postid="${doc.id}">
        <div class="containerPostProfile">
          <div class="tittlePostProfile">
            <img class="" src="./images/perfil.png" alt="perfil" height=auto width="40"/>
            <h3 class="textTittleProfile">${post.Autor}</h3>
          </div>
          <textarea type="text" id="forPostingProfile" class="boxtxtProfile" rows="5">${post.Content}</textarea>
          <div class="containerlikeProfile" id="PostProfile" >
            <input type="image" id="btnEditPostProfile" class="btnEditProfile" src="images/lapizModoClaro.png" />
            <input type="image" id="${doc.id}" class="btnDelete" src="images/BasuraModoOscuro.png" />
            <span id="${doc.id}" class="count"></span>
            <input type="image" id="${doc.id}" src="images/heart.png" class="LIKE" />
          </div>
        </div>
      </div>
  `;
			divProfilePost.innerHTML += formHomePost;
		});
		const btnDeletePost = document.querySelectorAll('.btnDelete');
		btnDeletePost.forEach((idIterating) => {
			idIterating.addEventListener('click', (event) => {
				deletePost(event.target.getAttribute('id'));
				// console.log(event.target.getAttribute('id'));
			});
		});
		// console.log('Mi Boton:::', btnDeletePost);
	});
};
