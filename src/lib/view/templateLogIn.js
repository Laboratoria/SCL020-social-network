import { login } from "../../firebase/auth.js";
import { googleLogin } from "../../firebase/auth.js"


export const logInTemplate = () => {
    const divLogIn = document.createElement('div')
    divLogIn.setAttribute('id', 'newDivLogIn')
    const viewLogIn = `
    <div class="container">
        <div>
            <img src="img/FindYourCake.png" alt="FindYourCake" id="logoTipo"/>
        </div>
        <article class="messageInit">
            <p>Bienvenidos a Find Your cake, donde podrás</p>
            <p>buscar y publicar tus postres y pasteles que</p>
            <p>se adaptan a todas las necesidades.</p>
            <p>#sin azucar #vegan</p>
            <p>#singluten #sinlactosa</p>
        </article>
        <form class="login">
            <input autocomplete="off" type="email" name="email" placeholder="Correo electrónico" id="email" >
            <input autocomplete="off" type="password" name="pass" placeholder="Contraseña" id="password">
        </form>
        <div class= "divButtons">
            <a class="buttons" id="login">Inicia Sesión</a>
        </div>
        <div id="InitGoogle">
            <img id="logInGoogle" src="img/SignUpGoogle.png" alt="SignUpGoogle" width=200px  height="35px" />
            <button id="logInGoogle2">GOOGLE</button>
        </div>
        <div class="notAcount">
            <p>No tienes cuenta?</p>
        </div>
        <div id="msgRegistrate">
            <a href="#/createNewUser"<button>Regístrate</button></a>
        </div>
    </div>
    `
    divLogIn.innerHTML = viewLogIn;
    const btn = divLogIn.querySelector("#login")
    btn.addEventListener("click", () => {
        const email = divLogIn.querySelector("#email").value;
        const password = divLogIn.querySelector("#password").value;

        login(email, password);
    })

    const btnGoogle = divLogIn.querySelector("#logInGoogle2")
    btnGoogle.addEventListener("click", () => {
        googleLogin();
    })

    return divLogIn;
};