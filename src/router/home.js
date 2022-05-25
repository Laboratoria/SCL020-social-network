const HomeHTML = () => {
  const template = `
  <h1>home</h1>
    <button id="sign-out">Sign Out</button>`;

  const container = document.createElement('div');
  container.innerHTML = template;
  container.classList.add = 'container';

  return container;
};

const signOutLogic = (button) => {
  button.addEventListener('click', () => {
    console.log('BOTON SIGN OUT');
  });
};

function Home() {
  const homeStart = HomeHTML();
  const signOutBtn = homeStart.querySelector('#sign-out');
  signOutLogic(signOutBtn);
  console.log(homeStart);
  return homeStart;
};

export { Home };
