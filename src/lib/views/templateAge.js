export const age = () => {
    const divAge = document.createElement("div");

    const viewAge = `
        <img src="" alt="logo-ticket">
        <p>Are you over 18?</p>
        <button class="btn-yes">Yes</button>
        <button class="btn-no">No</button>

    `
    divAge.innerHTML = viewAge;
    return divAge;
}