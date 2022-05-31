let container= document.getElementById("container");

let firstView= document.createElement("div");
firstView.setAttribute("class", `firstView`);
container.appendChild(firstView);

let logo= document.createElement("div");
logo.setAttribute("class", `logo`);
let logoImage= document.createElement("img");
logoImage.setAttribute("src", "./Social-Images/logoescuela.webp");
logo.appendChild(logoImage);
firstView.appendChild(logo);

let currentUserData = document.createElement("div");
currentUserData.setAttribute("class", `currentUserData`);
firstView.appendChild(currentUserData);
let userEmail= document.createElement("input");
userEmail.setAttribute("inputText", 'Introduzca su correo electrónico');
//document.addEventListener("DOMContentLoaded", () => { prueba(logo);});
