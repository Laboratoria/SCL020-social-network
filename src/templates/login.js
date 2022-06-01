// const enterB = document.createButton("Iniciar Sesión");
// document.addEventListener("DOMContentLoaded", function() {
//     var element = document.createElement("button");
//     element.appendChild(document.createTextNode("Click Me!"));
//     var page = document.getElementById("btn");
//     page.appendChild(element);
//     console.log(element);
// });
const path = '/news';
const enterButton = document.getElementById('btn');
if (enterButton) {
  enterButton.addEventListener('click', () => {
    // window.location.href = '/news';
    window.history.pushState({}, 'news', path);
  });
}

// <form action="POST">
// <label for="email">email</label>
// <input type="email" name="email" id="email">
// <label for="password">password</label>
// <input type="password" name="password" id="password">
// <button type="submit" id="loginBtn">iniciar sesión</button>
// </form>
