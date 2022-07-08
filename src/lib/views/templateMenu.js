import { login } from "./templateLogin.js";
//Función que contiene vista del Menu
export const menu = () => {
    const menuScreen = `<div><section class="containerIndex">
    <div class="tips">
      <img src="images/deformitoTip.png" width="200px" height="200px">
      Tips Adulto Independiente
    </div>
    
      <div class="comunity">
      Únete a la comunidad y 
      conoce todos los secretos
      para vivir sol@ antes de los 30
      (づ￣ 3￣)づ
    </div>
    <button class="logIn"><a href="templateLogin.js">  
     Inicia sesión 
      (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧  
    </button></a>
    <section class="signUp"><p>
      ¿No tienes cuenta aún? Regístrate <a href="https://img.freepik.com/vector-gratis/pagina-error-404-distorsion_23-2148105404.jpg?w=2000">aquí.</a>  
    </p>
    <img src="images/deformitoTierno.png" width="250px" height="200px" ></section>
    </div></section>`;
    return menuScreen;
};