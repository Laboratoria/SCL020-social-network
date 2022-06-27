export const age = () => {
    const divAge = document.createElement("div");

    const viewAge = //html
    `
        <div class="container-age">
            <div class="sub-container">
                <div class="containter-logo-ticket"><img class ="logo-ticket" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-removebg-preview.png?raw=true" alt="logo-ticket"></div>
                <p>Are you over 18?</p>
                <a href="#/sign-up"><button class="btn">Yes</button></a>
                <a href="#/ageRedirect"><button class="btn">No</button></a>
            </div>
        </div>
    `
    divAge.innerHTML = viewAge;
    return divAge;
}