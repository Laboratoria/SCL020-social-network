export const Header = () => {
  const template = `
  <div class="header">
    <img class="brand-logo" src="../img/brand-logo"/>
    
      <div class="search-box">
         <input type="text" class="search-input" placeholder="Search..">
         <button class="search-button">
           <i class="fas fa-search"></i>
         </button>
      </div>
   
    <img class="main-avatar" src="../img/main-avatar.png"/>
  </div>`;

  const container = document.createElement('div');
  container.innerHTML = template;

  const searchBtn = container.querySelector('.search-button');
  searchBtn.addEventListener('click', () => {
    console.log('dando click botón buscar');
  });

  return container;
};
