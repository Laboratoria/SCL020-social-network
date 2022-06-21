import { creatingNewUser } from "../firebase-doc/authentication.js";
import { changeRoute } from "../lib/router.js";
export const registration = () => {
  const register = //html
  `
    <div class="secondView">
      <div class = "logo">
        <img src = "Social-Images/logoNuevo.png">
      </div>
      <form name = 'registrationForm' type = "submit" id = "registrationForm">
      <input class="userName" type="text" placeholder="Escribe tu nombre completo">
      <input class="userEmail" type="text" placeholder="Escribe tu correo">
      <input class="createPassword" type="password" placeholder="Crea tu contraseña">
      <button class="userRegistration" type="submit"><strong>REGISTRARME</strong></button>
      </form>
      <p class= "pregunta"><strong>¿Ya tienes cuenta?</strong></p>
      <a href="#/home" class = "registerlogIn"><strong>INICIAR SESIÓN</strong></a>
      
    </div>
    `;
    const container = document.createElement('div');
    container.innerHTML = register;
    container.className = 'registerViewContainer';
    const registrationForm = container.querySelector('#registrationForm')
    

    registrationForm.addEventListener('submit', async (e) => {
      e.preventDefault();
    const userName = container.querySelector('.userName').value;
    const userEmail = container.querySelector('.userEmail').value;
    const password = container.querySelector('.createPassword').value;

      try {
        const createdUser = await creatingNewUser(userName, userEmail, password);
        
        //localStorage.setItem('userName', userName);
        localStorage.setItem('userUid', createdUser.uid);
        registrationForm.reset();
        changeRoute('#/wall');
      } catch (error) {
        if (error === 'auth/invalid-email') {
          alert('Por favor, ingresa un correo válido');
        } else if (error === 'auth/missing-email') {
          alert('Por favor, ingresa un correo');
        } else if (error === 'auth/internal-error') {
          alert('Debes llenar todos los campos');
        } else if (error === 'auth/email-already-in-use') {
          alert('Usuario ya registrado, intenta con otro correo');
        } 
      }
    })
    
  return container;
};
