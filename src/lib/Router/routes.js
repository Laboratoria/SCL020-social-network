import { indexScreen } from './lib/views/templateIndex';
import { loginScreen } from './lib/views/templateLogin.js';
import { registerScreen } from './lib/views/templateRegister.js';
import { menu } from '../views/templateMenu';





//Enrutador
export const changeroutes = (hash) => {
   if (hash === '#/'){
      return showTemplate(hash);
   } else if (hash === '#/home'){
      return showTemplate(hash);
   } else if (hash === '#/perfilUsurio'){
         return showTemplate(hash);
   } else {
      return showTemplate(hash);
   }
}

const showTemplate = (hash) =>{
   const containerDiv = document.getElementById('view1');
   containerDiv.innerHTML = menu();

   switch (hash){
      case '#/':
         containerDiv.appendChild();
         break;
      case '#/':
         containerDiv.appendChild();
         break;
      default:
         containerDiv.innerHTML= `<h2> Error (╯°□°）╯︵ ┻━┻ </h2>`
   }
}