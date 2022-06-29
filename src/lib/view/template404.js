export const error404Template = () => {
    const divError404 = document.createElement('div')
    divError404.setAttribute('id', 'error404View')
    const viewError404 = `
        <div id="errorContent">
            <div>
            <img src="img/404.png" alt="Error 404" id="img404">
            </div>
            <div class="divButtons">
            <a href="#/home" class="buttons">Vuelve al Inicio</a>
            </div>
        </div>
        `
        divError404.innerHTML= viewError404;
        return divError404
};