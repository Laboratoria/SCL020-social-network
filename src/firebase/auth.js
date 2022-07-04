import {
	signInWithEmailAndPassword,
	auth,
	createUserWithEmailAndPassword,
	getRedirectResult,
	signInWithRedirect,
	provider,
} from './init.js';

export const logIn = async function () {
	signInWithRedirect(auth, provider);
};

//Funcion que escucha evento de INGRESO correo y contraseña

export const signInFunction = () => {
	//funcion llamada en el router cuando se inicializa
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
	});
};

//Función CREAR usuario con email y contraseña

export const signCreate = (email, password) => {
	//esta es la forma que mas se usa...
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

//ACCESO CON GOOGLE

//Login Gmail

export const redirectResult = function () {
	const auth = getAuth();
	getRedirectResult(auth)
		.then((result) => {
			// This gives you a Google Access Token. You can use it to access Google APIs.
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			// The signed-in user info.
			const user = result.user;
		})
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			// const email = error.customData.email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
			// ...
		});
};

export const signInFunctionGoogle = () => {
	//funcion llamada en el router cuando se inicializa
	const signInGoogle = document.querySelector('#button_google');
	signInGoogle.addEventListener('click', (event) => {
		event.preventDefault();
		try {
			logIn();
			window.location.href = '#/viewHome';
		} catch (error) {
			throw error.message;
		}
	});
	redirectResult();
};
