export const login = () => {

    const viewLogin = `
    <div class="container">
        <div>
            <img src="img/FindYourCake.png" alt="FindYourCake" id="logoTipo"/>
        </div>
        <article class="messageInit">
            <p>Bienvenidos a Find Your cake, donde podrás</p>
            <p>buscar y publicar tus postres y pasteles que</p>
            <p>se adaptan a todas las necesidades.</p>
            <p>#sin azucar #vegan</p>
            <p>#singluten #sinlactosa</p>
        </article>
        <form class="login">
            <input type="email" name="email" placeholder="Correo electrónico"  >
            <input type="password" name="pass" placeholder="Contraseña" id="password">
        </form>
        <div>
            <input type="button" value="Inicia Sesión" class="creatUserBt">
        </div>
        <div id="InitGoogle">
            <img src="img/SignUpGoogle.png" alt="SignUpGoogle" width=200px  height="35px" />
        </div>
        <div class="notAcount">
            <p>No tienes cuenta?</p>
        </div>
        <div id="msgRegistrate" href="#/crearUsuario">
            <p>Regístrate</p>
        </div>
    </div>
    `
    return viewLogin;
}