export const login = () => {
    const divLogin = document.createElement("div");

    const viewLogin = `
        <div>
            <img src="" alt="logo-ticket">
            <h2>Login to your account</h2>
            <input type="text">
            <input type="password">
            <div class="btns-login">
                <button class="btn-loginGoogle">google</button>
                <button class="btn-loginIMDb">IMDb</button>
            </div> 
            <a href="#/feed"><button class="btn-login">Login</button></a>
        </div>    
    `
    divLogin.innerHTML = viewLogin;
    return divLogin;
}
