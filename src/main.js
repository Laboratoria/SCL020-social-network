// Este es el punto de entrada de tu aplicacion, main enlaza HTML con toda la logica de  usabilidad de la pag. con router
// y con index
import { interpLogIn } from './lib/views/viewLogIn.js';
// import { interpSignUp } from './lib/views/viewSignUp.js';
import { changeRoute } from './router/router.js';

// import { db, signInWithEmailAndPassword, auth } from './firebase/init.js';
// import {
// 	collection,
// 	getDocs,
// } from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js';

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

// Autenticación y post firebase

// const auth = getAuth();
// const email = 'hola@hola.com';
// const password = 'holahola';
// signInWithEmailAndPassword(auth, email, password)
// 	.then((userCredential) => {
// 		console.log('🚀 ~ userCredential', userCredential);
// 		// Signed in
// 		const user = userCredential.user;
// 		// ...
// 	})
// 	.catch((error) => {
// 		console.log('🚀 ~ error', error);
// 		const errorCode = error.code;
// 		const errorMessage = error.message;
// 	});

// const getPosts = async (db) => {
// 	console.log('🚀 ~ db', db);
// 	const postsCol = await collection(db, 'posts');
// 	console.log('🚀 ~ postsCol', postsCol);
// 	const postsSnapshot = await getDocs(postsCol);
// 	console.log('🚀 ~ postsSnapshot', postsSnapshot);
// 	const postsList = await postsSnapshot.docs.map((doc) => doc.data());
// 	console.log('🚀 ~ postsList', postsList);
// 	return postsList;
// };
// const posts = getPosts(db);
// console.log('🚀 ~ posts', posts);
