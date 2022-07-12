import { userSignOut } from "../../firebase/auth.js";
//Funcion para crear el template en el que el usuario ingresa al muro
export const wall = () => {
    const divWall = document.createElement("div")
    const viewWall =
        `<div class="container-wall" id="container-wall">
        <header>
            
            <h1>Gluten Free Food</h1>
            <button type="button" id="btncerrar" class="cerrar">Cerrar Sesión</button>
        </header>
        <div id="newPost" class= newPost></div>

        <footer>
            <a href="#/post"><img id= "publicar" src="imagenes/iconoMas.png" class="iconoMas"></img></a>
        </footer>
        </div> `;
    divWall.innerHTML = viewWall;
    //funcion para que al cerrar sesion el usuario cambie de hash a la intro
    const btnCerrar = divWall.querySelector("#btncerrar")
    btnCerrar.addEventListener("click", (e) => {
    e.preventDefault();
    userSignOut();
    window.location.href = '#/intro'
})

    return divWall;
};
 

