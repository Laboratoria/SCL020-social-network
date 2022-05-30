import { navigate } from '../router/router.js';

export const Footer = () => {
  const template = `
  <button id="mapButton">map</button>
  <button id="postButton">+</button>
  <button id="searchImg">
    <i class="fas fa-search"></i>
  </button>
    `;

  const container = document.createElement('footer');
  container.className="footer";
  container.innerHTML = template;

  const buttonMap = container.querySelector('#mapButton');
  buttonMap.addEventListener('click', () => {
    navigate('/map');
  });

  const postBtn = container.querySelector('#postButton');
  postBtn.addEventListener('click', () => {
      navigate('/post');
  });

  const searchBtn = container.querySelector('#searchImg');
  searchBtn.addEventListener('click', () => {
    console.log('dando click botón buscar');
  });

  return container;
};
