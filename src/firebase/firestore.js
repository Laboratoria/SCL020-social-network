import {
	db,
	addDoc,
	collection,
	getDocs,
	onSnapshot,
	query,
	doc,
	deleteDoc,
} from './init.js';

export const createPost = () => {
	const formPost = document.querySelector('#form_post');
	formPost.addEventListener('submit', (e) => {
		e.preventDefault();
		const title = formPost.postTitle.value; // asi accedo a los valores del formulario por su nombre
		const text = formPost.postText.value;
		newPost(title, text);
	});
};

export const newPost = (title, text) => {
	addDoc(collection(db, 'Comentarios'), {
		Autor: '',
		Content: text,
		Title: title,
	})
		.then(() => {
			alert('entré');
		})
		.catch(() => {
			alert('Error');
		});
};

// export const lookPost = async (callback) => {
// 	try {
// 		let dataPost = [];
// 		const respuestaDataPost = await getDocs(collection(db, 'Comentarios'));
// 		respuestaDataPost.forEach((doc) => {
// 			console.log(doc.id, ' => ', doc.data());
// 			dataPost.push({ id: doc.id, data: doc.data() });
// 		});
// 		console.log(dataPost);
// 		// return dataPost;
// 		onSnapshot(dataPost, callback);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

export const snapshot = (callback) => {
	const q = query(collection(db, 'Comentarios'));
	onSnapshot(q, callback);
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

// const btnDelete = document.querySelectorAll('.btn_Delete_Post');
// btnDelete.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	// deletePost(doc.id);
// 	console.log('valor', e.target.value);
// });

// export const funcionaPorfavor = () => {
// 	const btnDeletePost = document.querySelectorAll('.pruebaBtnDelete');
// 	btnDeletePost.forEach((btnDelete) => {
// 		btnDelete.addEventListener('submit', function (event) {
// 			alert('escuche el id');
// 			event.preventDefault();
// 			// const id = btnDelete.id.split('-')[1];
// 			const id =
// 				event.target.parentElement.parentElement.parentElement.getAttribute(
// 					'data-postid',
// 				);
// 			console.log('idprobando', id);
// 			deletePost(id);
// 		});
// 	});
// };

// const eraseBtns = document.querySelectorAll('#eraseOption');
// eraseBtns.forEach((btn) => {
// 	btn.addEventListener('click', (event) => {
// 		event.preventDefault();
// 		const postId =
// 			event.target.parentElement.parentElement.parentElement.getAttribute(
// 				'data-postid',
// 			);
// 		console.log(postId);
// 		deletePost(postId);
// 	});
// });
