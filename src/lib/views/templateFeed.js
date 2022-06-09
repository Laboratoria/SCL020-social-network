export const feed = () => {
    const divFeed = document.createElement("div");

    const viewFeed = //html
    `
        <main class="feed">
            <nav>
                <a href="#/menu"><img class="menu-burger" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/lista.png?raw=true" alt="logo-ticket"></a>
                <input type="text" placeholder="U+1F50E Search">
            </nav>
            <div class="movies">
                <button>Movie1</button>
                <button>Movie2</button>
                <button>Movie3</button>
                <button>Movie4</button>
            </div>
            <div>
                <div class="container-post">
                    <div class="post">
                        <div class="user-info">
                            <img src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-profile%20(1).png?raw=true" alt="user-img">
                            <p>@user_name</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, modi nam!</p>
                        <button class="btn-popCorn">PopCorn</button>
                        <!-- <button class="btn-comment">Comment</button> -->
                    </div>
                    <div class="post">
                        <div class="user-info">
                            <img src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-profile%20(1).png?raw=true" alt="user-img">
                            <p>@user_name</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, modi nam!</p>
                        <button class="btn-popCorn">PopCorn</button>
                        <!-- <button class="btn-comment">Comment</button> -->
                    </div>
                </div>
            </div>
        </main>
    `
    divFeed.innerHTML = viewFeed;
    return divFeed;
}