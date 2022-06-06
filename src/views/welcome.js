const Welcome = () => {

    const template = 
    `   <header>
    <img src= "./img/logofon.png" alt="logo" class="logo1">
    </header>
    <h1>Te damos la bienvenida a la primera red social de creadores y fans.
    </h1>
    <div class="btn1">
    <button>Iniciar Sesión</button>
    </div>
    <div class="btn2">
    <button>Autenticar con Google</button>
    </div>
    <h2>¿No tienes una cuenta? <a href="#/">Regístrate</a> 
    </h2>
    `
    const container = document.createElement('div')
    container.innerHTML = template
    
    return container
      
    }
    Welcome()
     
    
    
    
        export default Welcome