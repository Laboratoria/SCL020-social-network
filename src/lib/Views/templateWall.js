export const wall = () => {
  const wallP = //html
  `

<div class="wallView">
      <header>
          <img src = "Social-Images/logo.jpeg">
          <a href="#/bullyingForm" id="bForm">Te Escuchamos</a>
          <a href="#/home" id="salir"><strong>Salir</strong></a>
      </header>
     <textarea placeholder="Ingrese su publicación" cols="40" rows="5" id="userComment"></textarea>
     <button class="publicar" id="publicar" type="submit"><strong>PUBLICAR</strong></button>
     <div class= "wall" id="Post">

     </div>
      </div>
      `;
    const container = document.createElement('div');
    container.innerHTML= wallP;
  return container;
};
