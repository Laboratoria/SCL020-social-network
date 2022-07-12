import { userRegister } from "../../firebase/auth.js";
//Funcion para crear el template en el que los usuarios se registran
export const register = () => {
    
    const viewRegister =
        `<div class = container-register>
           
            <h1>Registrate</h1>
            <img src= "imagenes/logo.png" class= "logo"></img>
            <input type="text" id="userName" class= "userName" required placeholder="Nombre de Usuario">
            <input type="text" id="email" class= "email" required placeholder="E-mail">
            <input type="password" id="contraseña" class= "contraseña"  placeholder="Contraseña" required />
            <button class= "btn" id= "btn"><a href='#/login'>¡Continuar!</a></button>
           
           
            
        </div>`
    const divRegister = document.createElement("div")
     divRegister.innerHTML = viewRegister;
  //Funcion para tomar los valores ingresados por los usuarios
    const btn = divRegister.querySelector("#btn")
    btn.addEventListener("click", () => {
        const userName = divRegister.querySelector("#userName").value;
        const email = divRegister.querySelector("#email").value;
        const psw = divRegister.querySelector("#contraseña").value;


        userRegister(userName, email, psw);

    })

    return divRegister;

};