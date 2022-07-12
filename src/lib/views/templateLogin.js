
import { async } from "regenerator-runtime";
import { changeRoutes } from "../lib/router.js";
/*
export const login = () => {
  const screenLogin = document.createElement("div")
  const viewLogin =
  ` <div class="container-log">
  <h1> Adulto Independiente</h1>
  <button id="btngoogle" id="btngoogle">Inicia Sesión</button>
  </div>
  `
  screenLogin.innerHTML= viewLogin;

  const btnGoogle = screenLogin.querySelector("#btngoogle")
  btnGoogle.addEventListener("click", async() => {
    const loginWithGoogle = usersGoogle();
    if(loginWithGoogle) {
      changeRoutes('#/feed')
    } else {
      changeRoutes('#/error')
    }
  });

 return screenLogin;

};*/






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
