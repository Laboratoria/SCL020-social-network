import {
	signInWithEmailAndPassword,
	auth,
	createUserWithEmailAndPassword,
	provider,
	GoogleAuthProvider,
	signInWithPopup,
	signOut
} from './init.js';

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

export const accessGoogle = () => {
	signInWithPopup(auth, provider)
		.then((result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			// const credential = GoogleAuthProvider.credentialFromResult(result);
			// const token = credential.accessToken;
			// The signed-in user info.
			const user = result.user;
			console.log(user);
			window.location.href = '#/viewHome';
		})
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			// const email = error.customData.email;
			// The AuthCredential type that was used.
			// const credential = GoogleAuthProvider.credentialFromError(error);
			console.log(errorCode);
			console.log(errorMessage);
		});
};

export const signInFunctionGoogle = () => {
	//funcion llamada en el router cuando se inicializa
	const signInGoogle = document.querySelector('#button_google');
	signInGoogle.addEventListener('click', (event) => {
		event.preventDefault();
		accessGoogle();
	});
};

export const signOutSession = () => {
signOut(auth).then(() => {
	alert("Adiós");
  // Sign-out successful.
}).catch((error) => {
	alert("aún estás aquí");
  // An error happened.
});
};