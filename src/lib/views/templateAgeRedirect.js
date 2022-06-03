export const ageRedirect = () => {
    const divAgeRedirect = document.createElement("div");

    const viewAgeRedirect = `
        <img src="" alt="logo-ticket">
        <p>Sorry come back when you have +18</p>
        <video src=""></video>
        <button class="btn-return">Return</button>
        
    `
    divAgeRedirect.innerHTML = viewAgeRedirect;
    return divAgeRedirect;
}