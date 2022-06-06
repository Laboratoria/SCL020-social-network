export const logoutConfirmation = () => {
    const divlogoutConfirmation = document.createElement("div");

    const viewLogoutConfirmation = `
        <div>
            <img src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-tickets.png?raw=true" alt="logo-ticket">
            <p>Are you sure you want to log out? </p>
            <a href=""><button class="btn-yes">Yes</button></a>
            <a href="#/menu"><button class="btn-no">No</button></a>
        </div>
    `
    divlogoutConfirmation.innerHTML = viewLogoutConfirmation;
    return divlogoutConfirmation;
}