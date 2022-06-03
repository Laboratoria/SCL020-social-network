/* eslint-disable import/no-cycle */
import { navigate } from '../router/router.js';
import { Header } from '../utils/header.js';
import { Footer } from '../utils/footer.js';
import { createPost } from '../firebase/firestore.js';
import { printing } from './home.js';

const Post = () => {
  const template =
    // HTML
    `<div class="post-box">
    <form id="postBox">
      <img class ="user-avatar" src="../img/main-avatar.png" />
      <h3 id="user-name" class="user-name"></h3>
      <textarea id="textPost" placeholder="What's in your mind"></textarea>
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
    const textPost = container.querySelector('#textPost').value;
    //const userName = container.querySelector('#user-name');
    //userName.innerHTML = `${userName.displayName}`;
    try {
      await createPost(textPost); // calling createPost
      await printing(); // calling printing to preserve last post
      postForm.reset();
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  });

  return container;
};

export default Post;
