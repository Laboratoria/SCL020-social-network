// import { navigate } from '../router/router.js';
// import { out } from '../firebase/auth.js';
import { orderBy } from 'firebase/firestore';
import { Header } from '../utils/header.js';
import { Footer } from '../utils/footer.js';
import { readingPost, editPost, gettingDoc } from '../firebase/firestore.js';
import { navigate } from '../router/router.js';

const Home = () => {
  const container = document.createElement('div');
  container.className = 'home-page';

  readingPost((post) => {
    container.innerHTML = '';
    let postStructure = '';
    // console.log(post);

    post.forEach((doc) => {
      const posts = doc.data();
      postStructure += `
      <div class="post-border">
      <div class='post'>
          <div class="btns-updateDiv">
              <button class='btn-Edit' data-id='${doc.id}'>Edit</button>
              <dialog class="modal" id="modal">
                  <div class="post-box">
                      <form id="edit-modal" data-id="${doc.id}" class="edit-modal">
                          <h3 id="user-name" class="user-name">${posts.userName}</h3>
                          <textarea id="new-review">${posts.review}</textarea>
                          <p>Película<input type="text" id="new-movie" value="${posts.movie}"></p>
                          <p>País<input type="text" id="new-country" value="${posts.country}"></p>
  
                          <input id="edit-submit" class="main-btn" type="submit" value="Done" />
                      </form>
                  </div>
              </dialog>
              <button class='btn-Delete' data-id='${doc.id}'>Delete</button>
          </div>
          <span>
              <p class="date">${posts.date.toDate().toLocaleString()}</p>
          </span>
          <p class="user-container">
              <i class="user-name">${posts.userName}</i>
              dijo:
          </p>
          <div class"movie-info">
              <h3 class="movie-title">${posts.movie}</h3>
              <p class="movie-review">${posts.review}</p>
              <p class='info'><b>País:</b> ${posts.country} </p>
          </div>
      </div>
      <div class="likes-border">
          <button class="btn-like" value=${doc.id}>
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em"
                  preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <path fill="currentColor"
                      d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm4.186 10.74L12 16.926L7.814 12.74a2.745 2.745 0 0 1 0-3.907a2.745 2.745 0 0 1 3.906 0l.28.279l.279-.279a2.745 2.745 0 0 1 3.906 0a2.745 2.745 0 0 1 .001 3.907z" />
              </svg>
          </button>
      </div>
  </div>
    `;
    });

    const middle = document.createElement('div');
    middle.className = 'middle';
    middle.innerHTML = postStructure;
    container.append(Header(), middle, Footer());

    const editBtn = container.querySelectorAll('.btn-Edit');
    const modal = container.querySelector('.modal');
    const editForm = container.querySelectorAll('.edit-modal');
    console.log(editForm[0], editForm[1]);

    // Open Modal
    editBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        // console.log(doc);
        modal.showModal();

        // Edit Form
        editForm.forEach((form) => {
          form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const newReview = container.querySelector('#new-review').value;
            const newMovie = container.querySelector('#new-movie').value;
            const newCountry = container.querySelector('#new-country').value;
            await editPost(form.dataset.id, newReview, newMovie, newCountry);
            modal.close();
          });
        });
      });
    });
  });

  console.log(container);
  return container;
};

export { Home };
