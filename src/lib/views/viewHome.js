//Este archivo es para la vista principal de la app
export const interpHome = () => {
	const divHome = document.createElement('div');

	const formHome = //html
  `
    <div id="rootHome" class="containerHome">
      <section class="textBox">
        <div class="textInput">
        <input type="text" id="postTittle" class="boxtxt" placeholder="Título">
        <p></p>
        <textarea type="text" id="postText" class="boxtxt" placeholder="Escribe tu publicación aquí..."></textarea>
        </div>
        <a href=''>
        <button id="Post" class="post">Publicar</button>
        </a>
      </section> 
      <div class="textBox">
        <input type="text" id="forPosting"class="boxtxt">
        <a href='' id="Post">
        <input type="image" src="images/heart.png" class="LIKE" />

        </a>
      </div>
    </div>
  `;
	divHome.innerHTML = formHome;
	return divHome;
};
