import { posting } from "../../firebase/firestore.js";
export const post = () => {
    const divPost = document.createElement("div")
    const viewPost =
        `
<div id= "post" class="post">
        <h1>Nueva Receta</h1>
        <form>
            <label>Nombre de la Receta * <input type="text" id= "nameRecipe"></label>
            <label>Ingredientes *<textarea name="" id="ingredients" cols="30" rows="10"></textarea></label>
            <div>
           <h1> Preparación * </h1>
           <label>Paso 1<input type="text" id="stepOne"></label>
           <label>Paso 2<input type="text" id= "stepTwo"></label>
           <label>Paso 3<input type="text" id= "stepThree"></label>
           <label>Paso 4<input type="text" id= "stepFour"></label>
            </div>
           <label>Tipo de receta *<input type="text" id= "typeRecipe"></label>
            <div class="uploadImg">
                <input type="file" value="upload" id="uploadImg" />
                </div>
        </form>
        <a href="#/wall"><button>Publicar</button></a>
       
        </div>`

    divPost.innerHTML = viewPost;

    const nameRecipe = divPost.querySelector("#nameRecipe").value;
    const ingredients = divPost.querySelector("#ingredients").value;
    const stepOne = divPost.querySelector("#stepOne").value;
    const stepTwo = divPost.querySelector("#stepTwo").value;
    const stepThree = divPost.querySelector("#stepThree").value;
    const stepFour = divPost.querySelector("#stepFour").value;
    const typeRecipe = divPost.querySelector("#typeRecipe").value;
    const uploadImg = divPost.querySelector("#uploadImg").value;

    posting(nameRecipe, ingredients, stepOne, stepTwo, stepThree, stepFour, typeRecipe, uploadImg)
    return divPost;
};