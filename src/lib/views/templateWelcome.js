export const welcome = () => {
    const divWelcome = document.createElement("div");

    const viewWelcome = //html
    `
        <div class="container-welcome">
            <div class="sub-container-welcome">
                <div class="container-s-logo-ticket"><img class="s-logo-ticket" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-removebg-preview.png?raw=true" alt="logo-ticket"></div>
                <h2>Congratulations!</h2>
                <div class="container-p">
                    <p>Your account has been created successfully!</p>
                    <p>Now you have access to the best content online</p>
                </div>
                <a href="#/login"><button class="btn">Continue</button></a>
            </div>
        </div>
    `
    divWelcome.innerHTML = viewWelcome;
    return divWelcome;
    
}