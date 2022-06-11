import { navigate } from '../router/router.js';
import { out } from '../firebase/auth.js';
import logoUrl from '../img/brand-logo.png';
import avatarUrl from '../img/main-avatar.png'

export const Header = () => {
  const template = // HTML
  `
  <img class="brand-logo" src="${logoUrl}" />
  <div class="search-box">
      
      <input type="text" class="search-input" placeholder="Search..">
      <button class="search-button"><i class="fas fa-search"></i></button>
      
  </div>
  <div class="dropdown">
    <img type="checkbox" id="main-avatar" class="main-avatar" src="${avatarUrl}" />
     <div class="dropdown-content">
     <a id="profile">Profile</a>
     <a id="liked">Liked</a>
     <a id="sign-out">Sign Out</a>
    </div>
  </div>
  `;

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

  // Hamburguer  btn to profile view
  const userAvatar = container.querySelector('#profile');
  userAvatar.addEventListener('click', () => {
    navigate('/profile');
  });

  // Hamburguer btn to likes view
  const likedToBtn = container.querySelector('#liked');
  likedToBtn.addEventListener('click', () => {
    navigate('/liked');
  });


  // Hamburguer Sign out btn
  const buttonOut = container.querySelector('#sign-out');
  buttonOut.addEventListener('click', () => {
    out();
    navigate('/');
  });

  return container;
};

export default Header;