//import { userSignOut } from "../../firebase/auth.js";
export const wall = () => {
    const divWall = document.createElement("div")
    const viewWall =

        `
    <div class="container-wall">
        <header>
            <img src="imagenes/perfil.png" class="logo"></img>
            <h1>Gluten Free Food</h1>
        </header>

        <a href="#/post"><img id= "publicar" src="imagenes/iconoPublicar.png" class="iconoPublicar"></img></a>

        <footer>
            <img src="imagenes/volverMuro.png" class="logo"></img>
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