import { userLogin, usersGoogle } from "../../firebase/auth.js";
import { changeRouter } from "../router.js";
//Funcion para crear el template en el que los usuarios se loguean
export const login = () => {
    const divLogin = document.createElement("div")
    const viewLogin =
        `<div class="container-login">

            <h1>Gluten Free Food</h1>
            <form class="form">
            <input type="email" id="email" class= "email"  placeholder="E-mail"  required/>
            <input type="password" id="contraseña" class= "contraseña"  placeholder="Contraseña" required />
            <button type="submit" class = "btnContinuar">Continuar</></button>
            </form>
            <button class = "btnregister"><a href='#/register'>Registrar</a></button>
            <button id = "btngoogle" class = "btngoogle"><img src= "imagenes/logogoogle.png" class= "logogoogle">Iniciar Sesión</button>

        </div>`
    divLogin.innerHTML = viewLogin;
    //Funcion para tomar los valores ingresados por los usuarios
    const btn = divLogin.querySelector(".btnContinuar")
    btn.addEventListener("click", async(e) => {
        e.preventDefault();
        const emailUser = divLogin.querySelector("#email").value;
        const pswUser = divLogin.querySelector("#contraseña").value;
        
        const loginUser = await userLogin(emailUser, pswUser);

        if (loginUser) {
            changeRouter('#/wall')
        } else {
            console.log("no se ha encontrado Usuario")
        }
        
    })

    const btnGoogle = divLogin.querySelector("#btngoogle")
    btnGoogle.addEventListener("click", async() => {
        const loginGoogle = usersGoogle();

        if (loginGoogle) {
            changeRouter('#/wall')
        } else {
            console.log("Problema de conexion con google")
        }

    });

    return divLogin;

};