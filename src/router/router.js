import { interpLogIn } from '../lib/views/viewLogIn.js';
import { interpSignUp } from '../lib/views/viewSignUp.js';
import { interpHome } from '../lib/views/viewHome.js';
import { interpProfile } from '../lib/views/viewProfile.js';
import { interp404 } from '../lib/views/view404.js';

export const changeRoute = (hash) => {
	const root = document.getElementById('root');
	switch (hash) {
		case '#/':
			root.appendChild(interpLogIn());
			break;
		case '#/viewSignUp':
			root.appendChild(interpSignUp());
			break;
		case '#/viewHome':
			root.appendChild(interpHome());
			break;
		case '#/viewProfile':
			root.appendChild(interpProfile());
			break;
		// debo tener tantos casos como vistas hay
		default:
			root.appendChild(interp404());
	}
};
