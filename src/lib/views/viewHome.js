//Este archivo es para la vista principal de la app
export const interpHome = () => {
	const divHome = document.createElement('div');

	const formHome = //html
  `
    <div id="rootHome" class="containerHome">
      <section class="textBox">
        <div class="textInput">
        <input type="text" id="postTittle" class="boxtxt">
        <input type="text" id="postText" class="boxtxt"> 
        </div>
        <a href=''>
        <button id="Post" class="post">Publicar</button>
        </a>
      </section> 
      <div class="textBox">
        <input type="text" id="forPosting"class="boxtxt">
        <a href=''>
        <button id="Post" class="post">Me Gusta</button>
        </a>
      </div>
      
    </div>
  `;
	divHome.innerHTML = formHome;
	return divHome;
};
