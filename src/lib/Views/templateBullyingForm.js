export const bForm = () => {
    const bInformation = //html
    `
  <div class="wallView">
        <header>
            <img src = "Social-Images/logo.jpeg">
            <a href="#/home" id="salir"><strong>Salir</strong></a>
        </header>
       <textarea placeholder="¿Cómo te sentiste hoy en clases?" cols="40" rows="5" id="userComment"></textarea>
       <textarea placeholder="Cuéntanos algo que te haya gustado del día de hoy" cols="40" rows="5" id="userComment"></textarea>
       <textarea placeholder="¿Hay algo que crees que pueda mejorar tu experiencia en el salón de clases?" cols="40" rows="5" id="userComment"></textarea>
       <textarea placeholder="Si tuvieses súper poderes, ¿Cuál momento vivido en la escuela borrarías de tu memoria?" cols="40" rows="5" id="userComment"></textarea>
       <button class="publicar" id="publicar" type="submit"><strong>ENVIAR</strong></button>
       <div class= "wall" id="Post">
  
       </div>
        </div>
        `;
      const container = document.createElement('div');
      container.innerHTML= bInformation;
    return container;
  };