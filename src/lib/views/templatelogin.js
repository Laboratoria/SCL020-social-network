export const login = () => {
    const divLogin = document.createElement("div")
    const viewLogin =
        `<div class="container-login">
           
            <h1>Gluten Free Food</h1>
            <input type="text" id="email" class= "email"placeholder="E-mail">
            <input type="text" id="contraseña" class= "contraseña" placeholder="Contraseña">
            <button class = "btnContinuar"><a href='#/wall'>Continuar</a></button>
            <button class = "btnregister"><a href='#/register'>Registrar</a></button>
            <p class = "forgot">¿Has olvidado tu contraseña?</p>
            <div>
                <img></img>
                <button class = "btngoogle"><a href='#/wall'>Iniciar Sesion con Google</a></button>
            </div>
        </div>`
    divLogin.innerHTML = viewLogin;

    const btn = divLogin.querySelector(".btnContinuar")
    btn.addEventListener("click", () => {
        const email = divLogin.querySelector("#email").value;
        console.log(email);
        const psw = divLogin.querySelector("#contraseña").value;
        // const masking = psw.replace(g, '.') ;


        userLogin(email, psw);

    })


    return divLogin;
};