
//Función que contiene vista del Menu
export const menu = () => {
    const menuScreen = `<div>
    <ul> 
    <li>Menú</li>
    <li>
      <a href="#/">Home</a>
    </li>
    <li>
      <a href="#/profile">Perfil</a>
    </li>
    <li>
    <a href="#/feed">Muro</a>
    </li>
    <li>
      <a href="#/logOut">Cerrar Sesión</a>
    </li>
  </ul>
    </div>`;
    return menuScreen;
};