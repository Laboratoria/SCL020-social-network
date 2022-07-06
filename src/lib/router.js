import { home } from './views/templateHome.js';
import { login } from './views/templateLogin.js';
import { register } from './views/templateRegister.js';
import { menu } from './views/templateMenu.js';





//Enrutador
export const changeRoutes = (hash) => {
   if (hash === '#/'){
      return showTemplate(hash);
   } else if (hash === '#/home'){
      return showTemplate(hash);
   } else if (hash === '#/profile'){
         return showTemplate(hash);
   } else if (hash === '#/register'){
      return showTemplate(hash);
   } else if (hash === '#/login'){
      return showTemplate(hash);
   } else if (hash === '#/menu'){
      return showTemplate(hash);
   } else if (hash === '#/feed'){
      return showTemplate(hash);
   } else {
      return showTemplate(hash);
   }
}

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
      case '#/profile':
         containerRoot.appendChild(profile());
         break;
      case '#/register':
            containerRoot.appendChild(register());
            break;
      case '#/feed':
               containerRoot.appendChild(feed());
            break;

      default:
         containerDiv.innerHTML= `<h2> Error (╯°□°）╯︵ ┻━┻ </h2>`
   }
}