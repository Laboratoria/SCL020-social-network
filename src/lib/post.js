import { onGetTask, deleteTask, getTaskUser } from "../firebase/firestore.js";
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
} from "../firebase/init.js";


export const Posts = (querySnapshot, divFeed, containerRoot, where) => {
  const taskContainer = divFeed.querySelector(".container-post");
  let html = "";
  console.log("holaa");

  querySnapshot.forEach((doc) => {
    const task = doc.data();
    html +=
      //html
      `
              <div class="post-box">
                ${where === "profile"
        ?
        `<button class="btn-edit" data-id="${doc.id}">&#9997;</button>
                <button class="btn-delete" data-id="${doc.id}">&#128465;</button>`
        :
        ""
      }

                  <p id="content">${task.contentPost}</p>
              </div>
          `;
  });

  taskContainer.innerHTML = html;
  containerRoot.innerHTML = "";
  containerRoot.appendChild(divFeed);
  // containerRoot.innerHTML = divFeed.innerHTML;
  const btnsDelete = taskContainer.querySelectorAll(".btn-delete");
  btnsDelete.forEach(btn => {
    btn.addEventListener("click", async () => {
      //e.preventDefault();
      debugger;
      const deleteConfirm = confirm("¿Are you sure that you want to delete this post?");
      if (deleteConfirm === true) {
        await deleteTask(btn.dataset.id)
        alert("Post has been deleted");
      }
    })
  });

  const btnsEdit = taskContainer.querySelectorAll(".btn-edit");
  btnsEdit.forEach(btn => {
    btn.addEventListener("click", async (e) => {
      // //e.preventDefault();
      const doc = await getTasks(e.target.dataset.id);
      const task = doc.data()

      formPost[task.contentPost].value = task.contentPost;
      // console.log(task.contentPost); /* NO LO SAQUE*/
    })
  });

  return html;
}
export const createdPost = (divFeed, containerRoot, where) => {
  if (containerRoot === undefined) return;
debugger;
  if (where === "profile") {
    getTaskUser((querySnapshot) => {
      Posts(querySnapshot, divFeed, containerRoot, where);
      // taskContainerFeed.innerHTML = html;
    });
  } else if (where === "feed") {
    onGetTask((querySnapshot) => {
      Posts(querySnapshot, divFeed, containerRoot, where);
      // taskContainerFeed.innerHTML = html;
    });
  }

}

