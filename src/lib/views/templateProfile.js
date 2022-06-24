import { saveTask, getTask } from "../../firebase/firestore.js";

export const profile = () => {
    const divProfile = document.createElement("div");
    const viewProfile = //html
    `
        <main class="profile">
            <nav class="nav-burguer-search">
                <div class="menu-feed">
                    <a href="#/menu">
                        <div class="hamburger">
                            <span class="top-bun"></span>
                            <span class="stuffing"></span>
                            <span class="bottom-bun"></span>
                        </div>
                    </a>
                </div> 

                <div class="search-bar">
                    <div class="search-box">
                        <input class="search-input"type="text" name="" placeholder="Search...">
                        <button class="search-button" href="#">
                            <i class="material-icons">🔍︎</i>
                        </button>
                    </div>
                </div>
            </nav>
            <div class="user-profile">
                <img src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-profile%20(1).png?raw=true" alt="img-user">
                <p>@user_name</p>
                <button>Follow</button>   
            </div>
            <div class="user-data">
                <p class="data">2.4k Followers</p>
                <p class="data">1.6k Following</p> 
                <p class="data">25.9k Likes</p>
            </div>
            <div class="feed-post">
                <form class="formPost">
                    <textarea id="inputForm" type="text" placeholder="Write here about your favorite movie..."></textarea>
                    <button type="submit" class="btn-post">Post</button>
                </form>
            </div>
            <form id="feed-post" class="feed-post">
                <button class="btn-popCorn">PopCorn</button>
            </form>
                <!-- <button class="btn-comment">Comment</button> -->
        </main>
    `
    divProfile.innerHTML = viewProfile;

    const formPost = divProfile.querySelector(".formPost");
    const taskContainer = divProfile.querySelector("#feed-post");

    // window.addEventListener("DOMContentLoaded", async () => {
    //     const querySnapshot = await getTask()

    //     let html = "";

    //     querySnapshot.forEach(doc => {
    //         const task = doc.data();
    //         html += //html 
    //         `
    //             <div class="p-post">
    //                 <button class="btn-edit">Edit</button>
    //                 <a href="#/deleteComment"><button class="btn-delete">Delete</button></a>
    //                 <p>${task.contentPost}</p>
    //             </div>
    //         `
    //         console.log(task.contentPost)
    //         taskContainer.innerHTML = html
            
    //     });
    // })


    formPost.addEventListener("submit", async(e) => {
        e.preventDefault();
        debugger
        console.log("submit");

        const contentPost = formPost["inputForm"].value;
        saveTask(contentPost);
        formPost.reset(); 

        const querySnapshot = await getTask()
        console.log(querySnapshot)

        let html = "";

        querySnapshot.forEach(doc => {
            console.log(doc);
            const task = doc.data();
            html += //html 
            `
                <div class="p-post">
                    <button class="btn-edit">Edit</button>
                    <a href="#/deleteComment"><button class="btn-delete">Delete</button></a>
                    <p>${task.contentPost}</p>
                </div>
            `
            console.log(task.contentPost)
            taskContainer.innerHTML = html
            
        })
    })



    
    return divProfile;
}