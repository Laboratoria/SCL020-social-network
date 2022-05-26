/* eslint-disable import/no-unresolved */
import { navigate } from '../router/router.js';

const Post = () => {
  const template = `
<section id="new-post" class="new-post">
    <div class="post-box">
      <img class ="user-avatar" src="#" />
      <h3 id="user-name" class="user-name">Carlota Roma</h3>
      <textarea placeholder="What's in your mind"></textarea>
      <input id="post-submit" class="post-submit" type="submit" value="post" />
    </div>
  </section>

  <div class="overlay"></div>`;

  const container = document.createElement('div');
  container.innerHTML = template;

  const postBtn = container.querySelector('#post-submit');
  postBtn.addEventListener('click', () => { // cambiarlo a submit y activar el prevent default
    // e.preventDefault();
    navigate('/');
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
