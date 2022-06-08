import { register } from "../../firebase/auth.js";
//import { app } from "../../firebase/init.js";
export const signUp = () => {
    const divSignUp = document.createElement("div");

    const viewSignUp = //html
    `
        <div class="container-signUp">
            <div class ="sub-container-signUp">
                <div class="container-s-logo-ticket"><img class="s-logo-ticket" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-tickets.png?raw=true" alt="logo-ticket"></div>
                <h2>Create your account</h2>
                <label><input type="text" id="user" required placeholder="User Name"></label>
                <label><input type="email" id="email" required placeholder="email@something.com"></label>
                <label><input type="password" id="password" required placeholder="password"></label>
                <button class="btn-create">Create Account</button>
                <div class="btn-access">
                    <button>google</button>
                    <button>IMDb</button>
                </div>
                <div class="container-btn">
                    <a href="#/welcome"><button>Confirm</button></a>
                    <a href=""><button>Cancel</button></a>
                </div>
            </div>
        </div>            
    `
    divSignUp.innerHTML = viewSignUp;
    const btn = divSignUp.querySelector(".btn-create")
    btn.addEventListener("click", () => {
        const email = divSignUp.querySelector("#email").value;
        const password = divSignUp.querySelector("#password").value;
        register(email, password);
    })
    return divSignUp;
}



