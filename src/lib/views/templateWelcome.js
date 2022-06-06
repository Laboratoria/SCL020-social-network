export const welcome = () => {
    const divWelcome = document.createElement("div");

    const viewWelcome = `
        <img src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-tickets.png?raw=true" alt="logo-ticket">
        <div>
            <h2>Congratulations!</h2>
            <p>Your account has been created successfully!</p>
            <p>Now you have access to the best content online</p>
        </div>
        <a href="#/login"><button class="btn-continue">Continue</button></a>
    
    `
    divWelcome.innerHTML = viewWelcome;
    return divWelcome;
    
}