export const ageRedirect = () => {
    const divAgeRedirect = document.createElement("div");

    const viewAgeRedirect = //html
    `
        <div class="container-ageRedirect" >
            <div class="sub-container">
                <div class="form-type">
                    <div class="containter-s-logo-ticket"><img class ="s-logo-ticket" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-removebg-preview.png?raw=true" alt="logo-ticket"></div>        
                    <p class="sorry">Sorry! Come back when you are over 18 years old</p>
                    <video class ="video-stitch"  autoplay loop>
                        <source src="https://raw.githubusercontent.com/fabibbc/SCL020-social-network/main/src/img/Eres%20chiquita.mp4" type="video/mp4">
                    </video>
                    <a href=""><button class="btn-returnstitch">Return</button></a>
                </div>
            </div>
        </div>
        
    `
    divAgeRedirect.innerHTML = viewAgeRedirect;

    return divAgeRedirect;
}



