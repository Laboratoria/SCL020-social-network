import { onGetTask, deleteTask, getTaskUser, /*saveUserName,*/ getTasks, UpdateTask } from "../firebase/firestore.js";
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
	arrayUnion,
	auth
} from "../firebase/init.js";

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
			<button class="btn-popCorn" data-id="${doc.id}">🍿</button>
			<p id="content">${task.like}</p>
			`
			}
			<p id="content">${task.contentPost}</p>
	
			<p id="content">@${task.username}</p>
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
			console.log(task.contentPost); /* NO LO SAQUE*/
		})
	});

	const btnLike = taskContainer.querySelectorAll(".btn-popCorn");
	btnLike.forEach(btn => {
		btn.addEventListener("click", async () => {
			
			let task = await getTasks(btn.dataset.id);
			let likesActuales = task._document.data.value.mapValue.fields.like.integerValue;
			let usuariosDieronLike = task._document.data.value.mapValue.fields.userlikes.arrayValue.values.map(x=>x.stringValue);
			if(usuariosDieronLike.includes(auth.currentUser.uid)){
				usuariosDieronLike.pop(auth.currentUser.uid);
				UpdateTask(btn.dataset.id, {
					"like": (Number(likesActuales) - 1),
					"userlikes": usuariosDieronLike
				});
			}else{
				usuariosDieronLike.push(auth.currentUser.uid);
				UpdateTask(btn.dataset.id, {
					"like": (Number(likesActuales) + 1),
					"userlikes": usuariosDieronLike
				});
			}
		});
	});

	const searchBtn = divFeed.querySelectorAll(".search-input");
	console.log(searchBtn);
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

