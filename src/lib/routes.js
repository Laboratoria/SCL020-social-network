import { loginScreen } from './lib/templates.js';
import { indexScreen, registerScreen } from "./templates";



//Rutas
export const routes = {
   '/': indexScreen,
   '/Login': loginScreen,
   '/Register' : registerScreen
}


//Enrutador
export const router = async () => {
   const index = null || document.getElementById('view1');
   const login = null || document.getElementById('view2');

   index.innerHTML = await indexScreen();
}