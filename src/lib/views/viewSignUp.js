//Este archivo es para registrarse
export const interpSignUp = () => {
	const divSignUp = document.createElement('div');
	const formSignUp =
		//html
		`
      <div id="rootSingnUp" class="containerSignUp">
        <div class="containerButtonBack">
          <a href="#/" id="back" class="buttonBack">Atrás</a>
        </div>
        <form action="" class="containerFormSignUp">
            <h1 class="tittleRegistroUser">Registro de Usuario</h1>
            <input type="email" id="email" placeholder="CORREO ELECTRÓNICO" autofocus class="campotxt" autocomplete="off" required>
            <input type="text" id="password" placeholder="CONTRASEÑA" autofocus class="campotxt" autocomplete="off" required minlength="6" maxlength="8">
            <button id="next" class="next">Siguiente</button>
        </form>
      </div>
    `;
	const siguiente = document.querySelector('#next');
	const email = document.getElementById('email');
	const password = document.querySelector('#password');

	divSignUp.innerHTML = formSignUp;
	// siguiente.addEventListener("submit", (event) =>{
	//   event.preventDefault();
	//   console.log("prueba");
	// })
	return divSignUp;
};
