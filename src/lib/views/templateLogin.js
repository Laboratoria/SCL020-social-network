export const login = () => {
    const divLogin = document.createElement("div");

    const viewLogin = `
        <div class="container-login"> 
            <div class ="sub-container-login">
                <div class="container-s-logo-ticket"><img class="s-logo-ticket" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-tickets.png?raw=true" alt="logo-ticket"></div>
                    <h2>Login to your account</h2>
                    <label><input type="text" id="email" required placeholder="email@something.com"></label>
                    <label><input type="password" id="password" required placeholder="password"></label>
                    <div class="btns-login">
                        <button>google</button>
                        <button>IMDb</button>
                    </div> 
                    <a href="#/feed"><button class="btn">Login</button></a>
            </div>
        </div>     
    `
    divLogin.innerHTML = viewLogin;
    return divLogin;
}
