export const feed = () => {
    const divFeed = document.createElement("div");

    const viewFeed = //html
    `
        <main class="feed">
            <nav class="nav-burguer-search">
                <a href="#/menu"><img class="menu-burger" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/lista.png?raw=true" alt="logo-ticket"></a>
                <div class="search-box">
                    <input class="search-input"type="text" name="" placeholder="Search...">
                    <button class="search-button" href="#">
                        <i class="material-icons">search</i>
                    </button>
                </div>
            </nav>
            <div class="movies">
                <button><img class="movie-rank" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-profile%20(1).png?raw=true" alt="movie-rank"></button>
                <button><img class="movie-rank" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-profile%20(1).png?raw=true" alt="movie-rank"></button>
                <button><img class="movie-rank" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-profile%20(1).png?raw=true" alt="movie-rank"></button>
                <button><img class="movie-rank" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-profile%20(1).png?raw=true" alt="movie-rank"></button>
            </div>
            <div>
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
            </div>
        </main>
    `
    divFeed.innerHTML = viewFeed;
    return divFeed;
}