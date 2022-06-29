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
    <a href="">
        <div class="option">
            <i class="fa-solid fa-arrow-right-from-bracket fa-xl" title="Cerrar sesión"></i>
            <h4>Cerrar cesion</h4>
        </div>
    </a>
    </div>
</div>
    <div class="userMain">
        <div class="userHeader">
            <div class="userIcon">
                <i class="fa-solid fa-circle-user fa-6x"></i>
            </div>
            <div class="userName" id="nameHeader">
                <p>Nombre de usuario<p>
            </div>
            <div class="userTitle" id="titleHeader">
                <p>Titulo baker o eater</p>
            </div>
        </div>
        <div class="createPostFlex">
            <p>Mis Publicaciones:</p>
            <a href="#/createPost" class="buttonGreen">Nuevo post</a>
        </div>
        <div class="postContainer">
            <div class="postBody">
                <div class="userNav">
                    <div class="userIcon">
                        <i class="fa-solid fa-circle-user fa-3x"></i>
                    </div>
                    <div class="userName">
                        <p>Nombre de usuario</p>
                    </div>
                    <div class="userTitle">
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
                        <a href="#/editPost" <i class="fa-solid fa-pencil fa-2xl"></i> </a>
                    </div>
                </div>
            </div>
            <div class="postBody">
                <div class="userNav">
                    <div class="userIcon">
                        <i class="fa-solid fa-circle-user fa-3x"></i>
                    </div>
                    <div class="userName">
                        <p>Nombre de usuario</p>
                    </div>
                    <div class="userTitle">
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
                        <a href="#/editPost" <i class="fa-solid fa-pencil fa-2xl"></i> </a>
                    </div>
                </div>
            </div>
            <div class="postBody">
                <div class="userNav">
                    <div class="userIcon">
                        <i class="fa-solid fa-circle-user fa-3x"></i>
                    </div>
                    <div class="userName">
                        <p>Nombre de usuario</p>
                    </div>
                    <div class="userTitle">
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
                        <a href="#/editPost" <i class="fa-solid fa-pencil fa-2xl"></i> </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`
    divUserProfile.innerHTML = viewUserProfile;
    return divUserProfile;
};