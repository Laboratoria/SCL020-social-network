import { logIn } from "../../firebase/auth.js";

export const login = () => {
    const divLogin = document.createElement("div");

    const viewLogin = //html 
    `
        <div class="container-login"> 
            <div class ="sub-container-login">
                <div class="containter-logo-ticket"><img class ="logo-ticket" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-removebg-preview.png?raw=true" alt="logo-ticket"></div>
                <h2>Login to your account</h2>
                <label><input type="text" id="email" required placeholder="email@something.com"></label>
                <label><input type="password" id="password" required placeholder="password"></label>
                <div class="btn-access">
                    <button>google</button>
                    <button>IMDb</button>
                </div> 
                <a href="#/feed"><button class="btn">Login</button></a>
            </div>
        </div>     
    `
    divLogin.innerHTML = viewLogin;
    const btn = divLogin.querySelector(".btn")
    btn.addEventListener("click", () => {
        const email = divLogin.querySelector("#email").value;
        const password = divLogin.querySelector("#password").value;
        logIn(email, password);
    })
    return divLogin;
}
