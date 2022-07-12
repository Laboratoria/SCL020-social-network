import { interpLogIn } from '../lib/views/viewLogIn.js';
import { createUserEmail, interpSignUp } from '../lib/views/viewSignUp.js';
import {
	functionDataProfile,
	functionSwitch,
	interpHome,
	interpHomePost,
	logOutFunction,
} from '../lib/views/viewHome.js';
import { interpPostProfile, interpProfile, modalEditAction } from '../lib/views/viewProfile.js';
import { interp404 } from '../lib/views/view404.js';
import { interpRegExitoso } from '../lib/views/viewRegistroExitoso.js';
import { createPost } from '../firebase/firestore.js';
import { signInFunction, signInFunctionGoogle } from '../firebase/auth.js';

export const changeRoute = (hash) => {
	const root = document.getElementById('root');
	switch (hash) {
		case '#/':
			root.appendChild(interpLogIn());
			signInFunction(); //esto es solo el llamado de la funcion para que se inicializara (se puede ocupar)
			signInFunctionGoogle();
			functionSwitch();
			break;
		case '#/viewSignUp':
			root.appendChild(interpSignUp());
			createUserEmail();
			functionSwitch();
			break;
		case '#/viewHome':
			root.appendChild(interpHome());
			interpHomePost();
			createPost();
			functionSwitch();
			// lookPost();
			logOutFunction();
			// deletePost();
			// funcionaPorfavor();
			functionDataProfile();
			break;
		case '#/viewProfile':
			root.appendChild(interpProfile());
			logOutFunction();
			interpPostProfile();
			functionSwitch();
			modalEditAction();
			break;
		case '#/viewRegistroExitoso':
			root.appendChild(interpRegExitoso());
			functionSwitch();
			// debo tener tantos casos como vistas hay
			break;
		default:
			root.appendChild(interp404());
	}
};
