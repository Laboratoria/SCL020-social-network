import {
	db,
	addDoc,
	collection,
	getDocs,
	onSnapshot,
	query,
	doc,
	deleteDoc,
	auth,
	onAuthStateChanged,
} from './init.js';

export const createPost = () => {
	const formPost = document.querySelector('#form_post');
	formPost.addEventListener('submit', async (e) => {
		e.preventDefault();
		const title = formPost.postTitle.value; // asi accedo a los valores del formulario por su nombre
		const text = formPost.postText.value;
		let autor = '';
		await onAuthStateChanged(auth, (user) => {
			console.log(user);
			autor = user.email;
		});
		newPost(autor, title, text);
	});
};

export const newPost = (autor, title, text) => {
	addDoc(collection(db, 'Comentarios'), {
		Autor: autor,
		Content: text,
		Title: title,
	})
		.then(() => {
			document.querySelector('#postText').value = '';
			document.querySelector('#postTittle').value = '';
		})
		.catch(() => {
			alert('Error');
		});
};

export const snapshot = (callback) => {
	const lookPost = query(collection(db, 'Comentarios'));
	onSnapshot(lookPost, callback);
};

export const deletePost = (id) => {
	deleteDoc(doc(db, 'Comentarios', id))
		.then(() => {
			alert('Post eliminado');
		})
		.catch(() => {
			alert('Error al eliminar el post');
		});
};
