export const home = () => {
    const divHome = document.createElement("div");
    const viewHome = //html
    `
        <div class="container-home">
            <div class="box-home">
                <div class="containter-logo-ticket"><img class ="logo-ticket" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-removebg-preview.png?raw=true" alt="logo-ticket"></div>
                <p>¡The best app to comment on your favorite movies!</p>
                <a href="#/login"><button class="btn">Login</button></a>
                <a href="#/age"><button class="btn">Sign Up</button></a>
            </div>
        </div>
    `
    divHome.innerHTML = viewHome;
    return divHome;
    //return viewHome;
}
