//Este archivo es para registrarse
export const interp404 = () => {
	const div404 = document.createElement('div');
	const form404 =
		//html
		`
      <div id="404" class="container404">
        <p class="notExist">¡Vaya! La página que buscas no existe...</p>        
        <a href="#/" id="inicio" class="buttonSingUp">Inicio</a>
      </div>
    `;

	div404.innerHTML = form404;

	return div404;
};
