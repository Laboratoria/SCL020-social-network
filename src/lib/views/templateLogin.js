
//Funcion que crea el template de la pantalla Login
export const login = () => {
  const divLogin = document.createElement("div");
  const viewLogin =  `<section>
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
`
divLogin.innerHTML = viewLogin;
return divLogin;

  //console.log('Hola mundo!');
};
