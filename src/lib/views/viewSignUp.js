//Este archivo es para registrarse

import { signCreate } from "../../firebase/auth.js";


export const interpSignUp = () => {
	const divSignUp = document.createElement('div');
	const formSignUp = //html
		`
      <div id="rootSingnUp" class="containerSignUp">
        <div class="containerButtonBack">
          <a href="#/" id="back" class="buttonBack">Atrás</a>
        </div>
        <form id="form_register" action="" class="containerFormSignUp">
            <h1 class="tittleRegistroUser">Registro de Usuario</h1>
            <input type="email" name="mail" placeholder="Correo electrónico" autofocus class="campotxt" autocomplete="off" required>
            <input type="text" name="pass" placeholder="Contraseña" autofocus class="campotxt" autocomplete="off" required minlength="6" maxlength="8">
            <button id="next" class="next">Siguiente</button>
        </form>
      </div>
    `;

	divSignUp.innerHTML = formSignUp;
	return divSignUp;
};

export const createUserEmail = () => {
	const formRegister = document.querySelector('#form_register');
	formRegister.addEventListener("submit", (e) => {
		e.preventDefault();
		const email = formRegister.mail.value;   // asi accedo a los valores del formulario por su nombre
		const password = formRegister.pass.value;
		signCreate(email, password);
	});
};


