import { userLogin, userRedirect, usersGoogle } from "../../firebase/auth.js";
import { auth, getRedirectResult } from "../../firebase/init.js";
import { changeRouter } from "../router.js";

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
            <button class = "forgot">¿Has olvidado tu contraseña?</button>
            <button id = "btngoogle" class = "btngoogle"><img src= "imagenes/logogoogle.png" class= "logogoogle">Iniciar Sesión</button>

        </div>`
        divLogin.innerHTML = viewLogin;

        const btn = divLogin.querySelector(".btnContinuar")
        btn.addEventListener("click", async (e) => {
            e.preventDefault();
            const emailUser = divLogin.querySelector("#email").value;
            const pswUser = divLogin.querySelector("#contraseña").value;
            // const masking = psw.replace(g, '.') ;
            // userLogin(email, psw);
            const loginUser = await userLogin(emailUser,pswUser);

             if (loginUser){
             changeRouter('#/wall')
            }
            else {
              console.log("no se ha encontrado Usuario")
            }
            //dado que userLogin devuelve una promesa, a esta promesa  aplicarle .then y dentro del then, navegar
        })

        const btnGoogle = divLogin.querySelector("#btngoogle")
         btnGoogle.addEventListener("click", async () => {
          const loginGoogle = await usersGoogle();

          if (loginGoogle){
            changeRouter('#/wall')
           }
          else {
             console.log("Problema de conexion con google")
           }
           
       });
          //const prueba =  getRedirectResult(auth)
      const redirectGoogle = async() =>{
      const redirectUser = await getRedirectResult(auth);
        
            if (redirectUser){
            changeRouter('#/wall')
           }
       
      };
       redirectGoogle();
          return divLogin;

 }; 
 


