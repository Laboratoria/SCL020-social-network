import { onGetTask, deleteTask, getTaskUser, /*saveUserName,*/ getTasks} from "../firebase/firestore.js";
// import { taskContainer } from "./views/templateFeed.js";
import {
	db,
	collection,
	addDoc,
	getDocs,
	onSnapshot,
	deleteDoc,
	doc,
	getDoc,
	arrayUnion} from "../firebase/init.js";

	export const posts = (querySnapshot, divFeed, containerRoot, where) => {
	const taskContainer = divFeed.querySelector(".container-post");
	let html = "";

		querySnapshot.forEach((doc) => {
		const task = doc.data();

		html +=//html
		`
        <div class="post-box">
			${where === "profile" 
			? `
			<button class="btn-edit" data-id="${doc.id}">&#9997;</button>
			<button class="btn-delete" data-id="${doc.id}">&#128465;</button>
			`:
			`
			<button class="btn-popCorn">🍿</button>
			` 
			}
			<p id="content">${task.contentPost}</p>
        </div>
		`
	});



	taskContainer.innerHTML = html;
	containerRoot.innerHTML = "";
	containerRoot.appendChild(divFeed);


	// containerRoot.innerHTML = divFeed.innerHTML;




	const btnsDelete = taskContainer.querySelectorAll(".btn-delete");

	btnsDelete.forEach(btn => {
		btn.addEventListener("click", async () => {
				
		const deleteConfirm = confirm("¿Are you sure you want to delete this post?");
			if (deleteConfirm === true) {
				await deleteTask(btn.dataset.id)
				alert("Post has been deleted");
			}
		})
	});

	const btnsEdit = taskContainer.querySelectorAll(".btn-edit");
	btnsEdit.forEach(btn => {
		btn.addEventListener("click", async (e) => {
	
		const doc = await getTasks(e.target.dataset.id);
		const task = doc.data().content;
		const edited = taskContainer.innerHTML = task;
		console.log(edited);
		// formPost[task.contentPost].value = task.contentPost;
		// console.log(task.contentPost); /* NO LO SAQUE*/
		})
	});

		// const postId = doc.id;
		// const postUserId = task.useruid;
		const btnLike = taskContainer.querySelectorAll(".btn-popCorn");
		btnLike.forEach(btn => {
			btn.addEventListener("click", async () => {
				const docs = await getDoc(doc(db, "task"));
				console.log("sigo funcionando :c")
				console.log(docs)


			// 	const addLike =  (postId, postUserId) => {
			// 	db.collection("task").doc(postId).update({
			// 			like: arrayUnion(postUserId)
			// 	});
			// }
			// addLike(postId, postUserId);
		});
	});

	return html;
};

	export const createdPost = (divFeed, containerRoot, where) => {
	if (containerRoot === undefined) return;
	
	if (where === "profile") {
		getTaskUser((querySnapshot) => {
		posts(querySnapshot, divFeed, containerRoot, where)
		});
	} else if (where === "feed") {
		onGetTask((querySnapshot) => {
		posts(querySnapshot, divFeed, containerRoot, where)
		});
	}
};

// funcion que de like a post con el objeto addLike
// export function addLike(postId, userId) {
//     db.collection("posts").doc(postId).update({
//         likes: arrayUnion(userId)
//     })
// }

// funcion que guarde el userId en la base de datos
// export function saveUser(userId) {
//     db.collection("users").doc(userId).set({
//         userId: userId
//     })
//     return userId;
// }

// funcion que retorne el userId desde la base de datos

// const userId = getUserId();
// console.log(userId)
// export function getUser(userId) {    
//     const pepe = db.collection("users").doc(userId).get()
//     console.log(pepe)
//     return pepe
// }
	
