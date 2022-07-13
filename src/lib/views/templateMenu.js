import { loginWithGoogle } from "../firebase/auth";

//Función que contiene vista del Menu
export const menuLogin = () => {
    const divMenuLogin = document.createElement("div");
    const viewMenuLogin =  `<div class="containerIndex">
    <div class="tips">
      <img src="images/doformitoTriste.png" width="329px" height="221px">
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
    </div>`;
    divMenuLogin.innerHTML = viewMenuLogin;
  return divMenuLogin;
};

const logIn = divLogin.querySelector("#logIn")
logIn.addEventListener("click", async() => {


}
)