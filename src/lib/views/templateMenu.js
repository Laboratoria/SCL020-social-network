export const menu = () =>{
    const divMenu = document.createElement("div");
    const viewMenu = //html
    `
    <div class="container-menu">
        <div class="sub-container-menu">
            <a href="#/feed"><button class="btn-backFeed"> <- </button></a>
            <ul class="container-ul">
                <label><img src="" alt="logo-profile"><li><a href="#/profile">Profile</a></li></label>
                <label><img src="" alt="logo-feed"><li><a href="#/feed">Feed</a></li></label>
                <label><img src="" alt="logo-LogOut"><li><a href="#/logoutConfirmation">Log Out</a></li></label>
            </ul>
        </div>
    </div>
    `
    divMenu.innerHTML = viewMenu
    return divMenu;
}

