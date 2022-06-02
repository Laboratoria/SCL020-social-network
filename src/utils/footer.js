//import { createData } from '../firebase/firestore.js';
import { navigate } from '../router/router.js';

export const Footer = () => {
  const template = // HTML
  `
  <button id="mapButton">map</button>
  <button id="postButton">+</button>
  <button id="searchImg">
    <i class="fas fa-search"></i>
  </button>
    `;

  const container = document.createElement('footer');
  container.className = 'footer';
  container.innerHTML = template;

  // btn to to map view
  const buttonMap = container.querySelector('#mapButton');
  buttonMap.addEventListener('click', () => {
    navigate('/map');
    //createData();
  });

  // Central btn to create a new post
  const postBtn = container.querySelector('#postButton');
  postBtn.addEventListener('click', () => {
    navigate('/post');
  });

  // btn to search - filter posts
  const searchBtn = container.querySelector('#searchImg');
  searchBtn.addEventListener('click', () => {
    console.log('dando click botón buscar');
  });

  return container;
};

export default Footer;