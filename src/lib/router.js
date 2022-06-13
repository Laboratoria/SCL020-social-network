import { introduccion } from './lib/views/introduccion.js';
import { loguearse } from './lib/views/loguearse.js';

export const changeRouter = (hash) => {
    if (hash === '#/loguearse') {
        return showTemplate(hash)
    }
}

const showTemplate = (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = introduccion();

    switch (hash) {
        case '#/loguearse':
            containerRoot.innerHTML(loguearse());
            break;
        default:
            containerRoot.innerHTML = `<h2>No existe</h2>`

    }

}