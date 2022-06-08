export const error404 = () => {
    const divError404 = document.createElement('div')
    divError404.setAttribute('id', 'error404View')
    const viewError404 = `
        <div id="errorContent" class= "divButtons">
            <img src="img/404.png" alt="Error 404">
            <a href="#/home"> <button class="buttons"></button></a>
        </div>
        `
        divError404.innerHTML= viewError404;
        return divError404
};