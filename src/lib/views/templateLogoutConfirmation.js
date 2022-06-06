export const logoutConfirmation = () => {
    const divlogoutConfirmation = document.createElement("div");

    const viewLogoutConfirmation = `
        <div>
            <img src="" alt="logo-ticket">
            <p>Are you sure you want to log out? </p>
            <a href=""><button class="btn-yes">Yes</button></a>
            <a href="#/menu"><button class="btn-no">No</button></a>
        </div>
    `
    divlogoutConfirmation.innerHTML = viewLogoutConfirmation;
    return divlogoutConfirmation;
}