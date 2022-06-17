import { login } from "../../firebase/auth.js";

export const register = () => {
    const divLogin = document.createElement("div")
    const viewLogin =
        `<div class="login">
           
            <h1>Gluten Free Food</h1>
           <input type="text" id="email" required placeholder="E-mail">
           <input type="text" id="contraseña" required placeholder="Contraseña">
              <button class = "btn">Continuar</button>
            
        </div>`

    divLogin.innerHTML = viewLogin;

    const btn = divLogin.querySelector(".btn")
    btn.addEventListener("click", () => {
        const email = divLogin.querySelector("#email").value;
        console.log(email);
        const psw = divLogin.querySelector("#contraseña").value;
        // const masking = psw.replace(g, '.') ;


        login(email, psw);

    })

    return divLogin;

};