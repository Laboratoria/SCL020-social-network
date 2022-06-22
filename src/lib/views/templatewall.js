export const wall = () => {
    const divWall = document.createElement("div")
    const viewWall =

        `
    <div class="wall">
         
      </div>

      <header>
          <img> logo de la aplicacion
          <img> logo para escribir
      </header>
      <div>
          <img>
          <h1>Nombre del usuario</h1>
          <div>
              <h1>Titulo de la receta</h1>
              <img>
              <p>Receta de arepa y preparacion</p>
          </div>
          <footer>
              <img>
              <img>
              <img>
              <img>
              <img>
          </footer>
  
  
      </div>
      </div>
      `
    divWall.innerHTML = viewWall;
    return divWall;
};