//Este archivo es para la vista principal de la app

import { deletePost, snapshot } from '../../firebase/firestore.js';
import { signOutSession } from '../../firebase/auth.js';
import { interpPostProfile } from './viewProfile.js';

export const interpHome = () => {
	const divHome = document.createElement('div');
	divHome.className = 'homeContainer';
	const formHome = /*html*/ `
    <div id="rootHome" class="containerRootHome">
      <section class="containerHome">
        <form id="form_post" class="textBoxContainer">
          <input type="text" name="postTitle" id="postTittle" class="boxtxt" placeholder="Título">
          <textarea type="text" name="postText" id="postText" class="boxtxt" rows="5" placeholder="Escribe tu publicación aquí..."></textarea>
          <div class="containerPublicar">
            <button id="Post" class="post">Publicar</button>
          </div>
        </form>
      </section>
      <div id="inyectRootHomePost"></div>
    </div>
    <footer>
      <button id="topicChange">
        <img src="images/clima.png" class="imageFooter">
      </button>
      <a href='#/viewHome'>
        <img class="imageFooter" id="home" src="images/home.png" alt="home" />
      </a>
      <a href='#/'>
        <img class="imageFooter" id="logOut" src="images/log-out.png" alt="logOut"/>
      </a>
    </footer>
  `;
	divHome.innerHTML = formHome;
	return divHome;
};

export const interpHomePost = async () => {
	const divHomePost = document.querySelector('#inyectRootHomePost');
	snapshot((post) => {
		divHomePost.innerHTML = '';
		post.forEach((doc) => {
			const post = doc.data();
			console.log(post);
			// console.log('Prueba Marianny', doc.id);
			const formHomePost =
				//html
				`
    <div id="rootHomePost" class="containerRootHomePost" data-postid="${doc.id}">
      <div class="containerPostPublicado">
        <div class="tittlePost">
          <img class="" src="./images/perfil.png" alt="perfil" height=auto width="40"/>
          <h3 class="textTittle">${post.Autor}</h3>
        </div>
        <p type="text" id="forPosting" class="boxtxt" rows="5">${post.Content}</p>
        <div class="containerlike" id="Post" >
          <span id="${doc.id}" class="count"></span>
          <input type="image" id="${doc.id}" src="images/heart.png" class="LIKE" />
        </div>
      </div>
    </div>
  `;

			divHomePost.innerHTML += formHomePost;
		});
	});
};

export const functionDataProfile = () => {
	const btnProfile = document.querySelector('#home');
	btnProfile.addEventListener('click', (e) => {
		e.preventDefault();
		window.location.href = '#/viewProfile';
	});
};

export const functionSwitch = () => {
	const btnSwitch = document.querySelector('#topicChange');
	btnSwitch.addEventListener('click', (e) => {
		e.preventDefault();
		document.body.classList.toggle('dark');
	});
};

export const logOutFunction = () => {
	const logOut = document.querySelector('#logOut');
	logOut.addEventListener('click', (e) => {
		e.preventDefault();
		signOutSession();
		window.location.href = '#/';
	});
};
