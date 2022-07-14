import { menuLogin } from './views/templateMenu.js';
import { feed } from './views/templateFeed.js';
import { loginGoogle } from './firebase/auth.js';


//Enrutador
// export const changeRoutes = (hash) => {
//    if (hash === '#/'){
//       return showTemplate(hash);
//    } else if (hash === '#/menuLogin'){
//       return showTemplate(hash);
//    } else if (hash === '#/feed'){
//       return showTemplate(hash);
//    } else {
//       return showTemplate(hash);
//    }
// }


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





