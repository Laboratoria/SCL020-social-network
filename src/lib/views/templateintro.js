export const intro = () => {
    const divIntro = document.createElement("div")
    const viewIntro =

        `<div class="container-inicio">
        
        <h1>Gluten Free Food</h1>
        <img src= "imagenes/logo.png" class= "logo"></img>
        <div class="container-orange">
       <h2> Bienvenido </h2>
        <p>Explora y comparte diferentes recetas sin gluten</p> 
        <p>¡sin duda alguna el compañero 
        de cocina perfecto!</p>
        </div>
        <button class= "botonUnete"><a href='#/login'>¡Unete!</a></button>
    </div>
    `
    divIntro.innerHTML = viewIntro;
    return divIntro;
};