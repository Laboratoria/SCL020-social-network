import { signInWithEmailAndPassword, auth } from './init.js';

const login = async (email, password) => {
	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (error) {
		throw error.message;
	}
};

export { login };
