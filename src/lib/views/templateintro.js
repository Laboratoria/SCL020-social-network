export const intro= () => {
    const divIntro = document.createElement("div")
    const viewIntro =

    `<div class="intro">
        
        <h1>Gluten Free Food</h1>
        <img></img>
        <p>Bienvenido.Explora diferentes recetas con características increibles, ¡sin duda alguna el compañero 
        de cocina perfecto!</p>
        <button><a href='#/users'>¡Unete!</a></button>
    </div>`
    divIntro.innerHTML = viewIntro;
    return divIntro;
};