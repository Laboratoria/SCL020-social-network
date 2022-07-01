import { posting } from "../../firebase/firestore.js";
export const post = () => {
    const divPost = document.createElement("div")
    const viewPost =
        `
    <div id= "post" class="container-post">
        <h1>Nueva Receta</h1>
        <form>
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
            
           <h4>Tipo de receta *</h4>
           <input type="text" id= "typeRecipe"required />
            <div class="uploadImg">
                <input type="file" value="upload" id="uploadImg" />
            </div>
            <a href="#/wall"><button class = "btnpublicar">Publicar</button></a>
        </form>
     </div>`

    divPost.innerHTML = viewPost;

    const nameRecipe = divPost.querySelector("#nameRecipe").value;
    const ingredients = divPost.querySelector("#ingredients").value;
    const stepOne = divPost.querySelector("#stepOne").value;
    const stepTwo = divPost.querySelector("#stepTwo").value;
    const stepThree = divPost.querySelector("#stepThree").value;
    const typeRecipe = divPost.querySelector("#typeRecipe").value;
    const uploadImg = divPost.querySelector("#uploadImg").value;

    posting(nameRecipe, ingredients, stepOne, stepTwo, stepThree, typeRecipe, uploadImg)
    return divPost;
};
