//import { userSignOut } from "../../firebase/auth.js";
export const wall = () => {
    const divWall = document.createElement("div")
    const viewWall =
        `<div class="container-wall">
        <header>
            
            <h1>Gluten Free Food</h1>
        </header>
        <div id="newPost" class= newPost></div>
        <footer>
            
            <a href="#/post"><img id= "publicar" src="imagenes/iconoMas.png" class="iconoMas"></img></a>
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