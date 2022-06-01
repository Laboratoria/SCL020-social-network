/* eslint-disable import/no-cycle */
import { navigate } from '../router/router.js';
import { Header } from '../utils/header.js';
import { Footer } from '../utils/footer.js';

const Post = () => {
  const template = `
    <div class="post-box">
      <img class ="user-avatar" src="../img/main-avatar.png" />
      <h3 id="user-name" class="user-name">Carlota Roma</h3>
      <textarea placeholder="What's in your mind"></textarea>
      <input id="post-submit" class="main-btn" type="submit" value="post" />
    </div>
  <div class="overlay"></div>`;

  const container = document.createElement('section');
  container.className = 'new-post';
  container.id = 'new-post';
  container.innerHTML = template;
  container.appendChild(Header());
  container.appendChild(Footer());

  const postBtn = container.querySelector('#post-submit');
  postBtn.addEventListener('click', () => { // cuando tengamos la funcionalidad esto hay que cambiarlo a submit y activar el prevent default
    // e.preventDefault();
    navigate('/home');
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
