import { home } from './views/templateHome.js';
import { login } from './views/templateLogin.js';
import { menu } from './views/templateMenu.js';
import { feed } from './views/templateFeed.js'




//Enrutador
export const changeRoutes = (hash) => {
   if (hash === '#/'){
      return showTemplate(hash);
   } else if (hash === '#/home'){
      return showTemplate(hash);
   }  else if (hash === '#/login'){
      return showTemplate(hash);
   } else if (hash === '#/menu'){
      return showTemplate(hash);
   } else if (hash === '#/feed'){
      return showTemplate(hash);
   } else {
      return showTemplate(hash);
   }
}

//muestra los templates segun el hash
export const showTemplate = (hash) => {
   const containerRoot = document.getElementById('root');
   containerDiv.innerHTML = menu();

   switch (hash){
      case '#/home':
         containerRoot.appendChild(home());
         break;
      case '#/login':
         containerRoot.appendChild(login());
         break;
      case '#/menu':
            containerRoot.appendChild(menu());
            break;  
      case '#/feed':
               containerRoot.appendChild(feed());
            break;

      default:
         containerDiv.innerHTML= `<h2> Error (╯°□°）╯︵ ┻━┻ </h2>`
   }
}