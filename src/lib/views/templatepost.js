import { snapshot, posting, editPost } from "../../firebase/firestore.js";
//Funcion para que los usuarios ingresen una nueva publicacion
export const post = () => {
    const divPost = document.createElement("div")
    const viewPost =
        `<div id= "post" class="container-post">
        <form id="formPost">
        <h1>Nueva Receta</h1>
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
           <button type="submit" id="btnpublicar" class = "btnpublicar">Publicar</button>
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
        // console.log(nameRecipe)
        posting(nameRecipe, ingredients, stepOne, stepTwo, stepThree)
        window.location.href = '#/wall'
    })
    return divPost;
};

//Funcion para mostrar la publicacio creada
export const divNewPost = async() => {
    snapshot((callback) => {
        let newPost = [];
        const insertPost = document.querySelector('#newPost');
        callback.forEach((doc, index) => {
            const post = doc.data();
            console.log({ post });
            newPost +=
                `<div id="insertPost" class="insertPost">
                    <img class="" src="./imagenes/fotoperfil.png" alt="perfil"height=auto width="40"/>
                    <h3 class="textTittle">Angelica</h3>
                    <article class="posts" id="posts">
                    <h4><textarea type="text" id="nameRecipe" required readonly> ${post.nameRecipe}</textarea>
                    <h4>Ingredientes</h4> 
                    <textarea name="" id="ingredients"cols="30" rows="3" required readonly> ${post.ingredients}</textarea>
                    <h4>Preparaci&oacute;n:</h4>
                    <h4>Paso 1:</h4>
                    <textarea id="stepOne" readonly> ${post.preparacion[0]}</textarea>
                    <h4>Paso 2:</h4>
                    <textarea id="stepTwo" readonly> ${post.preparacion[1]}</textarea>
                    <h4>Paso 3:</h4>
                    <textarea id="stepThree" readonly> ${post.preparacion[2]}</textarea>
                    <div class="containerIconos">
                    <input type="image" src="imagenes/like2.png" class="like"/>
                    <button class="savePost" id="savePost" data-id=${doc.id}>Guardar</button>
                    <input type="image" src="imagenes/lapiz2.png" id="editPost" data-id=${doc.id} class="iconoEditar"/>
                    </div>
                    </article> 
                </div>`;
            insertPost.innerHTML = newPost
        })
        //Funcion que permite que el usuario edite una publicacion
        const editButtons = insertPost.querySelectorAll("#editPost");
        editButtons.forEach((element, index) => {
            element.addEventListener("click", (event) => {
                console.log("Hoola")
                const containerPost = element.closest('.insertPost');
                const containerNameRecipe = containerPost.querySelector('#nameRecipe');
                containerNameRecipe.removeAttribute('readonly');
                const containerIngredients = containerPost.querySelector('#ingredients');
                containerIngredients.removeAttribute('readonly');
                const containerStepOne = containerPost.querySelector('#stepOne');
                containerStepOne.removeAttribute('readonly');
                const containerStepTwo = containerPost.querySelector('#stepTwo');
                containerStepTwo.removeAttribute('readonly');
                const containerStepThree = containerPost.querySelector('#stepThree');
                containerStepThree.removeAttribute('readonly');
                const btnSaveElement = containerPost.querySelector('.savePost');
                btnSaveElement.style.display = 'block'
            })
        });

        const btnSavePost = document.querySelectorAll(".savePost");
        btnSavePost.forEach((element, index) => {
            const button = element.parentElement
            const editButton = button.querySelector('#editPost')

            console.log(editButton)
            element.addEventListener("click", (e) => {
                const id = editButton.dataset.id;
                if (btnSavePost.length > 1) {
                    editPost(id, nameRecipe[index].value, ingredients[index].value, stepOne[index].value, stepTwo[index].value, stepThree[index].value);
                } else {
                    console.log(id, nameRecipe.value, ingredients.value, stepOne.value, stepTwo.value, stepThree.value)
                    editPost(id, nameRecipe.value, ingredients.value, stepOne.value, stepTwo.value, stepThree.value);
                }
            })
        });
    })
}