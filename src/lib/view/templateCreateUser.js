import { signup } from '../../firebase/auth.js';
import { doc, setDoc } from '../../firebase/init.js'

export const createUser = () => {
    const divCreateUser = document.createElement('div')
    divCreateUser.setAttribute('id', 'userCreationView')
    const viewCreateUser = `
        <div id="insertProfilePic" class="background-red">
            <img id="profile" src="img/Profile.png" alt="Profile">
        </div>
        <div id="userCreationContainer">
            <p class="instruction">Ingresa tus datos personales</p>
            <form>
                <div id="input-container">
                    <input type="text" name="userName" id="userName_id" placeholder="Nombre personal o de tu marca">
                    <input type="date" name="userDateOfBirth" id="dateOfBirth" placeholder="Fecha de nacimiento">
                    <input type="mail" name="userMail" id="userMail_id" placeholder="Correo electronico valido">
                    <input type="password" name="userPassword" id="userPassword_id" minlength="8" placeholder="Contraseña">
                </div>
            </form>
            <p class="instruction">Quieres ingresar como:</p>
            <div class="radioButtons">
            <div class="radioButtonContainer">
                <img src="img/Baker.png" width=80px>
                <input type="radio" id="bakerOption_id" name="userType" value="baker" class='a' checked>
            </div>
            <div class="radioButtonContainer">
            <img src="img/eater.png" width=80px>
                <input type="radio" id="eaterOption_id" name="userType" value="eater" class='a'>
            </div>
        </div>
            <div class="divButtons">
                <button class="buttons" id="newUser">Crear usuario</button>
            </div>
        </div>
        `
        divCreateUser.innerHTML = viewCreateUser;
        const btn = divCreateUser.querySelector("#newUser")
        btn.addEventListener("click", () => {
            const username = divCreateUser.querySelector("#userName_id").value;
            const email = divCreateUser.querySelector("#userMail_id").value;
            const password = divCreateUser.querySelector("#userPassword_id").value;
            const birthday = divCreateUser.querySelector("#dateOfBirth").value
            // const userType = divCreateUser.querySelector('input[name="userType"]:checked').value;
            const userType = divCreateUser.querySelector('.a:checked').value;
            console.log(userType);
            const data = {username, email, password, birthday, userType}
            signup(data);
        })
    return divCreateUser;
};
