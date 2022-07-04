//Templates de las diferentes pantallas

//Funcion que crea el template de la pantalla Login
export const loginScreen = () => {
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
return loginScreen;
  //console.log('Hola mundo!');
};

