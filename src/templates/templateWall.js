//import {savePublication} from './firebase-doc/firebase.js';
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
    const publication = container.querySelector('#publication');
    const publishButton = container.querySelector('#publish');
    /*const publicating = () =>{
    publishButton.addEventListener('submit', savePublication(publication.value)) ;

    return publicating
  }*/
  
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



