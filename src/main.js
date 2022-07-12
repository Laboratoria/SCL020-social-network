// Este es el punto de entrada de tu aplicacion, main enlaza HTML con toda la logica de  usabilidad de la pag. con router
// y con index
import { interpLogIn } from './lib/views/viewLogIn.js';
import { changeRoute } from './router/router.js';

const init = () => {
	window.location.href = 'http://localhost:3000/#/';
	const root = document.getElementById('root');
	root.innerHTML = interpLogIn();
	window.addEventListener('hashchange', () => {
		// console.log('hash', window.location.hash);
		root.innerHTML = '';
		changeRoute(window.location.hash);
	});
};

window.addEventListener('load', init);
