import {navigate} from '../router/routes.js';

function profile() {
  const html = //html
`<h2>TU PERFIL</h2>
<button> GRUPOS </button>`;
const container= document.createElement('div');
container.innerHTML = html;
const button = container.querySelector('button');
button.addEventListener('click', () =>{navigate('profile')});
return container;
}

export {profile};