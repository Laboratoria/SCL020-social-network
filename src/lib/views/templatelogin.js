import { usersGoogle, userLogin } from "../../firebase/auth.js";

export const login = () => {
    const divLogin = document.createElement("div")
    const viewLogin =
        `<div class="container-login">
           
            <h1>Gluten Free Food</h1>
            <form>
            <input type="email" id="email" class= "email"  placeholder="E-mail"  required/>
            <input type="password" id="contraseña" class= "contraseña"  placeholder="Contraseña" required />
            <button type="submit" class = "btnContinuar"><a href='#/wall'>Continuar</a></button>
            </form>
            <button class = "btnregister"><a href='#/register'>Registrar</a></button>
            <button class = "forgot">¿Has olvidado tu contraseña?</button>
            <button id = "btngoogle" class = "btngoogle"><img src= "imagenes/logogoogle.png" class= "logogoogle"></img><a href='#/wall'>Iniciar Sesión</a></button>
            
        </div>`
        divLogin.innerHTML = viewLogin;

        const btn = divLogin.querySelector(".btnContinuar")
        btn.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = divLogin.querySelector("#email").value;
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
    
