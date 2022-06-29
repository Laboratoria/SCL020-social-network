export const bForm = () => {
    const bInformation = //html
    `
  <div class="bullyingView">
        <header class = "headerBullying">
            <img src = "Social-Images/logoWall.png">
            <a href="#/wall" class ="backToWall" id="salir"><strong>Muro</strong></a>
        </header>
       <p class = "q" >¿Cómo te sentiste hoy en clases?</p>
       <textarea class = "questionsB" placeholder="" cols="40" rows="5" id="userComment"></textarea>
       <p class = "q">Cuéntanos algo que te haya gustado del día de hoy</p>
       <textarea class = "questionsB" placeholder="" cols="40" rows="5" id="userComment"></textarea>
       <p class = "q">¿Hay algo que crees que pueda mejorar tu experiencia en el salón de clases?</p>
       <textarea class = "questionsB" placeholder="" cols="40" rows="5" id="userComment"></textarea>
       <p class = "q" text-align = "left">Si tuvieses súper poderes, ¿Cuál momento vivido en la escuela borrarías de tu memoria?</p>
       <textarea class = "questionsB" placeholder="" cols="40" rows="5" id="userComment"></textarea>
       <button class="send" id="send" type="submit">ENVIAR</button>
        </div>
        `;
      const container = document.createElement('div');
      container.innerHTML = bInformation;
      container.className = 'bullyingViewContainer';
    return container;
  };