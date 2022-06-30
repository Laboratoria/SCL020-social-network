import { onGetTask } from "../firebase/firestore.js";
// import { taskContainer } from "./views/templateFeed.js";

export const createdPost = onGetTask((querySnapshot) => {
    let html = "";

    querySnapshot.forEach(doc => {
        // console.log(doc);
        const task = doc.data();
        html += //html 
        `
            <div class="post-box">
                <button class="btn-edit" data-id="${doc.id}">&#9997;</button>
                <button class="btn-delete" data-id="${doc.id}">&#128465;</button>
                <p id="content">${task.contentPost}</p>
            </div>
        `;
    });
    // taskContainer.innerHTML = html;
    // taskContainerFeed.innerHTML = html;
})

