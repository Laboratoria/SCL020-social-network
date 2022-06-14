//import {savePublication} from './firebase-doc/firebase.js';

export const wall = () => {
  const wallP = 
  `
<div class="wallView">
      <header>
          <img src = "Social-Images/logo.jpeg">
          <a href="#/bullyingForm" id="bForm">Te Escuchamos</a>
          <a href="#/home" id="salir"><strong>Salir</strong></a>
      </header>
     <textarea placeholder="Ingrese su publicación" cols="40" rows="5" id="publication"></textarea>
     <button class="publish" id="publish" type="submit"><strong>PUBLICAR</strong></button>
     <div class= "wall" id="wall">

     </div>
      </div>
      `;
    const container = document.createElement('div');
    container.innerHTML= wallP;

    const publication = container.querySelector('#publication');
    const publishButton = container.querySelector('#publish');
    console.log(publication);

    /*const publicating = () =>{
    publishButton.addEventListener('submit', savePublication(publication.value)) ;

    return publicating
  }*/

  return container;
};



