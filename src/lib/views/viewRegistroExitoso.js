//Este archivo es mostrar template de registro exitoso

export const interpRegExitoso = () => {
	const regExitoso = document.createElement('div');
	const formRegExitoso =
		//html
		`
      <div id="regExitoso" class="container404">
        <p class="notExist">Registro de Usuario Creado con Exito</p>
        <a href="#/" id="inicio" class="buttonSingUp">Inicio</a>
      </div>
    `;

	regExitoso.innerHTML = formRegExitoso;

	return regExitoso;
};
