import { onGetTask, deleteTask, getTaskUser, /*saveUserName,*/ getTasks, UpdateTask, getTaskUser2, onGetTask2} from "../firebase/firestore.js";
import { showTemplate  } from "./router.js";
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
			<div class="likes">
				<button class="btn-popCorn" data-id="${doc.id}">🍿</button>
				<p id="content">${task.like}</p>
			</div>
			`
			}
			<div class="content">
				<p id="content" class="content-post">${task.contentPost}</p>
				<p id="content" class="username">@${task.username}</p>
			</div>
        </div>
		`
	});

	taskContainer.innerHTML = html;
	containerRoot.innerHTML = "";
	containerRoot.appendChild(divFeed);


	// containerRoot.innerHTML = divFeed.innerHTML;

	// /*trying */
	//const btnsDelete = taskContainer.querySelectorAll(".btn-delete");
	// btnsDelete.forEach(btn => {
	// 	btn.addEventListener("click", async () => {
	// 		const showAlert=()

	// 	})
	// 	// 	const deleteConfirm = swal("¿Are you sure you want to delete this post?",{
	// 	// 		buttons:["Cancel", "Confirm"],
	// 	// 		icon: "warning",
	// 	// 	})
	// 	// 	.then(respuesta=>{
	// 	// 		if (respuesta){
	// 	// 			await deleteTask(btn.dataset.id)
	// 	// 			swal({text: "Post has been deleted", icon: "success", timer: "2000"});
	// 	// 		}
	// 	// 	})
	// 	// 	if (deleteConfirm [buttons].Confirm === true) {
	// 	// 		await deleteTask(btn.dataset.id)
	// 	// 		swal("Post has been deleted");
	// 	// 	}
	// 	// })
		
	// });


    /* *working* */
	const btnsDelete = taskContainer.querySelectorAll(".btn-delete");

	btnsDelete.forEach(btn => {
		btn.addEventListener("click", async () => {

			const deleteConfirm = confirm("¿Are you sure you want to delete this post?");
			if (deleteConfirm  === true) {
				await deleteTask(btn.dataset.id)
				swal("Post has been deleted");
			}
			getTaskUser2().then((x)=>{
				posts(x.docs, divFeed, containerRoot, where)
			});
		})
	});


	const btnsEdit = taskContainer.querySelectorAll(".btn-edit");
	btnsEdit.forEach(btn => {
		btn.addEventListener("click", async (e) => {

			const doc = await getTasks(e.target.dataset.id);
			const task = doc.data().content;
			const edited = taskContainer.innerHTML = task;
			//console.log(edited);
			//console.log(task.contentPost); /* NO LO SAQUE*/
		})
	});

	const btnLike = taskContainer.querySelectorAll(".btn-popCorn");
	// console.log("btnLike", btnLike);
	btnLike.forEach(btn => {
		//console.log("btn", btn);
		btn.addEventListener("click", async (e) => {
			
			e.preventDefault(); 
			let task = (await getTasks(btn.dataset.id)).data();
			let likesActuales = task.like;
			let usuariosDieronLike = task.userlikes;
			if(usuariosDieronLike.includes(auth.currentUser.uid)){
				usuariosDieronLike.pop(auth.currentUser.uid);
				UpdateTask(btn.dataset.id, {
					"like": (Number(likesActuales) - 1),
					"userlikes": usuariosDieronLike
				});
			}
			else{
				usuariosDieronLike.push(auth.currentUser.uid);
				UpdateTask(btn.dataset.id, {
					"like": (Number(likesActuales) + 1),
					"userlikes": usuariosDieronLike
				});
			}
			onGetTask2().then((x=>{
				posts(x.docs, divFeed, containerRoot, where);
			}));
	
		});
	});

	const searchBtn = divFeed.querySelector(".search-input");
	searchBtn.addEventListener("keyup", () => {
			const searchString = searchBtn.value;
			// console.log(searchString);
			// console.log(auth.currentUser.displayName);
			if((auth.currentUser.displayName).includes(searchString)){
				//console.log("si funciona");

			}
			else {
				//console.log("nopi fabi :c")
			}
	})
	// console.log(searchBtn);

	return html;
};

export const createdPost = (divFeed, containerRoot, where) => {
	if (containerRoot === undefined) return;

	if (where === "profile") {
		getTaskUser2().then((x)=>{
			posts(x.docs, divFeed, containerRoot, where)
		});

	} else if (where === "feed") {
		onGetTask2().then((x=>{
			posts(x.docs, divFeed, containerRoot, where)
		}));

		// onGetTask((querySnapshot) => {
		// 	posts(querySnapshot, divFeed, containerRoot, where)
		// });

	}
};

