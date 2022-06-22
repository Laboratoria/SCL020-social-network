import { createUser } from './view/templateCreateUser.js';
import { logInTemplate } from './view/templateLogIn.js';
import { home } from './view/templateHome.js';
import { error404Template } from './view/template404.js';
import { userProfile } from './view/templateUserProfile.js';
import { searchPost } from './view/templateSearch.js';
import { editPost } from './view/templateEditPost.js';
import { newPost } from './view/templateCreatePost.js';
import { auth, onAuthStateChanged, logout } from '../firebase/auth.js'

export const showTemplates = (hash) => {
    const containerRoot = document.querySelector('#root');
    containerRoot.innerHTML = '';

    onAuthStateChanged(auth, (user) => {
    console.log(user) // */

        if (!user && hash === '#/createNewUser') {
            containerRoot.appendChild(createUser());
            return
        }
        if (!user) {
             containerRoot.appendChild(logInTemplate());
        } else {
            switch (hash) {
                case '#/home':
                containerRoot.appendChild(home());
                    break;
                case '#/userProfile':
                containerRoot.appendChild(userProfile());
                     break;
                case '#/search':
                containerRoot.appendChild(searchPost());
                    break;
                case '#/editPost':
                containerRoot.appendChild(editPost())
                    break;
                case '#/createPost':
                containerRoot.appendChild(newPost())
                    break;
                default:
                containerRoot.appendChild(error404Template());
             }
        }
    })
}