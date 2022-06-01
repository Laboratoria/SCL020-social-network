// const enterB = document.createButton("Iniciar Sesión");
// document.addEventListener("DOMContentLoaded", function() {
//     var element = document.createElement("button");
//     element.appendChild(document.createTextNode("Click Me!"));
//     var page = document.getElementById("btn");
//     page.appendChild(element);
//     console.log(element);
// });
// const path = '/news';
// const enterButton = document.getElementById('btn');
// if (enterButton) {
//   enterButton.addEventListener('click', () => {
//     // window.location.href = '/news';
//     window.history.pushState({}, 'news', path);
//   });
// }

// <form action="POST">
// <label for="email">email</label>
// <input type="email" name="email" id="email">
// <label for="password">password</label>
// <input type="password" name="password" id="password">
// <button type="submit" id="loginBtn">iniciar sesión</button>
// </form>
import {navigate} from '../router/routes.js';

function login() {
  const html = //html
`<h2>Ingresa</h2>
<button> HOLA </button>`;
const container= document.createElement('div');
container.innerHTML = html;
const button = container.querySelector('button');
button.addEventListener('click', () =>{navigate('profile')});
return container;
}

export {login};