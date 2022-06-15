export const users = () => {
    const divUsers = document.createElement("div")
    const viewUsers =
        `<div class="users">
           
            <h1>Gluten Free Food</h1>
            <input type="text" placeholder="E-mail">
            <input type="text" placeholder="Contraseña">
            <button>Continuar</button>
            <button><a href='#/login'>Registrar</a></button>
            <p>¿Has olvidado tu contraseña?</p>
            <div>
                <img></img>
                <button>Iniciar Sesión</button>
            </div>
        </div>`
    divUsers.innerHTML = viewUsers;
    return divUsers;
};