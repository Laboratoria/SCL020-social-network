import { creatingNewPost, gettingAllPublications } from '../firebase-doc/firestore.js';
import { logOut } from '../firebase-doc/authentication.js';
import { auth } from '../firebase-doc/firebase.js';
import { changeRoute } from '../lib/router.js';

export const wall = () => {
  const wallP = 
  `
<div class="wallView">
      <header>
          <img src = "Social-Images/logoWall.png">
          <a href="#/bullyingForm" id="bForm"><strong>Te Escuchamos</strong></a>
          <button class= "logOutWall" id="logOut"><strong>Cerrar Sesión</strong></button>
      </header>
     <textarea placeholder="Ingrese su publicación" cols="40" rows="5" id="publication"></textarea>
     <button class="publish" id="publish" type="submit"><strong>PUBLICAR</strong></button>
     <div class= "wall" id="wall">

     </div>
      </div>
      `;
    const container = document.createElement('div');
    container.innerHTML = wallP;
    container.className = "wallViewContainer";
    
    const publishButton = container.querySelector('#publish');

    publishButton.addEventListener('click', async () => {
      const commentContainer = container.querySelector('#publication');
      const comment = commentContainer.value;
      try { await creatingNewPost ( comment );
      commentContainer.value = '';
      console.log('prueba')
      return creatingNewPost;
    } catch (error) { return console.log('error')}
    });

    const allPublications = () => {
    publicationsContainer = container.querySelector('#wall');
    const publicationFrame = '';
    publications = doc.Data();
    console.log(doc.Data())
    publications.forEach((doc) => {
      publicationFrame += `
      <div class="post">
        <div class='post-header'>
          <p class='user-info'><img class="user-photo" src="${publications.photo}">
          <span class="user-name">${publications.name} posted: </span> </p>
          <p class="movie-review">${publications.comment}</p>
          <p class="date">${publications.date.toDate().toLocaleString()}</p>
        </div>
        <div class="post-footer">
          <button class="btn-like" data-id="${doc.id}">
          </button>
        </div>
      </div>
      `;

    })
    publicationsContainer.innerHTML = publicationFrame;
    console.log('sí hice mi función chicas!')
    return allPublications;
  }

  
    const buttonLogOut = container.querySelector('#logOut');
    buttonLogOut.addEventListener('click', async () => {
      try { await logOut(auth);
        changeRoute('#/home');
        return logOut;
      } catch (error) {
        return console.log('error')
      }
    });
  
  return container;
};



