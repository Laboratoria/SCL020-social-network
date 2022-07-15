import { menuLogin } from './views/templateMenu.js';
import { feed } from './views/templateFeed.js';






export const showTemplate = (hash) => {
   const containerRoot = document.getElementById('root');
   containerRoot.innerHTML = " ";
   switch (hash){
      case '#/menuLogin':
            containerRoot.appendChild(menuLogin());
            
            break;  
      case '#/feed':
               containerRoot.appendChild(feed());
             
            break;

      default:
         containerRoot.innerHTML= `<h2> Error (╯°□°）╯︵ ┻━┻ </h2>`
   };
};



