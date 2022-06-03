export const feed = () => {
    const divFeed = document.createElement("div");

    const viewFeed = `
        <nav>
            <menu></menu>
            <input type="text" placeholder="U+1F50E Search">
        </nav>
    
        <div>
            <button>user1</button>
            <button>user2</button>
            <button>user3</button>
            <button>user4</button>
        </div>
        
        <div>
            <div>
                <img src="" alt="user-img">
                <p>@user_name</p>
                <p>userText</p>
                <button class="btn-popCorn">PopCorn</button>
                <button class="btn-comment">Comment</button>
            </div>
            <div>
                <img src="" alt="user-img">
                <p>@user_name</p>
                <p>userText</p>
                <button class="btn-popCorn">PopCorn</button>
                <button class="btn-comment">Comment</button>
            </div>
        </div>
    `
    divFeed.innerHTML = viewFeed;
    return divFeed;
}