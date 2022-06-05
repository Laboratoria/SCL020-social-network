import { navigate } from '../router/router.js';
import { Header } from '../utils/header.js';
import { Footer } from '../utils/footer.js';

const Map = () => {
  const template = // HTML
`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d50079925.30361331!2d-57.02526875907844!3d39.99423763844563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scl!4v1654391258444!5m2!1ses-419!2scl" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

  const container = document.createElement('div');
  container.className = 'map-page';
  container.innerHTML = template;
  container.append(Header(), Footer());
/* 
  const pathLink = container.querySelector('path');
  pathLink.addEventListener('click', () => {
    navigate('/home');
  }); */
  return container;
};


export default Map;
