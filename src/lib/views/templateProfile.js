import { saveTask, getTask, onGetTask, deleteTask, getTasks } from "../../firebase/firestore.js";
import { feed } from "./templateFeed.js";
import { createdPost } from "../post.js";

export const profile = (containerRoot) => {

    const divProfile = document.createElement("div");
    const viewProfile = //html
        `
        <main class="container-profile">
            <nav class="nav-web">
                <div class="sub-nav-web">
                    <a href="#/feed" class="containter-logo-ticket"><img class ="logo-navweb" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-removebg-preview.png?raw=true" alt="logo-ticket"></a>
                    <div class="search-bar">
                        <div class="search-box">
                            <input class="search-input"type="text" name="" placeholder="Search...">
                            <button class="search-button" href="#">
                                <i class="material-icons">🔍︎</i>
                            </button>
                        </div>
                    </div>
                    <a class="icons-web" href="#/feed"><img class ="navweb-logos" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-feed.png?raw=true" alt="logo-ticket"></a>
                    <a class="icons-web" href="#/logoutConfirmation"><img class ="navweb-logos" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-signout%20(1).png?raw=true" alt="logo-ticket"></a>
                </div>
            </nav>
            <div class="web-box">
                <div class="user-profile">
                    <img src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-profile%20(1).png?raw=true" alt="img-user">
                    <p></p>
                    <button class="btn">Follow</button>   
                </div>
                <div class="user-data">
                    <p class="data">2.4k Followers</p>
                    <p class="data">1.6k Following</p> 
                    <p class="data">25.9k Likes</p>
                </div>
                <div class="feed-post">
                    <form class="formPost">
                        <textarea id="inputForm" type="text" minlength="1" maxlength="56" placeholder="Write here about your favorite movie..." required></textarea>
                        <button type="submit" class="btn-post">Post</button>
                    </form>
                </div>
                <div id="feed-post" class="container-post"> 
                </div>
            </div>
            <div class="container-menu">
                <div class="sub-container-menu">
                    <div class="container-img">
                        <div class="sub-container-img">
                        <a href="#/profile"><img class="img-menu" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-profile%20(1).png?raw=true" alt="logo-profile"></a>
                        </div>
                        <div class="sub-container-img">
                        <a href="#/feed"><img class="img-menu" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-feed.png?raw=true" alt="logo-feed"></a>
                        </div>
                        <div class="sub-container-img">
                        <a href="#/logoutConfirmation"><img class="img-menu" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-signout%20(1).png?raw=true" alt="logo-LogOut"></a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    `
    divProfile.innerHTML = viewProfile;

    const formPost = divProfile.querySelector(".formPost");
    const taskContainer = divProfile.querySelector("#feed-post");
    // const taskContainerFeed = feed().querySelectorAll(".post-p");
    // console.log(taskContainerFeed);

    // const btnsDelete = taskContainer.querySelectorAll(".btn-delete");
    // btnsDelete.forEach(btn => {
    //     btn.addEventListener("click", async () => {
    //         //e.preventDefault();
    //         debugger;
    //         const deleteConfirm = confirm("¿Are you sure that you want to delete this post?");
    //         if (deleteConfirm === true) {
    //             await deleteTask(btn.dataset.id)
    //             alert("Post has been deleted");
    //         }
    //     })
    // });

    // const btnsEdit = taskContainer.querySelectorAll(".btn-edit");
    // btnsEdit.forEach(btn => {
    //     btn.addEventListener("click", async (e) => {
    //         // //e.preventDefault();
    //         const doc = await getTasks(e.target.dataset.id);
    //         const task = doc.data()

    //         formPost[task.contentPost].value = task.contentPost;
    //         // console.log(task.contentPost); /* NO LO SAQUE*/
    //     })
    // });

    formPost.addEventListener("submit", async (e) => {
        e.preventDefault();
        const contentPost = formPost["inputForm"].value;
        saveTask({
            contentPost: contentPost,
        });
        formPost.reset();
    })
    createdPost(divProfile, containerRoot, "profile");
    // return divProfile;
};

/* <nav class="nav-search">
<div class="search-bar">
    <div class="search-box">
        <input class="search-input"type="text" name="" placeholder="Search...">
        <button class="search-button" href="#">
            <i class="material-icons">🔍︎</i>
        </button>
    </div>
</div>
</nav> */