//import { userSignOut } from "../../firebase/auth.js";
export const wall = () => {
    const divWall = document.createElement("div")
    const viewWall =

        `
    <div class="container-wall">
        <header>
            <img src="imagenes/perfil.png" class="logoperfil"></img>
            <h1>Gluten Free Food</h1>
        </header>
        <div id="newPost"></div>
        <footer>
            <img src="imagenes/volverMuro.png" class="logomuro"></img>
            <a href="#/post"><img id= "publicar" src="imagenes/iconoPublicar.png" class="logopublicar"></img></a>
        </footer>

    </div> `;
    divWall.innerHTML = viewWall;

    return divWall;


};
export const contentPost = async() => {
    const divNewPost = document.querySelector('#newPost');
    snapshot((callback) => {
        divNewPost.innerHTML = '';
        callback.forEach((doc) => {
            const post = doc.data();

            const divInsertPost =
                //html
                `
    <div id="insertPost" class="insertPost">
        <section>
        <div class="nameRecipe">
            <h1>Nombre de la receta</h1>
        </div>
        <div class="typeRecipe">
        
        </div>
        <div class="ingredients">
            <textarea></textarea>
        </div>
        <div class="stepOne">
            <textarea></textarea>
        </div>
        <div class="stepTwo">
            <textarea></textarea>
        </div>
          <div class="stepThree">
          <textarea></textarea>
        </div>
        
          <div class="uploadImg"></div>
      </section>
  
    </div>
  `;
            divHomePost.innerHTML += formHomePost;
        });
    });
};


/*
 <button id="btncerrar" class="cerrar"><a href='#/intro'> Cerrar Sesión </a> </button>

const btnCerrar = divWall.querySelector("#btncerrar")
btnCerrar.addEventListener("click", () => {
    // console.log(btnCerrar);
    // const masking = psw.replace(g, '.') ;
    userSignOut();
})*/