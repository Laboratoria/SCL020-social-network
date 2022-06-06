/* eslint-disable import/no-cycle */
import { navigate } from '../router/router.js';
import { Header } from '../utils/header.js';
import { Footer } from '../utils/footer.js';
import { createPost} from '../firebase/firestore.js';

const Post = () => {
  const userName = localStorage.getItem('user') || 'User';
  const template =
    // HTML
    `<div class="post-box">
    <form id="postBox">
      <img class ="user-avatar" src="../img/main-avatar.png" />
      <h3 id="user-name" class="user-name">${userName}</h3>
      <textarea id="review" placeholder="Movie review"></textarea>
      <p>Película<input type="text" id="movie"></p>
      <p>País<input type="text" id="country"></p>
    
      <input id="post-submit" class="main-btn" type="submit" value="post" />
    </form>
  </div>
  <div class="overlay"></div>`;

  const container = document.createElement('section');
  container.className = 'new-post';
  container.id = 'new-post';
  container.innerHTML = template;
  container.append(Header(), Footer());

  const postForm = container.querySelector('#postBox');
  postForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const review = container.querySelector('#review').value;
    const movie = container.querySelector('#movie').value;
    const country = container.querySelector('#country').value;
  
    try {
      await createPost(review,movie,country); 
      postForm.reset();
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  });

  return container;
};

export default Post;
