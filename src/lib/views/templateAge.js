export const age = () => {
    const divAge = document.createElement("div");

    const viewAge = `
        <img src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-tickets.png?raw=true" alt="logo-ticket">
        <p>Are you over 18?</p>
        <a href="#/sign-up"><button class="btn-yes">Yes</button></a>
        <a href="#/ageRedirect"><button class="btn-no">No</button></a>
    `
    divAge.innerHTML = viewAge;
    return divAge;
}