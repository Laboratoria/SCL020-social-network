/* eslint-disable import/no-cycle */
import { navigate } from '../router/router.js';
import { out } from '../firebase/auth.js';

const Home = () => {
  const template = `
  <h1>home</h1>
  <button id="sign-out">Sign Out</button>`;

  const container = document.createElement('div');
  container.innerHTML = template;
  container.classList.add = 'container';

  const button = container.querySelector('#sign-out');
  button.addEventListener('click', () => {
    out();
    navigate('/');
  });

  return container;
};

export default Home;
