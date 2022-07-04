import { interpLogIn } from '../lib/views/viewLogIn.js';
import { createUserEmail, interpSignUp } from '../lib/views/viewSignUp.js';
import { interpHome, interpHomePost } from '../lib/views/viewHome.js';
import { interpProfile } from '../lib/views/viewProfile.js';
import { interp404 } from '../lib/views/view404.js';
import { interpRegExitoso } from '../lib/views/viewRegistroExitoso.js';
import { createPost, lookPost } from '../firebase/firestore.js';
import { signInFunction } from '../firebase/auth.js';



export const changeRoute = (hash) => {
	const root = document.getElementById('root');
	switch (hash) {
		case '#/':
			root.appendChild(interpLogIn());
			signInFunction();  //esto es solo el llamado de la funcion para que se inicializara (se puede ocupar)			
			break;
		case '#/viewSignUp':
			root.appendChild(interpSignUp());
			createUserEmail();
			break;
		case '#/viewHome':
			root.appendChild(interpHome());
			interpHomePost();
			createPost();
			lookPost();
			break;
		case '#/viewProfile':
			root.appendChild(interpProfile());
			break;
		case "#/viewRegistroExitoso":
			root.appendChild(interpRegExitoso());
		// debo tener tantos casos como vistas hay
		default:
			root.appendChild(interp404());
	}
};
