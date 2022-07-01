import { creatingNewPost, updatingPublications/*, editingPublication */,
 deletingPublication, getPublication} from '../firebase-doc/firestore.js';
import { logOut } from '../firebase-doc/authentication.js';
import { auth, getDocs, collection, db } from '../firebase-doc/firebase.js';
import { changeRoute } from '../lib/router.js';

export const wall = () => {
  const wallP = 
  `
<div class="wallView">
      <header>
          <img src = "Social-Images/logoWall.png">
          <a href="#/bullyingForm" id="bForm"><strong>Te Escuchamos</strong></a>
          <button class= "logOutWall" id="logOut"><strong>Cerrar Sesión</strong></button>
      </header>
     <div class="publication-area">
     <textarea placeholder="Ingrese su publicación" cols="40" rows="5" id="publication"></textarea>
     <button class="publish" id="publish" type="submit"><strong>PUBLICAR</strong></button>
     </div>
     <div class= "wall" id="wall">

     </div>
      </div>
      `;
    const container = document.createElement('div');
    container.innerHTML = wallP;
    container.className = "wallViewContainer";
    
    const publishButton = container.querySelector('#publish');

    publishButton.addEventListener('click', async () => {
      const commentContainer = container.querySelector('#publication');
      let comment = commentContainer.value;
      try { await creatingNewPost ( comment );
      commentContainer.value = '';
      console.log('prueba')
      return creatingNewPost;
    } catch (error) { return console.log('error')}
    });

    const allPublications = async () => {
    let publicationsContainer = container.querySelector('#wall');
    publicationsContainer.innerHTML = '';
    let publicationFrame = '';
    updatingPublications((publications) => {
      publicationFrame = '';
      publications.forEach((doc) => {
        const pub = doc.data()
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
          <button class="btn-like" data-id="${doc.id}">
          </button>
          <button class="btn-delete" data-id="${doc.id}">
          <img src = "../Social-Images/delete-btn.png">
          </button>
        </div>
      </div>
      `;

    })
    publicationsContainer.innerHTML = publicationFrame;
    const btnDelete = container.querySelectorAll('.btn-delete');
    btnDelete.forEach(btn => {
         btn.addEventListener('click', ({target: {dataset}}) => {
           deletingPublication(dataset.id)
         })
       })

    const btnEdit = container.querySelectorAll('.btn-edit');
    btnEdit.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const publi = await getPublication(e.target.dataset.id);
        const publiInfo = publi.data()
        console.log(publiInfo)

      const editingAreaEl = document.createElement('textarea');
      editingAreaEl.value = {publiInfo};
      const postEl = btn.closest('.post');
      const paragraphEl = postEl.querySelector('.comment');
      console.log(paragraphEl)
      paragraphEl.classList.add('hide');
      postEl.appendChild(editingAreaEl);
      })
    })

  });
    return allPublications;
  }
  allPublications();

  // const btnDelete = container.querySelectorAll('.btn-delete');
  // btnDelete.forEach(btn => {
  //   btn.addEventListener('click', () => {
  //     console.log('borrando')
  //   })
  // })
  

  /* const editButton = container.querySelectorAll('#editButton');
   editButton.addEventListener('click', async () =>{
     try { await editingPublication(doc, id)
     } catch (error) {
       return console.log('error')
     }
   });*/
  
    const buttonLogOut = container.querySelector('#logOut');
    buttonLogOut.addEventListener('click', async () => {
      try { await logOut(auth);
        changeRoute('#/home');
        return logOut;
      } catch (error) {
        return console.log('error')
      }
    });
  
  return container;
};



