import { Header } from '../utils/header.js';
import { Footer } from '../utils/footer.js';
import {
  editPost, deletePost, profilePosts, likingPost,
} from '../firebase/firestore.js';

const Profile = () => {
  const container = document.createElement('div');
  container.className = 'profile-page';
  const userPhoto = localStorage.getItem('userPhoto');

  profilePosts((post) => {
    container.innerHTML = '';
    let postStructure = '';

    post.forEach((doc) => {
      const posts = doc.data();
      postStructure += `
      <div class="post"> 
        <div class='post-header'>
        <p class='user-info'><img class="user-photo" src="${posts.photoURL}">
        <span class="user-name">${posts.userName} posted: </span> </p>
        <p class="movie-review">${posts.review}</p>
        <p class="date">${posts.date.toDate().toLocaleString()}</p>
      </div>
      <div class="post-main"> 
   
        <div class="movie-title">${posts.movie}</div>
        <p class='movie-country'>Country: ${posts.country} </p>
      </div>
      <div class="post-footer-profile">
      <button class='btn-Edit' data-id='${doc.id}'><i class="fas fa-edit"></i></button>
      <button class='btn-Delete' data-id='${doc.id}'><i class="fas fa-trash"></i></button>
        <button class="btn-like" id="btn-like" data-id="${doc.id}">
          <i class="fas fa-heart"></i>
          <span id="like-count" class="like-count"> ${posts.likesSum} </span>
        </button>
      </div>
    </div>
    <!--MODAL-->
    <dialog class="dialog-modal" data-id="${doc.id}" id="dialog-modal">
       <div class="post-box-modal">
       <div class="modal-header">
           <h4 id="user-name" class="user-name-modal">${posts.userName}</h4>
           <button id="discardButton" class="btn-discard-modal">x</button>
        </div>
           <p>Review: </p>
           <textarea id="new-review" class="new-review">${posts.review}</textarea>
           <br>
           <p>Movie:</p> <input type="text" id="new-movie" value="${posts.movie}">
           <br>
           <p>Country:</p> <input type="text" id="new-country" value="${posts.country}">
           <button id="done-button" class="main-btn">Done</button>
        </div>
     </dialog>
     <!--MODAL-->  
    `;
    });

    const middle = document.createElement('div');
    middle.className = 'middle';
    middle.innerHTML = postStructure;
    container.append(Header(), middle, Footer());

    const editBtn = container.querySelectorAll('.btn-Edit');
    const modal = container.querySelectorAll('.dialog-modal');

    // Open Modal
    editBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        modal.forEach((mod) => {
          console.log('hola');
          if (mod.dataset.id === btn.dataset.id) {
            mod.showModal();

            // Updating Post in Profile
            const doneBtn = mod.querySelector('#done-button');
            doneBtn.addEventListener('click', async () => {
              const newReview = mod.querySelector('#new-review').value;
              const newMovie = mod.querySelector('#new-movie').value;
              const newCountry = mod.querySelector('#new-country').value;
              await editPost(mod.dataset.id, newReview, newMovie, newCountry);
            });
          }
        });
      });
    });

    // Closing/discarding modal
    const discardBtn = container.querySelectorAll('#discardButton');
    discardBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        console.log('clicking before');
        modal.forEach((mod) => {
          console.log('clicking after');
          mod.close();
        });
      });
    });

    // Deleting Posts in Profile
    const deleteBtn = container.querySelectorAll('.btn-Delete');
    deleteBtn.forEach((btn) => {
      btn.addEventListener('click', async () => {
        const deleteAlert = confirm('Are you sure that you want to delete this post?');
        if (deleteAlert === true) {
          await deletePost(btn.dataset.id);
          alert('Post has been deleted');
        }
      });
    });

    // Liking a Post in Profile
    const likeBtn = container.querySelectorAll('.btn-like');
    likeBtn.forEach((btn) => {
      btn.addEventListener('click', async () => {
        // console.log(likeBtn, "dando click btn like en profile");
        await likingPost(btn.dataset.id);
      });
    });
  });

  return container;
};

export default Profile;
