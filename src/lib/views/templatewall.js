import { userSignOut } from "../../firebase/auth.js";
export const wall = () => {
    const divWall = document.createElement("div")
    const viewWall =

        `
    <div class="container-wall">
         
      </div>

      <header>
          <img> logo de la aplicacion
          <img> logo para escribir
      </header>
      <div>
          <img>
          <h1>Nombre del usuario</h1>
          <div>
              <h1>Titulo de la receta</h1>
              <img>
              <p>Receta de arepa y preparacion</p>
          </div>
          <footer>
              <img>
              <img>
              <img>
              <img>
              <img>
          </footer>
  
        <button id = "btncerrar" class = "cerrar"><a href='#/intro'> Cerrar Sesión </a> </button>
      </div>
      </div>
      `
    divWall.innerHTML = viewWall;
    const btnCerrar = divWall.querySelector("#btncerrar")
    btnCerrar.addEventListener("click", () => {

       // console.log(btnCerrar);
        
        // const masking = psw.replace(g, '.') ;


        userSignOut();

    })
    return divWall;
};