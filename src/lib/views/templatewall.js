import { userSignOut } from "../../firebase/auth.js";
export const wall = () => {
    const divWall = document.createElement("div")
    const viewWall =

        `
    <div class="container-wall">
         <header>
      <img src= "imagenes/logo.png" class= "logo"></img>
      <img src= "imagenes/iconoPublicar.png" class= "iconoPublicar"></img>
      </header>
       <footer>
          <img src= "imagenes/volverMuro.png" class= "logo"></img>
          <img src= "imagenes/recetasDulces.png" class= "logo"></img>
          <img src= "imagenes/recetasSaladas.png" class= "logo"></img>
          <img src= "imagenes/tiendas.png" class= "logo"></img>
          <img src= "imagenes/perfil.png" class= "logo"></img>
          </footer>
         
      </div>

      <div class= "post">
      <h1>Nueva Receta</h1>
      <form>
      <label>Nombre de la Receta * <input type="text"></label>
      <label>Ingredientes *<textarea name="" id="" cols="30" rows="10"></textarea></label>
      <label>Preparación * <textarea name="" id="" cols="30" rows="10"></textarea>
      <label>Tipo de receta *<input type="text"></label>
      <div class="progress-panel"></label>
          <label for="btnUploadFile"></label>
          <input type="file" value="upload" id="btnUploadFile" />
          <div class="progress">
  </form>
  <button>Publicar</button>
  <button id = "btncerrar" class = "cerrar"><a href='#/intro'> Cerrar Sesión </a> </button>
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