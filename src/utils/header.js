import { navigate } from '../router/router.js';
import { out } from "../firebase/auth.js";

export const Header = () => {
  const template = `
  <img class="brand-logo" src="../img/brand-logo.png" />
  <div class="search-box">
      <input type="text" class="search-input" placeholder="Search..">
      <button class="search-button">
          <i class="fas fa-search"></i>
      </button>
  </div>
  <img class="main-avatar" src="../img/main-avatar.png" />
  <button id="sign-out" class="signout-btn">Sign Out</button>`;

  const container = document.createElement('header');
  container.className = 'header';
  container.innerHTML = template;

  // Search btn
  const searchBtn = container.querySelector('.search-button');
  searchBtn.addEventListener('click', () => {
    console.log('dando click botón buscar');
  });

  // Redirection logo to home
  const logoHome = container.querySelector('.brand-logo');
  logoHome.addEventListener('click', () => {
    navigate('/home');
  });

  // Sign out btn
  const buttonOut = container.querySelector('#sign-out');
  buttonOut.addEventListener('click', () => {
    out();
    navigate('/');
  });

  return container;
};
