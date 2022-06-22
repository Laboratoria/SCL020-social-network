//Este archivo es para registrarse
export const interpSignUp = () => {
    const divSignUp = document.createElement("div");

    const formSignUp = `
    <div id="rootSingnUp">
      <div>
        <button id="back">Atras</button>
      </div>
        <form action="" class="containerFormSignUp">
            <h1>Registro de Usuario</h1>
            <input type="text id="mail" placeholder="CORREO ELECTRÓNICO" autofocus class="campotxt" autocomplete="off" required>
            <input type="text id="name" placeholder="NOMBRE Y APELLIDO" autofocus class="campotxt" autocomplete="off" required>
            <input type="text id="nickName" placeholder="NOMBRE DE USUARIO" autofocus class="campotxt" autocomplete="off" required>
            <p>FECHA DE NACIMIENTO <input type="date" name="date" min="1940-01-01" max="2010-01-01"/></p>            
            <input type="text id="password" placeholder="CONTRASEÑA" autofocus class="campotxt" autocomplete="off" required>
            <input type="text id="pass" placeholder="REPETIR CONTRASEÑA" autofocus class="campotxt" autocomplete="off" required>
            <button id="next">Siguiente</button>
        </form>        
      </div>
    `
    divSignUp.innerHTML = formSignUp;
    
    return divSignUp;
  };