export const home = () => {
    const divHome = document.createElement('div')
    divHome.setAttribute('id', 'containerHome')
    const viewHome = `
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
`
divHome.innerHTML = viewHome;
return divHome;
};
// line 39-50
/* <div class="postMain">
<div class="userNav">
    <i class="fa-solid fa-circle-user"></i>
    <h1>Nombre de usuario</h1>
</div>
<div class="post">
    <h2> aqui va el post</h2> 
</div>
<div class="like">
    <img src="img/cuplike.png" alt="cuplike">
</div>
</div> */