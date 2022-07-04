export const menu = () =>{
    const divMenu = document.createElement("div");
    const viewMenu = //html
    `
        <div class="container-menu">
            <div class="sub-container-menu">
                <div class="container-img">
                    <div class="sub-container-img">
                    <a href="#/profile"><img class="img-menu" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-profile%20(1).png?raw=true" alt="logo-profile"></a>
                    </div>
                    <div class="sub-container-img">
                    <a href="#/feed"><img class="img-menu" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-feed.png?raw=true" alt="logo-feed"></a>
                    </div>
                    <div class="sub-container-img">
                    <a href="#/logoutConfirmation"><img class="img-menu" src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-signout%20(1).png?raw=true" alt="logo-LogOut"></a>
                    </div>
                </div>
            </div>
        </div>
    `
    divMenu.innerHTML = viewMenu
    return divMenu;
};