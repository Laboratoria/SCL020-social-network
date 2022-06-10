export const profile = () => {
    const divProfile = document.createElement("div");
    const viewProfile = //html
    `
        <main class="profile">
            <nav>
                <a href="#/menu"><img class="menu-burger" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/lista.png?raw=true" alt="logo-ticket"></a>
                <input type="text" placeholder="Search">
            </nav>
            <div class="user-profile">
                <img src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-profile%20(1).png?raw=true" alt="img-user">
                <p>@user_name</p>
                <button>Follow</button>   
            </div>
            <div>
                <button class="followers">Followers</button>
                <button class="following">Following</button> 
                <button class="likes">Likes</button>
            </div>
            <div>
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