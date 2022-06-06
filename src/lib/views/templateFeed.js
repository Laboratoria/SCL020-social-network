export const feed = () => {
    const divFeed = document.createElement("div");

    const viewFeed = `
        <nav>
            <a href="#/menu"><button class="btn-menu">|||</button></a>
            <input type="text" placeholder="U+1F50E Search">
        </nav>
        <div>
            <button>Movie1</button>
            <button>Movie2</button>
            <button>Movie3</button>
            <button>Movie4</button>
        </div>
        <div>
            <div>
                <img src="" alt="user-img">
                <p>@user_name</p>
                <p>userText</p>
                <button class="btn-popCorn">PopCorn</button>
                <!-- <button class="btn-comment">Comment</button> -->
            </div>
            <div>
                <img src="" alt="user-img">
                <p>@user_name</p>
                <p>userText</p>
                <button class="btn-popCorn">PopCorn</button>
                <!-- <button class="btn-comment">Comment</button> -->
            </div>
        </div>
    `
    divFeed.innerHTML = viewFeed;
    return divFeed;
}