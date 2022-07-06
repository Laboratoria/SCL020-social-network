//import { userSignOut } from "../../firebase/auth.js";
export const wall = () => {
    const divWall = document.createElement("div")
    const viewWall =
        `<div class="container-wall">
        <header>
            <img src="imagenes/perfil.png" class="logoperfil"></img>
            <h1>Gluten Free Food</h1>
        </header>
        <div id="newPost" class= newPost></div>
        <footer>
            <img src="imagenes/volverMuro.png" class="logomuro"></img>
            <a href="#/post"><img id= "publicar" src="imagenes/iconoPublicar.png" class="logopublicar"></img></a>
        </footer>
        </div> `;
    divWall.innerHTML = viewWall;
    return divWall;
};

/*
 <button id="btncerrar" class="cerrar"><a href='#/intro'> Cerrar Sesión </a> </button>

const btnCerrar = divWall.querySelector("#btncerrar")
btnCerrar.addEventListener("click", () => {
    // console.log(btnCerrar);
    // const masking = psw.replace(g, '.') ;
    userSignOut();
})*/