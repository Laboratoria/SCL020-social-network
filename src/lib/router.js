import { menuLogin } from './views/templateMenu.js';
import { feed } from './views/templateFeed.js';
import { loginGoogle } from './firebase/auth.js';


export const changeRoutes = (hash) => {
   const containerRoot = document.getElementById('root');
   //containerRoot.innerHTML = "";
   switch (hash){
      case '#/menuLogin':
               containerRoot.appendChild(menuLogin());
               loginGoogle();

            break;  
      case '#/feed':
               containerRoot.appendChild(feed());
               
            break;
      default:
         containerRoot.innerHTML= `<h2> Error (╯°□°）╯︵ ┻━┻ </h2>`
   };
};





