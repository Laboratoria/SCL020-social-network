import { login } from "../../firebase/auth";
// aqui exportaras las funciones que necesites ES EL PADRE QUE ENLAZA LOS ARCHIVOS VIEWS

export const interpIndex = () => {
  const formIndex = `
  <section id="vista1">
  <div id="root">
    <h1>SESHATLAB</h1>
    <h2>slogan en construccion</h2>
    <img src="./images/logo.png" alt="logo" width="400" heignt="453"/>
    <button id="start">Empezar</button>
  </div>
</section>
  `;
  // aqui tu codigo
  console.log(formIndex);
  return formIndex;
};

console.log(login);
