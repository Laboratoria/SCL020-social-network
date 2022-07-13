import { home } from './views/templateHome.js';
import { login } from './views/templateLogin.js';
import { menuLogin } from './views/templateMenu.js';
import { feed } from './views/templateFeed.js'

//Enrutador
export const changeRoutes = (hash) => {
   if (hash === '#/'){
      return showTemplate(hash);
   } else if (hash === '#/home'){
      return showTemplate(hash);
   }  else if (hash === '#/login'){
      return showTemplate(hash);
   } else if (hash === '#/menuLogin'){
      return showTemplate(hash);
   } else if (hash === '#/feed'){
      return showTemplate(hash);
   } else {
      return showTemplate(hash);
   }
}


export const showTemplate = (hash) => {
   const containerRoot = document.getElementById('root');
   containerRoot.innerHTML = " "
   switch (hash){
      case '#/menuLogin':
            containerRoot.appendChild(menuLogin());
            break;  
      case '#/home':
         containerRoot.appendChild(home());
         break;
      case '#/login':
         containerRoot.appendChild(login());
         break;
      
      case '#/feed':
               containerRoot.appendChild(feed());
            break;

      default:
         containerRoot.innerHTML= `<h2> Error (╯°□°）╯︵ ┻━┻ </h2>`
   };
};





