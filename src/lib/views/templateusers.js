export const users = () => {
    const divUsers = document.createElement("div")
    const viewUsers =
        `<div class="users">
           
            <h1>Gluten Free Food</h1>
            <input type="text" placeholder="E-mail">
            <input type="text" placeholder="Contraseña">
            <button><a href='#/wall'>Continuar</a></button>
            <button><a href='#/login'>Registrar</a></button>
            <p>¿Has olvidado tu contraseña?</p>
            <div>
                <img></img>
                <button><a href='#/wall'>Iniciar Sesion con Google</a></button>
            </div>
        </div>`
    divUsers.innerHTML = viewUsers;
    return divUsers;
};