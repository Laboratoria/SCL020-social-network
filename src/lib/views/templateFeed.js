export const feed = () => {
    const divFeed = document.createElement("div");

    const viewFeed = //html
    `
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
                        <a class="profile-web" href="#/profile"><img class ="navweb-logos" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-profile%20(1).png?raw=true" alt="logo-ticket"></a>
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
                            <input class="search-input" type="text" name="" placeholder="Search...">
                            <button class="search-button" href="#">
                                <i class="material-icons">🔍︎</i>
                            </button>
                        </div>
                    </div>
                </nav>
            <div class="web-box">
                <div class="movies">
                    <button><img class="movie-rank" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/animales%20fantasticos.png?raw=true" alt="movie-rank"></button>
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
                        <p class="post-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, modi nam!</p>
                        <button class="btn-popCorn">🍿</button>s
                    </div>
                    <div class="post">
                        <div class="user-info">
                            <img src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-user-post1.png?raw=true" alt="user-img">
                            <p>@user_name</p>
                        </div>
                        <p class="post-p" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, modi nam!</p>
                        <button class="btn-popCorn">🍿</button>
                    </div> 
                </div>
            </div>
        </main>
    `
    divFeed.innerHTML = viewFeed;


    const searchButton = divFeed.querySelector(".search-button");

        searchButton.addEventListener("click", () => {
            const search = divFeed.querySelector(".search-input");
            // const searchValue = search.value;
            const user = "hola";
            const textBarFunc = (search, user) => {
                console.log(search.value);
                console.log(user);
                const filteredCharaters = taskContainer.filter(element => {
                return (
                element.user.toLowerCase().includes(search.value)
                );
            })
            console.log("si funciona");
            console.log(filteredCharaters);
        }
        textBarFunc(search,user);
    })
    return divFeed;
}


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



// export const textBarFunc = (myData, searchString) => {
//     const filteredCharaters = myData.filter(character => {
//     return (
//         character.name.toLowerCase().includes(searchString)
//     );
// });
// return showChar(filteredCharaters);
// }

