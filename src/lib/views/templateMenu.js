import { loginWithGoogle } from "../firebase/auth.js";
import { changeRoutes } from "../router.js";
//Función que contiene vista del Menu
export const menuLogin = () => {
    const divMenuLogin = document.createElement("div");
    const viewMenuLogin =  `<div class="containerIndex">
    <div class="tips">
      <img src="images/deformitoTip.png" width="200px" height="200px">
      Tips Adulto Independiente
    </div>
      <div class="comunity">
      Únete a la comunidad y 
      conoce todos los secretos
      para vivir sol@ antes de los 30
    </div>
    <a href=""><button class="logIn"> 
     Inicia sesión con google

    </button></a>
    <section class="signUp"><p>
      ¿No tienes cuenta aún? Regístrate <a href=/SCL020-social-network/src/images/error.jpg>aquí.</a>  
    </p>
    <img src="images/deformitoTierno.png" width="160px" height="160px" ></section>
    </div>`
    divMenuLogin.innerHTML = viewMenuLogin;
  


// const logIn = divMenuLogin.querySelector("#logIn");

// logIn.addEventListener("click", async() => {
// const loginGoogle = loginWithGoogle();

// if(loginGoogle) {
//   changeRoutes('#/feed');
// } else {
//   console.log("el gatito tuyo te perdió");
// }
// });
return divMenuLogin;

}