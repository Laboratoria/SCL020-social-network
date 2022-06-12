import { Header } from '../utils/header.js';
import { Footer } from '../utils/footer.js';
import {
  readingPost, editPost, gettingDoc, deletePost, likingPost,
} from '../firebase/firestore.js';

const Home = () => {
  const container = document.createElement('div');
  container.className = 'home-page';

  const homeIntro = document.createElement('div');
  homeIntro.className = 'home-intro';

  const template = `
  <h3 class="brand-slogan">Travel through films!</h3>
  <h2 class="brand-intro">Truly unique. Usually whimsy 🤩</h2>
  <h3 class="brand-info">Share film locations around the world. Inpire others to visit!</h3>
  `;

  readingPost((post) => {
    container.innerHTML = '';
    let postStructure = '';
    // console.log(post);

    post.forEach((doc) => {
      const posts = doc.data();
      postStructure += `
      <div class="post-border">
      <div class='post'>
          <span>
              <p class="date">${posts.date.toDate().toLocaleString()}</p>
          </span>
          <p class="user-container">
              <i class="user-name">${posts.userName}</i>
          </p>
          <div class"movie-info">
              <h3 class="movie-title">${posts.movie}</h3>
              <p class="movie-review">${posts.review}</p>
              <p class='info'><b>Country:</b> ${posts.country} </p>
          </div>
      </div>
      <div class="likes-border">
          <button class="btn-like" id="btn-like" data-id="${doc.id}">
          <i class="fas fa-heart"></i>
          </button>
          <span id="like-count" class="like-count"> ${posts.likesSum} Likes</span>
      </div>
  </div>
    `;
    });

    homeIntro.innerHTML = template;

    const middle = document.createElement('div');
    middle.className = 'middle';
    middle.innerHTML = postStructure;
    middle.prepend(homeIntro);
    container.append(Header(), middle, Footer());

    const editBtn = container.querySelectorAll('.btn-Edit');
    const modal = container.querySelectorAll('.dialog-modal');

    // Open Modal
    editBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        modal.forEach((mod) => {
          if (mod.dataset.id === btn.dataset.id) {
            mod.showModal();

            // Updating Post
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

    // Deleting Post
    const deleteBtn = container.querySelectorAll('.btn-Delete');
    deleteBtn.forEach((btn) => {
      btn.addEventListener('click', async () => {
        await deletePost(btn.dataset.id);
      });
    });

    // Liking a Post
    const likeBtn = container.querySelectorAll('.btn-like');
    likeBtn.forEach((btn) => {
      btn.addEventListener('click', async () => {
        // console.log('click btn like, home');
        await likingPost(btn.dataset.id);
      });
    });
  });

  return container;
};

export { Home };
