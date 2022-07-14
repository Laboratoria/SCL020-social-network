import { savePost, deletePost, editPost, onGetPost } from "../firebase/firestore.js";


//Muro de la red
export const feed = () => {
  const divFeed = document.createElement("div");
  const viewFeed = `<section class="feeed">
      <section>
        <img src="./images/user.png" alt="imagenPerfil">
        <h2> Usuario</h2>
      </section>
      <section>
      <form id="postform" class="postform">
      <input type="text" name="postTitle" id="postTitle" class="possTitle" placeholder="Tips">
      <textarea type="text" name="postText" id="postText" class="postText" rows="5" placeholder="Comparte tus tips aquí..."></textarea>
      <div class="">
      <button id="postBtn" type="submit" class="">Publicar</button>
      </div>
      </form>
      </section>
      </section>`;
  divFeed.innerHTML = viewFeed;


  //Formulario enviado a DOM
  const postForm = divFeed.querySelector("#postform");

  postForm.addEventListener("submit", (e) => {
    e.preventDefault();
    //llama al input y textarea
    const title = divFeed.querySelector("#postTitle");
    const postText = divFeed.querySelector("#postText");

    console.log(title.value);

    //obtiene el valor del titulo y el post del input y textarea
    savePost(title.value, postText.value);
    // console.log(postText.value)

    //Resetea el formulario, lo limpia
    postForm.reset();
  });


  //crea el post en tiempo real
  const createPost = async () => {
  onGetPost((snapShot) => {
    let card = "";

    const divPost = document.createElement("div");

    //recorre el array de docs de firebase
    snapShot.forEach((doc) => {
      //console.log(doc.data())
      const docData = doc.data(); //el .data() convierte los objetos firebase a obj JS
     
      card += `<div> 
        <h3>${docData.title}</h3>
        <p>${docData.text}</p>
        <button class="btnEdit" data-id="${doc.id}">Editar</button>
        <button class="btnDelete" data-id="${doc.id}">Eliminar</button>
        </div>`;
    });

    divPost.innerHTML = card;


        const btnsDelete = divPost.querySelectorAll('.btnDelete');
        btnsDelete.forEach(btn => {
        btn.addEventListener('click', (event) => {

            deletePost(event.target.dataset.id);
          });
        });


       const btnsEdit = divPost.querySelectorAll('.btnEdit');
       btnsEdit.forEach(btn => {
           btn.addEventListener('click', async (event) => {
              
               const doc = await editPost(event.target.dataset.id);
               
              const docData = doc.data();
   
              const title = divFeed.querySelector('#postTitle');
              const postText = divFeed.querySelector("#postText");

              title.value = docData.title;
              postText.value = docData.text;
   
           });
          }); 
    
  });
  

};

console.log(createPost());

  return divFeed;
};
