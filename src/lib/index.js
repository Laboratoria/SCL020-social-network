// aqui exportaras las funciones que necesites


//Funcion que crea el template de la pantalla 
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

export const templateLogin = () => {
  const screenLogin = `<section>
  <section>
    <img src="" alt="">
  </section>
  <form action="">
    <label for="Correo">
      <input type="text">
    </label>
    <label for="Contraseña">
      <input type="text">
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