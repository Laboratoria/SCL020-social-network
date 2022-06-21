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
                <input type="text" placeholder="Write here about your favorite movie...">
                <button class="btn-post">Post</button>
            </div>
            <div class="feed-post">
                <div class="p-post">
                    <button class="btn-edit">Edit</button>
                    <a href="#/deleteComment"><button class="btn-delete">Delete</button></a>
                    <p>My favorite movie is the incredibl life of walter mitty</p>
                </div>
                <button class="btn-popCorn">PopCorn</button>
            </div>
                <!-- <button class="btn-comment">Comment</button> -->
        </main>
    `
    divProfile.innerHTML = viewProfile;
    return divProfile;
}