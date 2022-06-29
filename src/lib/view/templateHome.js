import { logout } from "../../firebase/auth.js";
import { getPost, onGetPost } from "../../firebase/posts.js";

export const home = () => {
    const divHome = document.createElement('div')
    divHome.setAttribute('id', 'divContainerHome')
    const viewHome = `
    <div class="menu__side" id="menu_side">
        <div id="containImg">
            <img src="img/logo2.png" id="logo2">
        </div>
        <div class="options__menu">	
            <a href="#/userProfile" class="selected">
                <div class="option">
                    <i class="fa-solid fa-circle-user fa-xl" title="Perfil" ></i>
                    <h4> nombre usuario titulo</h4>
                </div>
            </a>
            <a href="#/home">
                <div class="option">
                    <i class="fa-solid fa-house fa-xl" title="Inicio"></i>
                    <h4>Inicio</h4>
                </div>
            </a>
            <a href="#/search">
                <div class="option">
                    <i class="fa-solid fa-magnifying-glass fa-xl" title="Buscar"></i>
                    <h4>Buscar</h4>
                </div>
            </a>
            <a id="logoutButton">
                <div class="option">
                    <i class="fa-solid fa-arrow-right-from-bracket fa-xl" title="Cerrar sesión"></i>
                    <h4>Cerrar cesion</h4>
                </div>
            </a>
        </div>
    </div>
    <div class="postContainer">
    </div>
`

divHome.innerHTML = viewHome;
const btn = divHome.querySelector("#logoutButton")
btn.addEventListener("click", () => {
    logout();
})
return divHome;
};
