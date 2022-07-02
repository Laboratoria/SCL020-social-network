import { signInWithEmailAndPassword, auth, createUserWithEmailAndPassword} from './init.js';

const login = async (email, password) => {
	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (error) {
		throw error.message;
	}
};

export const signInFunction = () => {   //funcion llamada en el router cuando se inicializa
	const signInForm = document.querySelector('#form_login');
	signInForm.addEventListener('submit', (event) => {
	  event.preventDefault();
	  const email = signInForm.email.value;
	  const password = signInForm.password.value;
	// console.log(email, password);   // se muestra en consola al ingresar datos y apretar el boton siguiente
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			// ...
			window.location.href = '/#/viewHome';
		})
		.catch((error) => {
			console.log(error.message);
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
		});
	}
)}; 



export const signCreate = (email, password) => {   //esta es la forma que mas se usa...
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			// ...
			window.location.href = '/#/viewRegistroExitoso';
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
		});
};



export { login };
