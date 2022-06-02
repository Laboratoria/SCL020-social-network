export const registration = () => {
    const register = `
    <div class="secondView">
      <div class = "logo">
        <img src = "Social-Images/logoescuela.webp">
      </div>
      <input class="userName" type="text" placeholder="Escribe tu nombre completo">
      <input class="userEmail" type="text" placeholder="Escribe tu correo electrónico">
      <input class="createPassword" type="text" placeholder="Crea tu contraseña">
      <button class="userRegistration" type="submit">REGISTRARME</button>
      <p>¿Ya tienes cuenta?</p>
      <a href="#/home">Iniciar Sesión</a>
    </div>
    `
    return register;
}