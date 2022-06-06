export const err404 = () => {
    const divErr404 = document.createElement("div");

    const viewErr404 = `
        <img src="" alt="404">
        <img src="" alt="falling-pop-corn">
        <p>The page you are looking for, doesn't exist or other error occurred.</p>
        <a href="#/feed"><button class="btn-return">Return</button></a>
    `
    divErr404.innerHTML = viewErr404;
    return divErr404;
    
}