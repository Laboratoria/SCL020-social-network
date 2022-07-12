import { changeRoutes } from "../lib/router";
//Funcion que crea el template de la pantalla Login
export const login = () => {
  const screenLogin = `<section>
  <section>
    <img src="" alt="">
  </section>
  <form action="">
  <label for="Correo">
    Correo/Alias: <input type="text">
  </label>
  <label for="Contraseña">
    Contraseña: <input type="text">
  </label>
</form>
  <section>
  <button id="login">
    Inicia Sesión con Google
  </button>
  <p>
    ¿No tienes cuenta aún? Regístrate <a href="">aquí.</a>  
  </p>
  </section>
</section>
`;
  return screenLogin;
  //console.log('Hola mundo!');
};
