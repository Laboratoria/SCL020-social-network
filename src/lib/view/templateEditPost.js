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
                <i class="fa-solid fa-circle-user" title="Perfil" ></i>
                <h4> nombre usuario titulo</h4>
            </div>
        </a>
        <a href="#/home">
            <div class="option">
                <i class="fa-solid fa-house" title="Inicio"></i>
                <h4>Inicio</h4>
            </div>
        </a>
        <a href="#/search">
            <div class="option">
                <i class="fa-solid fa-magnifying-glass" title="Buscar"></i>
                <h4>Buscar</h4>
            </div>
        </a>
        <a href="#/logIn">
            <div class="option">
                <i class="fa-solid fa-arrow-right-from-bracket" title="Cerrar sesión"></i>
                <h4>Cerrar cesion</h4>
            </div>
        </a>
        </div>
    </div>
    <div class="createPost">
    <div>
        <textarea id="w3review" name="w3review" rows="4" cols="50">aqui va el post.</textarea>
    </div>
    <div>
        <button>Publicar</button>
        <input type="submit" value="Submit">	
    </div>
`
divEditPost.innerHTML = viewEditPost;
return divEditPost;
};