//Funcion para crear el template en caso de error
export const error = () => {
    const divError = document.createElement("div")
    const viewError =

    `<div>
    <h1> 404 ERROR! </h1>
    </div>`
    divError.innerHTML = viewError
    return divError;
};