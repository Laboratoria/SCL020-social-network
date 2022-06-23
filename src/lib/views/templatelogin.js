import { usersGoogle, userLogin } from "../../firebase/auth.js";

export const login = () => {
    const divLogin = document.createElement("div")
    const viewLogin =
        `<div class="container-login">
           
            <h1>Gluten Free Food</h1>
            <input type="text" id="email" class= "email"placeholder="E-mail">
            <input type="text" id="contraseña" class= "contraseña" placeholder="Contraseña">
            <button class = "btnContinuar"><a href='#/wall'>Continuar</a></button>
            <button class = "btnregister"><a href='#/register'>Registrar</a></button>
            <button class = "forgot">¿Has olvidado tu contraseña?</button>
            <button id = "btngoogle" class = "btngoogle"><img src= "imagenes/logogoogle.png" class= "logogoogle"></img><a href='#/wall'>Iniciar Sesión</a></button>
            
        </div>`
    divLogin.innerHTML = viewLogin;

    const btn = divLogin.querySelector(".btnContinuar")
    btn.addEventListener("click", () => {
        const email = divLogin.querySelector("#email").value;
        console.log(email);
        const psw = divLogin.querySelector("#contraseña").value;
        // const masking = psw.replace(g, '.') ;


        userLogin(email, psw);

    })
    const btnGoogle = divLogin.querySelector("#btngoogle")
    btnGoogle.addEventListener("click", () => {

        console.log(btnGoogle);
        
        // const masking = psw.replace(g, '.') ;


        usersGoogle();

    })



    return divLogin;
};