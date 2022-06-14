import { logout } from "../../firebase/auth.js";
export const logoutConfirmation = () => {
    const divlogoutConfirmation = document.createElement("div");

    const viewLogoutConfirmation = //html
    `
        <div class="container-logOutConfirm">
            <div class="sub-container-logOutConfirm">
                <div class="container-s-logo-ticket"><img class="s-logo-ticket" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-removebg-preview.png?raw=true" alt="logo-ticket"></div>
                <div class="container-p"><p>Are you sure you want to log out? </p></div>
                <div class="container-btn">
                    <a href=""><button class="btn-yes">Yes</button></a>
                    <a href="#/menu"><button class="btn-no">No</button></a>
                </div>
            </div>
        </div>
    `
    divlogoutConfirmation.innerHTML = viewLogoutConfirmation;
    
    const btnLogout = divlogoutConfirmation.querySelector(".btn-yes")
    btnLogout.addEventListener("click", () => {
        logout()
    })
    return divlogoutConfirmation;
}


// const btn = divSignUp.querySelector(".btn-create")
// btn.addEventListener("click", () => {
//     const email = divSignUp.querySelector("#email").value;
//     const password = divSignUp.querySelector("#password").value;
//     register(email, password);
// })