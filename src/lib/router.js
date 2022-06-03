import { login } from './views/templateLogin.js';
import { err404 } from './views/template404.js';
import { age } from './views/templateAge.js';
import { ageRedirect } from './views/templateAgeRedirect.js';
import { deleteComment } from './views/templateDeleteComment.js';
import { feed } from './views/templateFeed.js';
import { home } from './views/templateHome.js';
import { logoutConfirmation } from './views/templateLogoutConfirmation.js';
import { menu } from './views/templateMenu.js';
import { profile } from './views/templateProfile.js';
import { signUp } from './views/templateSignUp.js';
import { welcome } from './views/templateWelcome.js';

export const changeRoute = (hash) => {
    if(hash === '#/profile'){
        return showTemplate(hash)
    } else if (hash=== '#/feed'){
        return showTemplate(hash)
    } else if (hash=== '#/sign-out'){
        return showTemplate(hash)
    }else {
        return showTemplate(hash)
    }
}

const showTemplate = (hash)=>{
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML=menu();
    
    switch(hash){
        case '#/profile':
            containerRoot.appendChild(menu());
            break;
        case '#/feed':
            containerRoot.appendChild(menu());
             break;
        case '#/sign-out':
            containerRoot.appendChild(menu());
             break;
        default:
            containerRoot.appendChild(err404());
    }
}


document.getElementById("root").appendChild(home());