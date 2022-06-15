import { Header } from '../utils/header.js';
import { Footer } from '../utils/footer.js';
import { likingPost, likedPosts } from '../firebase/firestore.js';

const Liked = () => {
  const container = document.createElement('div');
  container.className = 'home-page';
  const userPhoto = localStorage.getItem('userPhoto');

  const likedPostsDiv = document.createElement('div');
  likedPostsDiv.className = 'likedPostsDiv';
  const template = `
  <h1 class="tittle-liked">Checkout your favorite posts!</h1>
  `;

  likedPosts((post) => {
    container.innerHTML = '';
    let postStructure = '';

    post.forEach((doc) => {
      const posts = doc.data();
      postStructure += `
      <div class="post-liked">
        <div class='post-header'>
          <p class='user-info'><img class="user-photo" src="${userPhoto}">
          <span class="user-name">${posts.userName} posted: </span> </p>
          <p class="movie-review">${posts.review}</p>
          <p class="date">${posts.date.toDate().toLocaleString()}</p>
        </div>
        <div class="post-main">       
          <div class="movie-title">${posts.movie}</div>
          <p class='movie-country'>Country: ${posts.country} </p>
        </div>
        <div class="post-footer">
          <button class="btn-like" id="btn-like" data-id="${doc.id}">
            <i class="fas fa-heart"></i>
            <span id="like-count" class="like-count"> ${posts.likesSum} </span>
          </button>
        </div>
      </div>
      `;
    });

    likedPostsDiv.innerHTML = template;

    const middle = document.createElement('div');
    middle.className = 'middle-liked';
    middle.innerHTML = postStructure;

    middle.prepend(likedPostsDiv);

    container.append(Header(), middle, Footer());

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

export default Liked;
