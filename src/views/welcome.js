import {initRouter, next} from "../router/router.js"

const Welcome = () => {

    const template = //html
    `   <header>
    <img src= "./img/logofon.png" alt="logo" class="logo1">
    </header>
    <h1>Te damos la bienvenida a la primera red social de creadores y fans.
    </h1>
    <section>
    <div class="btn1">
    <button id="start">Iniciar Sesión</button>
    </div>
    <div class="btn2">
    <button>Autenticar con Google</button>
    </div>
    </section>
    <h2>¿No tienes una cuenta? <a href="#" id="reg">Regístrate</a> 
    </h2>
    `
    /*const container = document.getElementById("main-page").innerHTML=template;*/
    const container = document.createElement('div')
    container.innerHTML = template

   let btn = container.querySelector("#start");
    btn.addEventListener('click', (e)=>{
    next("/login")
})
let registro = container.querySelector("#reg");
registro.addEventListener('click', (e)=>{
    e.preventDefault()

next("/login")
})
    /* function start(){
    window.location = "/login";
    if (btn) {
    btn.addEventListener("click", start);
    }*/

    return container
      
    }
   
 export default Welcome