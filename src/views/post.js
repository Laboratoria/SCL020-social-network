/* eslint-disable import/no-cycle */
import { navigate } from '../router/router.js';
import { Header } from '../utils/header.js';
import { Footer } from '../utils/footer.js';
import { createPost } from '../firebase/firestore.js';
import { printing } from './home.js';

const Post = () => {
  const template = // HTML
  ` <div class="post-box" >
  <form id="postBox">
      <img class ="user-avatar" src="../img/main-avatar.png" />
      <h3 id="user-name" class="user-name">Carlota Roma</h3>
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

  const postBtn = container.querySelector('#postBox');
  postBtn.addEventListener('submit', async (e) => {
    e.preventDefault();
    const textPost = container.querySelector('#textPost').value;
    try {
      await createPost(textPost);
      await printing();
      postBtn.reset();
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  });

  return container;
};

export default Post;

/* $(document).ready(() => {
  $('.text').click(() => {
    $('.overlay').fadeIn(500);
  });
  $('.overlay').not('.text').click(() => {
    $('.overlay').fadeOut(500);
  });
  $('[type = submit]').click(() => {
    const post = $('textarea').val();
    $(`<p class='post'>${post}</p>`).appendTo('section');
  });
});
 */
