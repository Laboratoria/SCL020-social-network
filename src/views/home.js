//import { navigate } from '../router/router.js';
//import { out } from '../firebase/auth.js';
import { Header } from '../utils/header.js';
import { Footer } from '../utils/footer.js';
import { readingPost } from '../firebase/firestore.js';

const Home = () => {

  const container = document.createElement('div');
  container.className = 'home-page';
  const printing =async()=>{
    container.innerHTML = await readingPost();
    container.append(Header(), Footer());
  }
  printing();
  //container.classList.add = 'container';

  return container;
};

export default Home;