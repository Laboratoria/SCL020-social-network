export const ageRedirect = () => {
    const divAgeRedirect = document.createElement("div");

    const viewAgeRedirect = //html
    `
        <div class="container-ageRedirect" >
            <div class="containter-logo-ticket"><img class ="logo-ticket" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-removebg-preview.png?raw=true" alt="logo-ticket"></div>        <p>Sorry come back when you have +18</p>
            <video width="300" autoplay>
                <source src="https://raw.githubusercontent.com/fabibbc/SCL020-social-network/main/src/img/Eres%20chiquita.mp4" type="video/mp4">
            </video>
            <a href=""><button class="btn">Return</button></a>
        </div>
        
    `
    divAgeRedirect.innerHTML = viewAgeRedirect;

    return divAgeRedirect;
}



