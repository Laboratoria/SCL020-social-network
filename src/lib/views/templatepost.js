import { snapshot, posting } from "../../firebase/firestore.js";
export const post = () => {
    const divPost = document.createElement("div")
    const viewPost =
        `<div id= "post" class="container-post">
        <h1>Nueva Receta</h1>
        <form id="formPost">
            <h4> Nombre de la Receta*</h4> 
            <input type="text" id= "nameRecipe" required />
            <h4> Ingredientes*</h4> 
            <textarea name="" id="ingredients" cols="30" rows="3" required></textarea>
            
           <h4> Preparación * </h4>
           <h4> Paso 1*</h4>
           <textarea name="" id="stepOne" cols="30" rows="3" required></textarea>
           <h4> Paso 2*</h4>
           <textarea name="" id="stepTwo" cols="30" rows="3"required></textarea>
           <h4> Paso 3*</h4>
           <textarea name="" id="stepThree" cols="30" rows="3" required></textarea>
            
            <button id="btnpublicar"   class = "btnpublicar">Publicar</button>
        </form>
     </div>`;
    divPost.innerHTML = viewPost;

    const creatingPost = divPost.querySelector('#btnpublicar');
    creatingPost.addEventListener('click', () => {
        const nameRecipe = divPost.querySelector("#nameRecipe").value;
        const ingredients = divPost.querySelector("#ingredients").value;
        const stepOne = divPost.querySelector("#stepOne").value;
        const stepTwo = divPost.querySelector("#stepTwo").value;
        const stepThree = divPost.querySelector("#stepThree").value;


        console.log(nameRecipe)
        posting(nameRecipe, ingredients, stepOne, stepTwo, stepThree)
        window.location.href = '#/wall'
    })
    return divPost;
};


export const divNewPost = async() => {
    const insertPost = document.querySelector('#newPost');
    snapshot((callback) => {
        insertPost.innerHTML = '';
        callback.forEach((doc) => {
            const post = doc.data();
            console.log(post);
            console.log(post.nameRecipe);
            console.log(post.ingredients);
            console.log(post.preparacion);
            console.log(post.preparacion.stepOne);
            console.log(post.preparacion[0]);
            const divInsertPost =
                `<div id="insertPost" class="insertPost">
            
         <article class = "post">
                <img class="" src="./imagenes/fotoperfil.png" alt="perfil" height=auto width="40"/>
              <h3 class="textTittle">Angelica</h3>
               <h4 class = "nameRecipe">${post.nameRecipe}</h4> 
               <p>${post.ingredients}</p> 
               <h4> Preparación:</h4>
               <h4> Paso 1:</h4>
               <p>${post.preparacion[0]}</p>
               <h4> Paso 2:</h4>
               <p>${post.preparacion[1]}</p>
               <h4> Paso 3:</h4>
               <p>${post.preparacion[2]}</p>
               <input type="image" src="imagenes/like.png" class="like" />
         </article>
         
            
            
           </div>`;
            insertPost.innerHTML += divInsertPost;
        });
        // window.location.href = '#/wall'
    });

};