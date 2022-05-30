/* eslint-disable import/no-cycle */
import { navigate } from '../router/router.js';
import { out } from '../firebase/auth.js';
import { Header } from '../utils/header.js';
import { Footer } from '../utils/footer.js';

const Home = () => {
  const template = `
  
  <button id="sign-out">Sign Out</button>`;

  const container = document.createElement('div');
  container.className = 'home-page';
  container.innerHTML = template;
  container.classList.add = 'container';

  container.appendChild(Header());
  container.appendChild(Footer());

  const buttonOut = container.querySelector('#sign-out');
  buttonOut.addEventListener('click', () => {
    out();
    navigate('/');
  });

  return container;
};

export default Home;
