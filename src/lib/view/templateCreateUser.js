import { signup } from '../../firebase/auth.js';
export const createUser = () => {
    const divCreateUser = document.createElement('div')
    divCreateUser.setAttribute('id', 'userCreationView')
    const viewCreateUser = `
        <div id="insertProfilePic" class="background-red">
            <img id="profile" src="img/Profile.png" alt="Profile">
        </div>
        <div id="userCreationContainer">
            <p class="instruction">Ingresa tus datos personales</p>
            <form action="FIREBASE??">
                <div id="input-container">
                    <input type="text" name="userName" id="userName_id" placeholder="Nombre personal o de tu marca">
                    <input type="date" name="userDateOfBirth" id="dateOfBirth" placeholder="Fecha de nacimiento">
                    <input type="mail" name="userMail" id="userMail_id" placeholder="Correo electronico valido">
                    <input type="password" name="userPassword" id="userPassword_id" minlength="8" placeholder="Contraseña">
                </div>
            </form>
            <p class="instruction">Quieres ingresar como:</p>
            <img id=bakerImg src="img/Baker.png" alt="Baker" class="bakerEaterImg"><img id="eaterImg" src="img/eater.png" alt="Eater" class="bakerEaterImg">
            <div class="divButtons">
                <a class="buttons" id="newUser">Crear usuario</a>
            </div>
        </div>
        `
        divCreateUser.innerHTML = viewCreateUser;
        const btn = divCreateUser.querySelector("#newUser")
        btn.addEventListener("click", () => {
            const email = divCreateUser.querySelector("#userMail_id").value;
            const password = divCreateUser.querySelector("#userPassword_id").value;
            signup(email, password);
        })
        

    return divCreateUser;
};
