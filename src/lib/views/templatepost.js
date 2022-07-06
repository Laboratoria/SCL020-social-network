
import { capturePost, posting } from "../../firebase/firestore.js";
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
            <div class="uploadImg">
                <input type="file" value="upload" id="uploadImg" />
            </div>
            <button id="btnpublicar"   class = "btnpublicar">Publicar</button>
        </form>
     </div>`
    divPost.innerHTML = viewPost;
  
    const creatingPost = divPost.querySelector('#btnpublicar');
        creatingPost.addEventListener('click', async() => {
            const nameRecipe = divPost.querySelector("#nameRecipe").value;
            const ingredients = divPost.querySelector("#ingredients").value;
            const stepOne = divPost.querySelector("#stepOne").value;
            const stepTwo = divPost.querySelector("#stepTwo").value;
            const stepThree = divPost.querySelector("#stepThree").value;
            
            const uploadImg = divPost.querySelector("#uploadImg").value;
            console.log(nameRecipe, uploadImg)
           await posting(nameRecipe, ingredients, stepOne, stepTwo, stepThree,uploadImg)
        })
        return divPost;  
    };


   export const divNewPost = async() => { document.querySelector('#newPost');
            capturePost((callback) => {
                divNewPost.innerHTML = '';
                callback.forEach((doc) => {
                const post = doc.data();
                const divInsertPost =
            `<div id="insertPost" class="insertPost">
            <img class="" src="./imagenes/fotoperfil.png" alt="perfil" height=auto width="40"/>
            <h3 class="textTittle">Usuario</h3>
            </div>
            <h1>Nueva Receta</h1>
            <form id="formPost">
                <h4> Nombre de la Receta*</h4> 
                <input type="text" id= "nameRecipe" required ${post.nameRecipe}/>
                <h4> Ingredientes*</h4> 
                <textarea name="" id="ingredients" cols="30" rows="3" required> ${post.ingredients}</textarea>
                <h4> Preparación * </h4>
               <h4> Paso 1*</h4>
               <textarea name="" id="stepOne" cols="30" rows="3" required>${post.stepOne}</textarea>
               <h4> Paso 2*</h4>
               <textarea name="" id="stepTwo" cols="30" rows="3"required>${post.stepTwo}</textarea>
               <h4> Paso 3*</h4>
               <textarea name="" id="stepThree" cols="30" rows="3" required>${post.stepThree}</textarea>
                <div class="uploadImg">
                <input type="file" value="upload" id="uploadImg" ${post.uploadImg}/>
                </div>
                <button class = "btnpublicar">Publicar</button>
            </form> 
            <div class="containerlike" id="Post">
            <input type="image" src="imagenes/like.png" class="like" />
           </div>`;
                    divNewPost.innerHTML += divInsertPost;
                });
                window.location.href = '#/wall'
            });
            
        };
         

    

