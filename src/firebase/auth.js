import { signInWithEmailAndPassword, auth, createUserWithEmailAndPassword} from './init.js';

const login = async (email, password) => {
	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (error) {
		throw error.message;
	}
};
const signUp = (email, password) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			// ...
			// window.location.href = '/#/viewRegExitoso';
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
		});
};



export { login };
