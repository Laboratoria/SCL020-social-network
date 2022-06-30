import { getTask } from "../../firebase/firestore.js";
import { createdPost } from "../post.js";
export const feed = () => {
    const divFeed = document.createElement("div");
        divFeed.setAttribute("class", "divFeed");

    const viewFeed = //html
    `
        <div class="menu-display">
            <div class="container-menu">
                <div class="sub-container-menu">
                    <a href="#/feed"><button class="btn-backFeed"><img src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/return.png?raw=true" alt="btn-backFeed"></button></a>
                    <div class="container-img">
                        <div class="sub-container-img">
                            <img class="img-menu" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-profile%20(1).png?raw=true" alt="logo-profile">
                            <a href="#/profile">Profile</a>
                        </div>
                        <div class="sub-container-img">
                            <img class="img-menu" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-feed.png?raw=true" alt="logo-feed">
                            <a href="#/feed">Feed</a>
                        </div>
                        <div class="sub-container-img">
                            <img class="img-menu" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-signout%20(1).png?raw=true" alt="logo-LogOut">
                            <a href="#/logoutConfirmation">Log out</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <main class="container-feed">
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
                        <a class="icons-web" href="#/profile"><img class ="navweb-logos" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-profile%20(1).png?raw=true" alt="logo-ticket"></a>
                        <a class="icons-web" href="#/logoutConfirmation"><img class ="navweb-logos" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-signout%20(1).png?raw=true" alt="logo-ticket"></a>
                    </div>
                </nav>
                <nav class="nav-search">
                    <div class="search-bar">
                        <div class="search-box">
                            <input class="search-input" type="text" name="" placeholder="Search...">
                            <button class="search-button" href="#">
                                <i class="material-icons">🔍︎</i>
                            </button>
                        </div>
                    </div>
                </nav>
            <div class="web-box">
                <div class="movies">
                    <button><img class="movie-rank" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/dc%20strange.png?raw=true" alt="movie-rank"></button>
                    <button><img class="movie-rank" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/jurassic%20wrld.png?raw=true" alt="movie-rank"></button>
                    <button><img class="movie-rank" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/maverick.png?raw=true" alt="movie-rank"></button>
                    <button><img class="movie-rank" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/the%20batman.png?raw=true" alt="movie-rank"></button>
                    <button><img class="movie-rank" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/thor.png?raw=true" alt="movie-rank"></button>
                </div>   
                <div class="container-post">
                    <div class="post">
                        <div class="user-info">
                            <img src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-user-post1.png?raw=true" alt="user-img">
                            <p>@User_name</p>
                        </div>
                        <p class="post-p">Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
                        <button class="btn-popCorn">🍿</button>
                    </div>
                    <div class="post">
                        <div class="user-info">
                            <img src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-user-post1.png?raw=true" alt="user-img">
                            <p>@user_name</p>
                        </div>
                        <p class="post-p" >Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
                        <button class="btn-popCorn">🍿</button>
                    </div> 
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

    const taskContainer = divFeed.querySelector(".post");

    window.addEventListener("DOMContentLoaded", async () => {
        const querySnapshot = await createdPost();
        console.log(querySnapshot);
    })

    // window.onload = function() {

    //     document.querySelector(".post") = postDiv;

    // };

    divFeed.innerHTML = viewFeed;
    return divFeed;
}

// HAMBURGUESA
/* <div href="#/menu" class="menu-feed">
<a href="#/menu" class="btn-menu">
    <div class="hamburger">
        <span class="top-bun"></span>
        <span class="stuffing"></span>
        <span class="bottom-bun"></span>
    </div>
</a>
</div> */


        // BUSCADOR DE USUARIO

    // const searchButton = divFeed.querySelector(".search-button");

    //     searchButton.addEventListener("click", () => {
    //         const search = divFeed.querySelector(".search-input");
    //         // const searchValue = search.value;
    //         const user = "hola";
    //         const textBarFunc = (search, user) => {
    //             console.log(search.value);
    //             console.log(user);
    //             const filteredCharaters = taskContainer.filter(element => {
    //             return (
    //             element.user.toLowerCase().includes(search.value)
    //             );
    //         })
    //         console.log("si funciona");
    //         console.log(filteredCharaters);
    //     }
    //     textBarFunc(search,user);
    // })



            // MENU SOBRE FEED
    // const btnMenu = divFeed.querySelector(".btn-menu");
    // const menuDisplay = divFeed.querySelector(".menu-display");
    // const containerFeed = divFeed.querySelector(".container-feed");
    

    // btnMenu.addEventListener("click", () => {
    //     console.log("si funciona");
    //     menuDisplay.style.display = "block";
    //     containerFeed.style.display = "block";
    // })


// export const taskContainerFeed = () => href="#/menu" {
        
// };

        //         // if(search.value === user) {
        //         //     console.log("si funciona");
        //         // }
        //         // else {
        //         //     console.log("ño")
        //         // }
        //         // const filteredPost = user.filter(element => {
        //         // return (
        //         //     element.user.toLowerCase().includes(search)
        //         // );
        //     }
        //     textBarFunc(search, user);
        // });





