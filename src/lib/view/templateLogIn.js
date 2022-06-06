export const login = () => {

    const viewLogin = `
    <div class="container">
                <div id="logoTipo">
                    <img src="img/FindYourCake.png" alt="FindYourCake"  width=200px/>
                </div>
                <article class="messageInit">
                    <p>Bienvenidos a Find Your cake, donde podrás</p>
                    <p>buscar y publicar tus postres y pasteles que</p>
                    <p>se adaptan a todas las necesidades.</p>
                    <p>#sin azucar #vegan</p>
                    <p>#singluten #sinlactosa</p>
                </article>
                <form class="login">
                    <input type="email" name="email" id="email" placeholder="Correo electrónico"  >
                    <input type="password" name="pass" id="pass"  placeholder="Contraseña">
                </form>
                <div class="msgInitSesion">
                    <p>Inicia Sesión</p>
                </div>
                <div id="InitGoogle">
                    <img src="img/SignUpGoogle.png" alt="SignUpGoogle" width=200px  height="35px" />
                </div>
                <div class="notAcount">
                    <p>No Tienes Cuenta?</p>
                </div>
                <div class="msgRegistrate">
                    <p>Regístrate</p>
                </div>

            </div>
    
    `
return viewLogin;
}

