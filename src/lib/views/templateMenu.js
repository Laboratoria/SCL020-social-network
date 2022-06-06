export const menu = () =>{
    const divMenu = document.createElement("div");
    const viewMenu = `
    <div>
        <button>Back</button>  
        <ul>
            <img src="" alt="logo-profile"><li><a href="#/profile">Profile</a></li>
            <img src="" alt="logo-feed"><li><a href="#/feed">Feed</a></li>
            <img src="" alt="logo-signOut"><li><a href="#/logoutConfirmation">Sign Out</a></li>
        </ul>
    </div>
    `
    divMenu.innerHTML = viewMenu
    return divMenu;
}

