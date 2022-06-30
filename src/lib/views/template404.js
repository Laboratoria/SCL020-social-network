export const err404 = () => {
    const divErr404 = document.createElement("div");

    const viewErr404 = //html
    `
    <main class="container-404">
        <div class="div-404">
            <img class="img-404" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/404.png?raw=true" alt="404">
            <img class="imgPopCorn" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/fallingPopcorn.png?raw=true" alt="falling-pop-corn">
            <p>The page you are looking for, doesn't exist or other error occurred.</p>
            <a href="#/feed"><button class="btn">Return</button></a>
        </div>
    </main>
    `
    divErr404.innerHTML = viewErr404;
    return divErr404;
    
}