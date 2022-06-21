export const intro = () => {
    const divIntro = document.createElement("div")
    const viewIntro =

        `<div class="container-intro">
        
        <h1>Gluten Free Food</h1>
        <img></img>
        <div class="container-orange">
       <h2> Bienvenido </h2>
        <p>Explora diferentes recetas con características increibles</p> 
        <p>¡sin duda alguna el compañero 
        de cocina perfecto!</p>
        </div>
        <button class= "botonUnete"><a href='#/login'>¡Unete!</a></button>
    </div>`
    divIntro.innerHTML = viewIntro;
    return divIntro;
};