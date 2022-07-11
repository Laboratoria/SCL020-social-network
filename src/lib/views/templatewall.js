import { userSignOut } from "../../firebase/auth.js";
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
    const btnCerrar = divWall.querySelector("#btncerrar")
    btnCerrar.addEventListener("click", () => {
    userSignOut();
    window.location.href = '#/intro'
})

    return divWall;
};
 

