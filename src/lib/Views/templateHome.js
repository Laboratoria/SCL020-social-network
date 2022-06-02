export const home = () => {
   const viewHome = `
    <div class="firstView">
    <div class = "logo">
      <img src = "Social-Images/logoescuela.webp">
    </div>
    <input class="email" type="text" placeholder="Escribe tu correo">
    <input class="password" type="text" placeholder="Escribe tu contraseña">
    <a href="#/wall" class="loginButton">Iniciar Sesión</a>
    <p class="o">o</p>
    <a href="#/loginGoogle" class="loginGoogle">Iniciar Sesión con Google</a>
    <p class="registerChoice">¿No tienes una cuenta?</p>
    <a href="#/register" class="register">REGISTRATE</a>
    </div>
    `
    return viewHome;
}