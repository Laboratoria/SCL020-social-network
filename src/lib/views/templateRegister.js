
//Funcion template de la pantalla de registro
export const registerScreen = () => {
  const screenRegister =  `<section>
    <section>
      <img src="" alt="">
    </section>
    <article>
<form action="Registro de Sesión">
  <label for="Name">Nombre y Apellido<input type="text"></label>
  <label for="Date of birth">Fecha de nacimiento<input type="month" id="seleccionarMes" min="1940-00" max="2020-01" /></label>
  <label for="Email">Email<input type="text"></label>
  <label for="Password">Contraseña<input type="text"></label>
  <label for="Confirmar contraseña">Confirmar contraseña<input type="text"></label> 
</form>
    </article>
    <section>
    <button>
      Listo
      (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧
    </button>
   
    </section>
  </section>
  `;
return registerScreen;

};