export const home = () => {
  const viewHome = // html
  `
    <div class="firstView">
    <div class = "logo">
      <img src = "Social-Images/logoescuela.webp">
    </div>
    <input class="email" type="text" placeholder="Escribe tu correo">
    <input class="password" type="text" placeholder="Escribe tu contraseña">
    <a href="#/wall" class="loginButton"><strong>INICIAR SESIÓN</strong></a>
    <p class="o"><strong>o</strong></p>
    <a href="#/loginGoogle" class="loginGoogle"><strong>INICIAR SESIÓN CON GOOGLE</strong></a>
    <p class="registerChoice"><strong>¿No tienes una cuenta?</strong></p>
    <a href="#/register" class="register"><strong>REGISTRATE</strong></a>
    </div>
    `
  ;

const container = document.createElement('div');
container.innerHTML= viewHome;
  return container;
};

