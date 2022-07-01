import { userRegister } from "../../firebase/auth.js";

export const register = () => {
    const divRegister = document.createElement("div")
    const viewRegister =
        `<div class = container-register>
           
            <h1>Registrate</h1>
            <img src= "imagenes/logo.png" class= "logo"></img>
            <input type="text" id="email" class= "email" required placeholder="E-mail">
            <input type="password" id="contraseña" class= "contraseña"  placeholder="Contraseña" required />
            <button class = "btn">Continuar</button>
           
            
        </div>`

    divRegister.innerHTML = viewRegister;

    const btn = divRegister.querySelector(".btn")
    btn.addEventListener("click", () => {
        const email = divRegister.querySelector("#email").value;
        console.log(email);
        const psw = divRegister.querySelector("#contraseña").value;
        // const masking = psw.replace(g, '.') ;


        userRegister(email, psw);

    })

    return divRegister;

};