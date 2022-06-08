export const menu = () =>{
    const divMenu = document.createElement("div");
    const viewMenu = //html
    `
    <div class="container-menu">
        <div class="sub-container-menu">
            <a href="#/feed"><button class="btn-backFeed"> <- </button></a>
            <ul class="container-ul">
                <label class="container-img"><img class="img-menu" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-profile.png?raw=true" alt="logo-profile"><li><a href="#/profile">Profile</a></li></label>
                <label class="container-img"><img class="img-menu" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/Feed.png?raw=true" alt="logo-feed"><li><a href="#/feed">Feed</a></li></label>
                <label class="container-img"><img class="img-menu" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/sing%20out.png?raw=true" alt="logo-LogOut"><li><a href="#/logoutConfirmation">Log Out</a></li></label>
            </ul>
        </div>
    </div>
    `
    divMenu.innerHTML = viewMenu
    return divMenu;
}

