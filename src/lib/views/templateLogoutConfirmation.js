export const logoutConfirmation = () => {
    const divlogoutConfirmation = document.createElement("div");

    const viewLogoutConfirmation = `
        <div>
            <img src="" alt="logo-ticket">
            <p>Are you sure you want to log out? </p>
            <button class="btn-yes">Yes</button>
            <button class="btn-no">No</button>
        </div>
    `
    divlogoutConfirmation.innerHTML = viewLogoutConfirmation;
    return divlogoutConfirmation;
}