//import { userSignOut } from "../../firebase/auth.js";
export const wall = () => {
    const divWall = document.createElement("div")
    const viewWall =

        `
    <div class="container-wall">
        <header>
            <img src="imagenes/logo.png" class="logo"></img>
            <a href="#/post"><img id= "publicar" src="imagenes/iconoPublicar.png" class="iconoPublicar"></img></a>

        </header>

        

        <footer>
            <img src="imagenes/volverMuro.png" class="logo"></img>
            <img src="imagenes/recetasDulces.png" class="logo"></img>
            <img src="imagenes/recetasSaladas.png" class="logo"></img>
            <img src="imagenes/tiendas.png" class="logo"></img>
            <img src="imagenes/perfil.png" class="logo"></img>
        </footer>

    </div> `

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