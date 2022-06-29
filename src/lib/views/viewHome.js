//Este archivo es para la vista principal de la app
export const interpHome = () => {
	const divHome = document.createElement('div');

	const formHome = //html
  `
    <div id="rootHome">
      <div>
        <input type="text" id="tituloPost" class="campotxt">
        <input type="text" id="posteotexto" class="campotxt"> 
        <a href=''>
        <button id="Post" class="NEXT">Publicar</button>
        </a>
      </div> 
      <div>
        <input type="text" id="loPosteado"class="campotxt">
        <a href=''>
        <button id="Post" class="NEXT">Me Gusta</button>
        </a>
      </div>
      
    </div>
  `;
	divHome.innerHTML = formHome;
	return divHome;
};
