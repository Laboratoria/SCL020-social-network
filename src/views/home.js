//import { navigate } from '../router/router.js';
//import { out } from '../firebase/auth.js';
import { Header } from '../utils/header.js';
import { Footer } from '../utils/footer.js';
import { printingPost } from "../firebase/firestore.js";

const container = document.createElement('div');

const home = () => {
  const template = `
  
  <h1 style="text-align:center">Por ahora soy vista Home</h1>`;

  container.className = 'home-page';
  container.innerHTML = template;

  return container;
};

const printing = async () => {
  container.innerHTML = await readingPost();
  container.append(Header(), Footer());
};
printing();


export { home, printing }