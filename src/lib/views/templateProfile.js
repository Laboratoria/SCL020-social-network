import { saveTask, getTask, onGetTask, deleteTask} from "../../firebase/firestore.js";
import { feed } from "./templateFeed.js";

export const profile = () => {
    const divProfile = document.createElement("div");
    const viewProfile = //html
    `
        <main class="container-profile">
            <nav class="nav-web">
                <div class="sub-nav-web">
                    <div class="containter-logo-ticket"><img class ="logo-navweb" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-removebg-preview.png?raw=true" alt="logo-ticket"></div>
                    <div class="search-bar">
                        <div class="search-box">
                            <input class="search-input"type="text" name="" placeholder="Search...">
                            <button class="search-button" href="#">
                                <i class="material-icons">🔍︎</i>
                            </button>
                        </div>
                    </div>
                    <a class="profile-web" href="#/feed"><img class ="navweb-logos" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-feed.png?raw=true" alt="logo-ticket"></a>
                    <a class="profile-web" href="#/logoutConfirmation"><img class ="navweb-logos" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-signout%20(1).png?raw=true" alt="logo-ticket"></a>
                </div>
            </nav>
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





            <div class="web-box">
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
                <div id="feed-post" class="web-post">
                </div>
                </div>
            </div>
        </main>
    `
    divProfile.innerHTML = viewProfile;

    const formPost = divProfile.querySelector(".formPost");
    const taskContainer = divProfile.querySelector("#feed-post");


    formPost.addEventListener("submit", async(e) => {
        e.preventDefault();
        // console.log("submit");
        const contentPost = formPost["inputForm"].value;
        saveTask(contentPost);
        formPost.reset(); 

        onGetTask((querySnapshot) => {
            let html = "";
            querySnapshot.forEach(doc => {
                // console.log(doc);
                const task = doc.data();
                html += //html 
                `
                    <div class="post-box">
                        <button class="btn-edit">Edit</button>
                        <button class="btn-delete" data-id="${doc.id}">Delete</button>
                        <p>${task.contentPost}</p>
                    </div>
                `;
            });
            taskContainer.innerHTML = html;
            
            const btnsDelete = taskContainer.querySelectorAll(".btn-delete");
            btnsDelete.forEach( btn => {
                btn.addEventListener("click", async () => {
                    //e.preventDefault();
                    const deleteConfirm = confirm("¿Are you sure that you want to delete this post?");
                    if(deleteConfirm === true) {
                        await deleteTask(btn.dataset.id)
                        alert("Post has been deleted");
                    }
                })
            })
            
        })
    })    
    return divProfile;
}



/* <button class="btn-popCorn">PopCorn</button> */

