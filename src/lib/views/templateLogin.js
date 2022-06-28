import { logIn, signInGoogle } from "../../firebase/auth.js";


export const login = () => {
    const divLogin = document.createElement("div");

    const viewLogin = //html 
    `
        <div class="container-login"> 
            <div class ="sub-container">
                <div class="containter-logo-ticket"><img class ="logo-ticket" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-removebg-preview.png?raw=true" alt="logo-ticket"></div>
                <h2>Login to your account</h2>
                <form>
                    <label><input type="text" id="email"  placeholder="email@something.com"></label>
                    <label><input type="password" id="password"  placeholder="password"></label>
                    <div class="btn-access">
                        <a id="loginGoogle">google</a>
                    </div> 
                    <p>You are not registered yet?<a href="#/age">Create Account</a></p>
                    <input type="button" value="Login" id="btn" class="btn">
                </form>

            
            </div>
        </div>     
    `
    divLogin.innerHTML = viewLogin;
    

    const btnGoogle = divLogin.querySelector("#loginGoogle")
    btnGoogle.addEventListener("click", ()=> {
        signInGoogle()

    })

    const btn = divLogin.querySelector("#btn")
    btn.addEventListener("click", (e) => {
        e.preventDefault()
        const email = divLogin.querySelector("#email").value;
        const password = divLogin.querySelector("#password").value;
        logIn(email, password);
        
        
    })
    return divLogin;
}
