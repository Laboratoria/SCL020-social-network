
export const login = () => {
    const divLogin = document.createElement("div")
    const viewLogin =
        `<div class="login">
           
            <h1>Gluten Free Food</h1>
            <input type="text" placeholder="E-mail">
            <input type="text" placeholder="Contraseña">
            <button>Continuar</button>
            
        </div>`

    divLogin.innerHTML = viewLogin;
    return divLogin;
}; 
 
