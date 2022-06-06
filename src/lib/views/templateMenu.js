export const menu = () =>{
    const divMenu = document.createElement("div");
    const viewMenu = `
    <div>
        <a href="#/feed"><button class="btn-backFeed"> <- </button></a>
        <ul>
            <img src="" alt="logo-profile"><li><a href="#/profile">Profile</a></li>
            <img src="" alt="logo-feed"><li><a href="#/feed">Feed</a></li>
            <img src="" alt="logo-LogOut"><li><a href="#/logoutConfirmation">Log Out</a></li>
        </ul>
    </div>
    `
    divMenu.innerHTML = viewMenu
    return divMenu;
}

