export const profile = () => {
    const divProfile = document.createElement("div");
    const viewProfile = `
        <nav>
            <a href="#/menu"><button class="btn-menu">|||</button></a>
            <input type="text" placeholder="U+1F50E Search">
        </nav>
        <img src="" alt="img-user">
        <p>@user_name</p>
        <button>Follow</button>   
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
    `
    divProfile.innerHTML = viewProfile;
    return divProfile;
}