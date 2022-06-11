import { navigate } from "../router/routes.js";
import { logIn, redirectResult, signIn } from "../firebase/auth.js";

function login() {
  const html =//html
    `
<div class="background login">
  <div class="group background-green">
        <h1>PlantGram</h1>
        <p>Bienvenidos a la mayor comunidad de plant lovers</p>
        <h2>Inicia sesión</h2>
        <input type="email" id="email" placeholder="Usuario" />
        <input type="password" id="password" placeholder="Contraseña" />
        
        <button class="entrar" id="loginUser"> Entrar </button>
        <p class="message">¿Aún no tienes una cuenta? <a href="#" id="register" class="btn-registrate">Regístrate aquí </a></p>
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

  //LOGIN WITH EMAIL AND PASSWORD
  const loginUser = container.querySelector("#loginUser");
  loginUser.addEventListener("click", async () =>  {
    const email = container.querySelector("#email").value;
    const password = container.querySelector("#password").value;
    try {
      await signIn(email, password);
      navigate("news");
    } catch (error) {
      console.log(error);
      throw error.message;
    }
  });

  //LOGIN WITH GMAIL
  const logInWithGmail = container.querySelector("#logInButton");
  let currentUser;
  logInWithGmail.addEventListener("click", async (e) => {
    try {
      currentUser = await logIn();
      navigate("news");
    } catch (error) {
      throw error.message;
      console.log(error);
    }
  });
  redirectResult();

  return container;
}

export { login };