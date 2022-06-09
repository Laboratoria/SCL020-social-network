export const menu = () =>{
    const divMenu = document.createElement("div");
    const viewMenu = //html
    `
    <div class="container-menu">
        <div class="sub-container-menu">
            <a href="#/feed"><button class="btn-backFeed"><img src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/return.png?raw=true" alt="btn-backFeed"></button></a>
            <div class="container-img">
                <div class="sub-container-img">
                    <img class="img-menu" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-profile%20(1).png?raw=true" alt="logo-profile">
                    <a href="#/profile">Profile</a>
                </div>
                <div class="sub-container-img">
                    <img class="img-menu" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-feed.png?raw=true" alt="logo-feed">
                    <a href="#/profile">Feed</a>
                </div>
                <div class="sub-container-img">
                    <img class="img-menu" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-signout%20(1).png?raw=true" alt="logo-LogOut">
                    <a href="#/profile">Log out</a>
                </div>
            </div>
        </div>
    </div>
    `
    divMenu.innerHTML = viewMenu
    return divMenu;
}

