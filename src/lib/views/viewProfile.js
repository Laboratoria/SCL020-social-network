import { deletePost, snapshotProfile, updatePost } from '../../firebase/firestore.js';

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
     <div id="edit-post"></div>
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
			const formHomePost =//html
				`
        <div id="rootProfilePost" class="containerProfileUser" data-postid="${doc.id}">
        <div class="containerPostProfile">
          <div class="tittlePostProfile">
            <img class="" src="./images/perfil.png" alt="perfil" height=auto width="40"/>
            <h3 class="textTittleProfile">${post.Autor}</h3>
          </div>
          <p type="text" id="forTitlePosting" class="boxtxtTitle" rows="5">${post.Title}</p>
          <p type="text" id="forPostingProfile" class="boxtxtProfile" rows="5">${post.Content}</p>
          <div class="containerlikeProfile" id="PostProfile" >
            <input data-postid="${doc.id}" type="image" id="btnEditPostProfile" class="btnEditProfile" src="images/lapizModoClaro.png" />
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
    const editModalContainer = document.querySelector('#edit-modal-container');
    const editOptions = document.querySelectorAll('.btnEditProfile');
    editOptions.forEach((btn) => {
      btn.addEventListener('click', (event) => {
		  alert("1")
        event.preventDefault();
        const editForm = document.querySelector('#edit-form');
        editModalContainer.classList.remove('hidden-component');
        const postId = event.target.getAttribute('data-postid');
        console.log(postId);     
        editForm.addEventListener('submit', (e) => {
          alert("3")
          e.preventDefault();
          const postTitle = editForm.titleEdit.value;
          const postContent = editForm.contentEdit.value;
          updatePost(postId, postTitle, postContent);
        });
      });
      const closeEdit = document.querySelector('.closeEdit');
      closeEdit.addEventListener('click', () => {
        editModalContainer.classList.add('hidden-component');
      });
    });

		// console.log('Mi Boton:::', btnDeletePost);
	});
};


export const modalEditAction = () =>{
  const editContainer = document.querySelector('#edit-post'); //llamo a el btn por su id para abrir el modal
  editContainer.innerHTML = editModal(); //paso la funcion del modal(estructura del modal)
};
export const editModal = () => {
  const editView = `
  <div id="edit-modal-container" class="modale hidden-component">
    <div class="modalEdit-container">
    <span class="closeEdit">&times</span>
      <div class="modalEdit-content">
        <form action="" id="edit-form">
        <p class="editp">Editar publicacion<p>
        <input id="title-post-edit" name="titleEdit" placeholder="Coloca un titulo">
        <input id="content-post-edit" name="contentEdit" placeholder="Deja un comentario">
        <button id="accept">Confirmar</button>
      </form>
      </div>
    </div>  
  </div>`;
  return editView;
};