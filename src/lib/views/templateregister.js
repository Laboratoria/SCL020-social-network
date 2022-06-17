import { userRegister } from "../../firebase/auth.js";

export const register = () => {
    const divRegister = document.createElement("div")
    const viewRegister =
        `<div class="register">
           
            <h1>Gluten Free Food</h1>
           <input type="text" id="email" required placeholder="E-mail">
           <input type="text" id="contraseña" required placeholder="Contraseña">
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