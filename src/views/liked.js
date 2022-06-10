// import { navigate } from '../router/router.js';
// import { out } from '../firebase/auth.js';
import { Header } from '../utils/header.js';
import { Footer } from '../utils/footer.js';
import { likingPost, likedPosts } from '../firebase/firestore.js';

const Liked = () => {
  const container = document.createElement('div');
  container.className = 'home-page';

  likedPosts((post) => {
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
              <p class='info'><b>País:</b> ${posts.country} </p>
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

    const middle = document.createElement('div');
    middle.className = 'middle';
    middle.innerHTML = postStructure;
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

