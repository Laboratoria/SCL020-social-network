// import { navigate } from '../router/router.js';
// import { out } from '../firebase/auth.js';
import { Header } from '../utils/header.js';
import { Footer } from '../utils/footer.js';
import { readingPost } from '../firebase/firestore.js';

const container = document.createElement('div');

const Home = () => {
  container.className = 'home-page';

  return container;
};

// Printing posts, header and footer to home page
const refetch = async () => {
  const list = await readingPost();
  container.append(Header(), list, Footer());
};
refetch();

export { Home, refetch };
