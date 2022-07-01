import { onGetTask } from "../firebase/firestore.js";
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

export const createdPost = (divFeed, containerRoot) => {
  if (containerRoot === undefined) return;
  onGetTask((querySnapshot) => {

    const taskContainer = divFeed.querySelector(".container-post");
    let html = "";
    console.log("holaa");
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      html +=
        //html
        `
                <div class="post-box">
                    <button class="btn-edit" data-id="${doc.id}">&#9997;</button>
                    <button class="btn-delete" data-id="${doc.id}">&#128465;</button>
                    <p id="content">${task.contentPost}</p>
                </div>
            `;
    });
    taskContainer.innerHTML = html;
    containerRoot.appendChild(divFeed);
    return html;
    // taskContainerFeed.innerHTML = html;
  });
}

