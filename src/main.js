// Este es el punto de entrada de tu aplicacion

//Rutas
import { home } from './lib/views/templateHome.js';
import { login } from './lib/views/templateLogin.js';
import { menuLogin } from './lib/views/templateMenu.js';
import { changeRoutes } from './lib/router.js';

//funciones firestore
import { savePost } from './lib/firebase/firestore.js';

//Contiene o llama el div del html
export const root =  document.getElementById('root');

//Init del router
const init = () => {
    document.getElementById('root').innerHTML = menuLogin();
    changeRoutes(window.location.hash);
    window.addEventListener('hashchange', () => {
       
        changeRoutes(window.location.hash);
    })
}

//carga el init
window.addEventListener('load', init);


//llama al input y textarea
export const title = document.getElementById('postTitle');
export const postText = postForm['postText'];

//Formulario enviado DOM
export const postForm = document.getElementById('postform');
postForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    title;
    postText;

    // const title = document.getElementById('postTitle');
    // const postText = postform['postText'];

//console.log(title.value);

   //obtiene el valor del titulo y el post del input y textarea
 console.log (savePost(title.value, postText.value));
   // console.log(postText.value)

   //Resetea el formulario, lo limpia
   postForm.reset();

});

