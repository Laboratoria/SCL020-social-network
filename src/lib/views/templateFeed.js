export const feed = () => {
    const divFeed = document.createElement("div");

    const viewFeed = //html
    `
        <main class="container-feed">
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
            <div class="movies">
                <button><img class="movie-rank" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-profile%20(1).png?raw=true" alt="movie-rank"></button>
                <button><img class="movie-rank" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-profile%20(1).png?raw=true" alt="movie-rank"></button>
                <button><img class="movie-rank" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-profile%20(1).png?raw=true" alt="movie-rank"></button>
                <button><img class="movie-rank" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-profile%20(1).png?raw=true" alt="movie-rank"></button>
            </div>   
            <div class="container-post">
                <div class="post">
                    <div class="user-info">
                        <img src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-user-post1.png?raw=true" alt="user-img">
                        <p>@User_name</p>
                    </div>
                    <p class="post-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, modi nam!</p>
                    <button class="btn-popCorn">🍿</button>
                        <!-- <button class="btn-comment">Comment</button> -->
                </div>
                <div class="post">
                    <div class="user-info">
                        <img src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-user-post1.png?raw=true" alt="user-img">
                        <p>@user_name</p>
                    </div>
                    <p class="post-p" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, modi nam!</p>
                    <button class="btn-popCorn">🍿</button>
                        <!-- <button class="btn-comment">Comment</button> -->
                </div>
            </div>
        </main>
    `
    divFeed.innerHTML = viewFeed;
    return divFeed;
}