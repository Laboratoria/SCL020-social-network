export const welcome = () => {
    const divWelcome = document.createElement("div");

    const viewWelcome = `
        <div class = "container-welcome>
            <img src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-tickets.png?raw=true" alt="logo-ticket">
            <h2>Congratulations!</h2>
            <p>Your account has been created successfully!</p>
            <p>Now you have access to the best content online</p>
        <a href="#/login"><button class="btn">Continue</button></a>
        </div>
    `
    divWelcome.innerHTML = viewWelcome;
    return divWelcome;
    
}