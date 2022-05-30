import { navigate } from '../router/router.js';
export const Header = () => {
  const template = `
    <img class="brand-logo" src="../img/brand-logo.png"/>
    <div class="search-box">
      <input type="text" class="search-input" placeholder="Search..">
      <button class="search-button">
      <i class="fas fa-search"></i>
      </button>
    </div>
    <img class="main-avatar" src="../img/main-avatar.png"/>`;

  const container = document.createElement('header');
  container.className="header";
  container.innerHTML = template;

  const searchBtn = container.querySelector('.search-button');
  searchBtn.addEventListener('click', () => {
    console.log('dando click botón buscar');
  });

  const logoHome = container.querySelector('.brand-logo');
  logoHome.addEventListener('click', ()=>{
    navigate('/home')
  })

  return container;
};
