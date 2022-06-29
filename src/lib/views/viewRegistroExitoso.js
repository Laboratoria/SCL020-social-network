//Este archivo es mostrar template de registro exitoso

export const interpRegExitoso = () => {
	const regExitoso = document.createElement('div');
	const formRegExitoso =
		//html
		`
      <div id="regExitoso" class="containerRegExitoso">
        <p class="regExitoso">Registro de Usuario Creado con Exito</p>
        <a href="#/" id="inicio" class="buttonInicio">Inicio</a>
      </div>
    `;

	regExitoso.innerHTML = formRegExitoso;

	return regExitoso;
};
