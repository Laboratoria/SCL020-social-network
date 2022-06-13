export const searchPost = () => {
    const divSearchPost = document.createElement('div')
    divSearchPost.setAttribute('id', 'containerSearchPost')
    const viewSearchPost = `
    <div class="menu__side" id="menu_side">
    <div id="containImg">
        <img src="img/logo2.png" id="logo2">
    </div>
    <div class="options__menu">
        <a href="#/userProfile" class="selected">
            <div class="option">
                <i class="fa-solid fa-circle-user fa-xl" title="Perfil"></i>
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
        <a href="#/logIn">
            <div class="option">
                <i class="fa-solid fa-arrow-right-from-bracket fa-xl" title="Cerrar sesión"></i>
                <h4>Cerrar cesion</h4>
            </div>
        </a>
    </div>
</div>
<div class="postEditContainer">
    <div id="containImgSear">
        <img src="img/logo4.png" id="logo4" width=250px">
    </div>
    <div class="buscador">
        <input type="search" id="search" name="search" placeholder="Buscar...">
    </div>  
    <div id="buscadores">
        <button class="buscadores">#sinazucar</button>
        <button class="buscadores">#singluten</button>
        <button class="buscadores">#sinlactosa</button>
        <button class="buscadores">#vegano</button>
        <button class="buscadores">#todos</button>
    </div> 
    <div class="userSearContain">
        <div id="editImg">
    </div>
</div> 
`
    divSearchPost.innerHTML = viewSearchPost;
    return divSearchPost;
};
