import {
  creatingNewPost,
  updatingPublications , editingPublication ,
  deletingPublication,
  getPublication,
  editingComment,
} from "../firebase-doc/firestore.js";
import { logOut } from "../firebase-doc/authentication.js";
import { auth, getDocs, collection, db, updateDoc } from "../firebase-doc/firebase.js";
import { changeRoute } from "../lib/router.js";

export const wall = () => {
  const wallP = `
<div class="wallView">
      <header>
          <img src = "Social-Images/logoWall.png">
          <a href="#/bullyingForm" id="bForm"><strong>Te Escuchamos</strong></a>
          <button class= "logOutWall" id="logOut">
          <img src = "../Social-Images/log-Out-icon.png">
          </button>
      </header>
     <div class="publication-area">
     <textarea placeholder="Ingrese su publicación" cols="40" rows="5" id="publication"></textarea>
     <button class="publish" id="publish" type="submit"><strong>PUBLICAR</strong></button>
     </div>
     <div class= "wall" id="wall">

     </div>
      </div>
      `;
  const container = document.createElement("div");
  container.innerHTML = wallP;
  container.className = "wallViewContainer";

  const publishButton = container.querySelector("#publish");

  publishButton.addEventListener("click", async () => {
    const commentContainer = container.querySelector("#publication");
    let comment = commentContainer.value;
    if (comment) {
    try {
      await creatingNewPost(comment);
      commentContainer.value = "";
      console.log("prueba");
      return creatingNewPost;
    } catch (error) {
      return console.log("error");
    } } else {alert('Por favor ingrese su comentario.')}
  });

  const allPublications = async () => {
    let publicationsContainer = container.querySelector("#wall");
    publicationsContainer.innerHTML = "";
    let publicationFrame = "";
    updatingPublications((publications) => {
      publicationFrame = "";
      publications.forEach((doc) => {
        const pub = doc.data();
        publicationFrame += `
      <div class="post">
        <div class='post-header'>
          <p class='user-info'><img class="user-photo" src="${pub.Photo}">
          <span class="user-name">${pub.Name} </span> </p>
          <p class="date">${pub.Time.toDate().toLocaleString()}</p>
          <button class="btn-edit" id = "editButton" data-id="${doc.id}">
          <img src = "../Social-Images/edit-icon.png">
          </button>
        </div>
        <div class = "middleSection">
        <p class="comment">${pub.Comment}</p>
        </div>
        <div class="post-footer">
        <button class="btn-delete" data-id="${doc.id}">
          <img src = "../Social-Images/delete-btn.png">
          </button>
        <button class="btn-like" data-id="${doc.id}">
        <img src = "../Social-Images/like-icon.png">
        </button>
        </div>
      </div>
      `;
      });
      publicationsContainer.innerHTML = publicationFrame;
      const btnDelete = container.querySelectorAll(".btn-delete");
      btnDelete.forEach((btn) => {
        btn.addEventListener("click", ({ target: { dataset } }) => {
          deletingPublication(dataset.id);
        });
      });

      /*const btnLikes = container.querySelectorAll('.btn-like');
    btnLikes.forEach(btn => {
      btn.addEventListener('click', ({target: {dataset}}) => {
        btn.classList.add('liked');
        addLike(dataset.id);
        console.log('jelou')
      })
    })*/
      //Mostrar el comentario de la publicación
      //Usuario pueda dar click en el boton y que se muestre en el text area y se oculte el comment
      //Crear boton para guardar cambios
      //Usuario puede editar texto
      //Dar click al boton de guardar cambios
      //Esconder text area y boton para guardar cambios
      //Ejecutar funcion UpdateDoc Firestore
      //Refrescar vista de publicacion con nuevo Comment de Firestore ( ver si onSnapshot actualiza el nuevo comment)
      const btnEdit = container.querySelectorAll(".btn-edit");
      btnEdit.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          const publi = await getPublication(e.target.dataset.id);
          const publiInfo = publi.data();
          console.log(publiInfo);

          const editingAreaEl = document.createElement("textarea");
          editingAreaEl.classList.add('editing-area');
          editingAreaEl.value = publiInfo.Comment;
          const postEl = btn.closest(".post");
          const paragraphEl = postEl.querySelector(".comment");
          console.log(paragraphEl);
          const middleSection = postEl.querySelector('.middleSection');
          paragraphEl.classList.add("hide");
          middleSection.appendChild(editingAreaEl);
          const saveChanges = document.createElement('button');
          saveChanges.classList.add('save-changes-btn');
          saveChanges.textContent = 'Guardar';
          middleSection.appendChild(saveChanges);
          saveChanges.addEventListener('click', async () => {
           const newComment = editingAreaEl.value;
           console.log()
            await editingPublication(e.target.dataset.id, newComment);
            console.log("prueba");
        })
        });
        
      });
    });
    return allPublications;
  };
  allPublications();

  const buttonLogOut = container.querySelector("#logOut");
  buttonLogOut.addEventListener("click", async () => {
    try {
      await logOut(auth);
      changeRoute("#/home");
      return logOut;
    } catch (error) {
      return console.log("error");
    }
  });

  return container;
};
