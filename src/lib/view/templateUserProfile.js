export const userProfile = () => {
    const divUserProfile = document.createElement('div')
    divUserProfile.setAttribute('id', 'containerUserProfile')
    const viewUserProfile = `
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
    <a href="#/logIn">
        <div class="option">
            <i class="fa-solid fa-arrow-right-from-bracket fa-xl" title="Cerrar sesión"></i>
            <h4>Cerrar cesion</h4>
        </div>
    </a>
    </div>
</div>
<div class="postMain">
    <div class="userHeader">
        <div class="item1">
            <i class="fa-solid fa-circle-user fa-6x"></i>
        </div>
        <div class="item2" id="nameHeader">
            <h2>Nombre de usuario</h2>
        </div>
        <div class="item3" id="titleHeader">
            <h3>Titulo baker o eater</h3>
        </div>
    </div>
    <div class="createPostFlex">
        <p>Mis Publicaciones:</p>
        <a class="buttonGreen">Crea un Post</a>
    </div>
    <div class="postBody">
        <div class="userNav">
            <div class="item1">
                <i class="fa-solid fa-circle-user fa-3x"></i>
            </div>
            <div class="item2">
                <p>Nombre de usuario</p>
            </div>
            <div class="item3">
                <p>Baker</p>
            </div>
        </div>
        <div class="post">
            <h2> aqui va el post</h2> 
        </div>
        <div class="like">
            <div>
                <img src="img/cuplike.png" class ="cupcakeImg" alt="cuplike">
            </div>
            <div class="pencilIcon">
                <i class="fa-solid fa-pencil fa-2xl"></i>
            </div>
        </div>
    </div>
</div>
`
    divUserProfile.innerHTML = viewUserProfile;
    return divUserProfile;
};