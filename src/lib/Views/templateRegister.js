export const registration = () => {
  const register = `
    <div class="secondView">
      <div class = "logo">
        <img src = "Social-Images/logoescuela.webp">
      </div>
      <input class="userName" type="text" placeholder="Escribe tu nombre completo">
      <input class="userEmail" type="text" placeholder="Escribe tu correo electrónico">
      <input class="createPassword" type="text" placeholder="Crea tu contraseña">
      <button class="userRegistration" type="submit"><strong>REGISTRARME</strong></button>
      <p class= "pregunta"><strong>¿Ya tienes cuenta?</strong></p>
      <a href="#/home"><strong>INICIAR SESIÓN</strong></a>
    </div>
    `;
    const container = document.createElement('div');
    container.innerHTML= register;
  return container;
};
