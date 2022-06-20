// aqui exportaras las funciones que necesites


//Templates de la pantalla

//Funcion que crea el template de la pantalla Inicio
export const templateIndex = () => {
  const screenIndex =  `<section>
    <section>
      <img src="" alt="">
    </section>
    <article>
      <p>
        Únete a la comunidad y 
        conoce todos los secretos
        para vivir sol@ antes de los 30
        
        (づ￣ 3￣)づ 
      </p>
    </article>
    <section>
    <button>
      INICIAR SESIÓN
    </button>
    <p>
      ¿No tienes cuenta aún? Regístrate <a href="">aquí.</a>  
    </p>
    </section>
  </section>
  `;
return screenIndex; 
};

//Funcion que crea el template de la pantalla Login
export const templateLogin = () => {
  const screenLogin = `<section>
  <section>
    <img src="" alt="">
  </section>
  <form action="">
  <label for="Correo">
    Correo/Alias: <input type="text">
  </label>
  <label for="Contraseña">
    Contraseña: <input type="text">
  </label>
</form>
  <section>
  <button>
    INICIAR SESIÓN
  </button>
  <p>
    ¿No tienes cuenta aún? Regístrate <a href="">aquí.</a>  
  </p>
  </section>
</section>
`;
  //console.log('Hola mundo!');
};

export const templateRegister = () => {
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
  <label for="Alias">Alías<input type="text"></label> 
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
return screenIndex;

};