export const editPost = () => {
    const divEditPost = document.createElement('div')
    divEditPost.setAttribute('id', 'containerEditPost')
    const viewEditPost = `
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
    <div class="userEditContain">
        <div id="editImg">
            <img src="img/ProfileNegro.png" id="logo3" width="90px">
            <article class="articlesEdit">
                <p>Juanita Pérez</p>
                <p>Baker</p>
            </article>
        </div>
        <p class="misPublicaciones">Mis Publicaciones:</p>

        <div id="editCuadro2">
            <img src="img/ProfileNegro.png" id="logo3" width="40px">
            <article class="articlesEdit2">
                <p>Usuario 1</p>
                <p>Baker</p>
            </article>
        </div>
        <div id="editBlanco">
            <article class="articlesEdit3">
                <p>Nuevo Post :)</p>
            </article>
        </div>
        <div id="editCuadro3">
            <div class="botones">
                <button class="eliminar">Eliminar</button>
                <button class="publicar">Publicar</button>
                <button class="cancelar">Cancelar</button>
            </div>
        </div>

    </div>
</div> 
`
    divEditPost.innerHTML = viewEditPost;
    return divEditPost;
};
