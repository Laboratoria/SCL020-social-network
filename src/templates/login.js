import { navigate } from "../router/routes.js";
import { logIn, redirectResult } from "../firebase/auth.js";

function login() {
  const html =//html
    `
<div class="background login">
  <div class="group background-green">
        <h1>PlantGram</h1>
        <p>Bienvenidos a la mayor comunidad de plant lovers</p>
        <h2>Inicia sesión</h2>
        <input type="email" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        
        <button class="entrar"> Entrar </button>
        <p>¿Aún no tienes una cuenta? <a href="#" id="register">Regístrate aquí </a></p>
        <p>O ingresa con</p>
        <button id="logInButton">
          <img width="25" src="./assets/google.png" /> Gmail
        </button>
    </div>
</div>`;
  const container = document.createElement("div");
  container.innerHTML = html;
  // const button = container.querySelector("button");
  // button.addEventListener("click", () => {
  //   navigate("news");
  // });
  const linkRegister = container.querySelector("#register");
  linkRegister.addEventListener("click", (event) => {
  event.preventDefault();
  navigate("register");
  });
  const logInWithGmail = container.querySelector("#logInButton")
  let currentUser;
  logInWithGmail.addEventListener("click",async(e)=>{
    try{
    currentUser = await logIn();
    } catch (error){
  throw error.message;
  console.log (error);
    }}
)
  redirectResult()
  return container
}

export { login };
