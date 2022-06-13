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
                <button class="data">Followers</button>
                <button class="data">Following</button> 
                <button class="data">Likes</button>
            </div>
            <div class="feed-post">
                <input type="text" placeholder="Write here about your favorite movie...">
                <button class="btn-post">Post</button>
            </div>
            <div>
                <div>
                <button class="btn-edit">Edit</button>
                <a href="#/deleteComment"><button class="btn-delete">Delete</button></a>
                <p></p>
                </div>
                <button class="btn-popCorn">PopCorn</button>
                <!-- <button class="btn-comment">Comment</button> -->
            </div>
        </main>
    `
    divProfile.innerHTML = viewProfile;
    return divProfile;
}