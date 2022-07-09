import { snapshot, posting,editPost} from "../../firebase/firestore.js";
//Funcion para que los usuarios ingresen una nueva publicacion
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
           <button id="btnpublicar" class = "btnpublicar">Publicar</button>
        </form>
     </div>`;
    divPost.innerHTML = viewPost;
    const creatingPost = divPost.querySelector('#btnpublicar');
    console.log(creatingPost)
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


export const divNewPost = async () => {
    snapshot((callback) => {
        let newPost  = [];
        const insertPost = document.querySelector('#newPost');
        callback.forEach((doc) => {
            const post = doc.data();
            newPost +=
            `<div id="insertPost" class="insertPost">
                <img class="" src="./imagenes/fotoperfil.png" alt="perfil" height=auto width="40"/>
                <h3 class="textTittle">Angelica</h3>
                <article class = "posts" id = "posts">
                <h4> <textarea type="text" id= "nameRecipe" required readonly>${post.nameRecipe} </textarea>
                <h4> Ingredientes</h4> 
                <textarea name="" id="ingredients" cols="30" rows="3" required readonly>${post.ingredients} </textarea>
                <h4> Preparación:</h4>
                <h4> Paso 1:</h4>
                <textarea readonly>${post.preparacion[0]} </textarea>
                <h4> Paso 2:</h4>
                <textarea readonly>${post.preparacion[1]} </textarea>
                <h4> Paso 3:</h4>
                <textarea readonly>${post.preparacion[2]}</textarea>
                <input type="image" src="imagenes/like.png" class="like" />
                <button class="editPost" id= "editPost" data-id = ${doc.id}> Editar</button>
                <button class="savePost" id= "savePost" data-id = ${doc.id}> Guardar</button>
                </article> 
            </div>`;
            insertPost.innerHTML = newPost
        });
        const insertPost2 = document.getElementById("newPost");
        const editButtons = insertPost.querySelectorAll("#editPost");
        console.log(editButtons)
        editButtons.forEach((element) => {
            element.addEventListener("click", (event) => {
                console.log("Hoola")
                const containerPost = element.closest('.insertPost');
                const containerNameRecipe = containerPost.querySelectorAll('#nameRecipe');
                const containerIngredients = containerPost.querySelectorAll('#ingredients');
                const containerStepOne = containerPost.querySelectorAll('#stepOne');
                const containerStepTwo = containerPost.querySelectorAll('#stepTwo');
                const containerStepThree = containerPost.querySelectorAll('#stepThree');
                const btnSaveElement = containerPost.querySelector('.savePost');
                containerNameRecipe.removeAttribute('readonly');
                containerIngredients.removeAttribute('readonly');
                containerStepOne.removeAttribute('readonly');
                containerStepTwo.removeAttribute('readonly');
                containerStepThree.removeAttribute('readonly');
                
                btnSaveElement.style.display = 'inline'
                console.log(containerNameRecipe);

            });
        });
        /*const btnSavePost = document.querySelectorAll(".savePost");
        btnSavePost.forEach((element) => {
        const button = element.parentElement;
        console.log(button);
        const editButton = button.querySelector('.editPost');
        element.addEventListener("click", (e) => {
        const id = editButton.dataset.id;
        console.log(e.target.getAttribute('id'))
        const content = document.querySelector('#posts');
        console.log(content)
        editPost('B1zVOtX2UC8gqz0Oe4wo', nameRecipe, ingredients, stepOne, stepTwo, stepThree);
        console.log(nameRecipe);
        /*ditPost(id, nameRecipe, ingredients,stepOne, stepTwo, stepThree);
        console.log(nameRecipe)
      });
    });*/

            
        
    })
}



/*
            const postEdit = () => {
            const editButtons = insertPost.querySelectorAll(".editPost");
            console.log(editButtons)
            postEdit.innerHTML = '';
            editButtons.forEach((e) => {
                const post = doc.data();
                e.addEventListener("click", () => {
                    console.log("Hoola")
                    const divEdit = () => {
                        `<div  data-id = ${doc.id} id= "newpost" class="container-post">
                    <h1>Editar Receta</h1>
                    <form id="formPost">
                        <h4> Nombre de la Receta</h4> 
                        <input type="text" id= "nameRecipe" required ${post.nameRecipe}/>
                        <h4> Ingredientes</h4> 
                        <textarea name="" id="ingredients" cols="30" rows="3" required>${post.ingredients}</</textarea>
                        
                       <h4> Preparación </h4>
                       <h4> Paso 1</h4>
                       <textarea name="" id="stepOne" cols="30" rows="3" required>${post.preparacion[0]}</textarea>
                       <h4> Paso 2</h4>
                       <textarea name="" id="stepTwo" cols="30" rows="3"required>${post.preparacion[1]}</textarea>
                       <h4> Paso 3</h4>
                       <textarea name="" id="stepThree" cols="30" rows="3" required>${post.preparacion[2]}</</textarea>
                        
                        <button id="btnGuardar" class = "btnpublicar">Guardar</button>
                    </form>
                 </div>`;
                 postEdit.innerHTML += divEdit;
                    }
                })

            })


            const editingPost = async () => {
                postEdit.querySelector('#btnpublicar');
                editingPost.addEventListener('click', () => {
                    postEdit.querySelector("#nameRecipe").value = nameRecipe;
                    postEdit.querySelector("#ingredients").value = ingredients;
                    postEdit.querySelector("#stepOne").value = stepOne;
                    postEdit.querySelector("#stepTwo").value = stepTwo;
                    postEdit.querySelector("#stepThree").value = stepThree;

                });
                console.log(nameRecipe)
                editing(id, nameRecipe, ingredients, stepOne, stepTwo, stepThree)
                const guardar = postEdit.querySelector("#btnGuardar").addEventListener('click', () => {
                    let nameRecipe = postEdit.querySelector("#nameRecipe").value
                    let ingredients = postEdit.querySelector("#ingredients").value
                    let stepOne = postEdit.querySelector("#stepOne").value
                    let stepTwo = postEdit.querySelector("#stepTwo").value
                    let stepThree = postEdit.querySelector("#stepThree").value
                })
                    .then(() => {
                        alert('funciono');
                        postEdit.querySelector("#nameRecipe").value = '';
                        postEdit.querySelector("#ingredients").value = '';
                        postEdit.querySelector("#stepOne").value = '';
                        postEdit.querySelector("#stepTwo").value = '';
                        postEdit.querySelector("#stepThree").value = '';
                    })
                    .catch(() => {
                        alert('Error no funciona');
                    });
            };
        };

    }
    )
});

}

//template para editar
*/