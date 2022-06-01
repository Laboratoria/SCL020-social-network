//import { navigate } from '../router/router.js';
//import { out } from '../firebase/auth.js';
import { Header } from '../utils/header.js';
import { Footer } from '../utils/footer.js';

const Home = () => {
  const template = `
  
  <!--<button id="sign-out" class="main-btn">Sign Out</button>-->
  <h1 style="text-align:center">Por ahora soy vista Home</h1>`;

  const container = document.createElement('div');
  container.className = 'home-page';
  container.innerHTML = template;
  container.classList.add = 'container';

  container.append(Header(), Footer());

/*   const buttonOut = container.querySelector('#sign-out');
  buttonOut.addEventListener('click', () => {
    out();
    navigate('/');
  }); */

  return container;
};

export default Home;